const Eliza = require('@ai16z/eliza');
const { Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } = require('@solana/web3.js');
const { createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');
const DatabaseAdapter = require('./DatabaseAdapter'); // Adjust the path accordingly
const bs58 = require('bs58');

const databaseAdapter = new DatabaseAdapter();

// Connect to Solana devnet
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
console.log("Connected to Solana devnet");

// Define the createToken action
async function createTokenAction(context) {
  console.log("createToken action triggered");

  const tokenName = context.userInput.tokenName;
  console.log(`Token Name: ${tokenName}`);

  const tokenSymbol = context.userInput.tokenSymbol;
  console.log(`Token Symbol: ${tokenSymbol}`);

  const initialSupply = context.userInput.initialSupply;
  console.log(`Initial Supply: ${initialSupply}`);

  // Generate a new keypair
  const newPair = Keypair.generate();
  console.log("New keypair generated");
  console.log("Public Key:", newPair.publicKey.toBase58());
  console.log("Private Key:", bs58.encode(newPair.secretKey));

  try {
    // Check the balance of the new account
    let balance = await connection.getBalance(newPair.publicKey);
    console.log(`Current Balance: ${balance} lamports`);

    // If the balance is less than 1 SOL, request an airdrop
    if (balance < LAMPORTS_PER_SOL) {
      console.log("Requesting airdrop...");
      const airdropSignature = await connection.requestAirdrop(newPair.publicKey, LAMPORTS_PER_SOL);
      await connection.confirmTransaction(airdropSignature);
      console.log('1 SOL airdropped to', newPair.publicKey.toBase58());
    }

    // Create the SPL token mint
    const mint = await createMint(
      connection,
      newPair,
      newPair.publicKey,
      null,
      9 // Decimals
    );
    console.log(`Mint created: ${mint.toBase58()}`);

    // Get or create the associated token account
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      newPair,
      mint,
      newPair.publicKey
    );
    console.log(`Token account created: ${tokenAccount.address.toBase58()}`);

    // Mint tokens to the token account
    await mintTo(
      connection,
      newPair,
      mint,
      tokenAccount.address,
      newPair.publicKey,
      initialSupply
    );
    console.log(`Minted ${initialSupply} tokens to ${tokenAccount.address.toBase58()}`);

    // Placeholder for returning receipt or confirmation
    return { success: true, message: `Token ${tokenName} (${tokenSymbol}) created successfully on Solana with supply ${initialSupply}` };
  } catch (err) {
    console.error('An error occurred during the SOL airdrop or token creation process', err);
    return { success: false, message: 'Token creation failed' };
  }
}

// Example user prompt parsing
function parsePrompt(prompt) {
  const regex = /program me a solana token with (\d+) coin supply and the token name is ([\w\s]+), symbol is (\w+)/i;
  const tokenDetails = prompt.match(regex);
  if (!tokenDetails) {
    console.error('Invalid prompt format');
    return null; // Return null in case of invalid format
  }
  return {
    initialSupply: Number(tokenDetails[1]),
    tokenName: tokenDetails[2].trim(),
    tokenSymbol: tokenDetails[3].trim(),
  };
}

function createAgent(character, db, cache, token) {
  console.log("Creating agent runtime");
  return new Eliza.AgentRuntime({
    databaseAdapter: db,
    token,
    modelProvider: character.modelProvider,
    character,
    actions: [
      {
        name: 'createToken',
        description: 'Prompts for token details and deploys the token.',
        handler: createTokenAction,
      },
    ],
    cacheManager: cache,
  });
}

function initializeDatabase() {
  return databaseAdapter;
}

async function startAgent() {
  const character = {
    id: "your-character-id",
    name: "Token Creation Agent",
    modelProvider: "anthropic",
    settings: {
      secrets: {
        OPENAI_API_KEY: "",
      },
    },
    clients: [],
    plugins: [],
  };

  const db = initializeDatabase();
  const cache = new Eliza.CacheManager(new Eliza.FsCacheAdapter('./cache'));
  const token = character.settings.secrets.OPENAI_API_KEY;
  const runtime = createAgent(character, db, cache, token);

  await runtime.initialize();
  console.log("Agent runtime initialized");

  return runtime;
}

startAgent().then((runtime) => {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Chat started. Type 'exit' to quit.");
  const agentId = "your-character-id"; // Using the character ID as the agent ID

  function askQuestion() {
    rl.question("You: ", async (input) => {
      if (input.toLowerCase() !== 'exit') {
        try {
          const parsedInput = parsePrompt(input);
          if (!parsedInput) {
            console.log("Invalid prompt format. Please follow the format: 'program me a solana token with [supply] coin supply and the token name is [name], symbol is [symbol]'");
            askQuestion();
            return;
          }
          const action = runtime.actions.find(action => action.name === 'createToken');
          if (!action) {
            console.error("Action not found.");
            return;
          }
          const response = await action.handler({
            userId: 'user',
            userInput: parsedInput
          });
          console.log(`Agent: ${response.message}`);
        } catch (error) {
          console.error("Error handling message:", error);
        }
        askQuestion(); // Loop back to ask another question
      } else {
        rl.close();
        process.exit(0);
      }
    });
  }

  askQuestion();

  rl.on('SIGINT', () => {
    rl.close();
    process.exit(0);
  });
}).catch((error) => {
  console.error("Unhandled error in startAgent:", error);
  process.exit(1);
});
