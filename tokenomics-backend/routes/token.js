const express = require("express");
const { Connection, Keypair, Transaction, SystemProgram, PublicKey } = require("@solana/web3.js");

const router = express.Router();
const connection = new Connection(process.env.SOLANA_RPC_URL);

router.post("/create", async (req, res) => {
    try {
        const { totalSupply, decimals } = req.body;

        const mint = Keypair.generate();

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: new PublicKey("<YOUR_WALLET_PUBLIC_KEY>"),
                newAccountPubkey: mint.publicKey,
                lamports: await connection.getMinimumBalanceForRentExemption(82),
                space: 82,
                programId: new PublicKey("<TOKEN_PROGRAM_ID>"),
            })
        );

        const signature = await connection.sendTransaction(transaction, [mint]);
        res.json({ mint: mint.publicKey.toString(), signature });
    } catch (error) {
        res.status(500).json({ error: "Failed to create token." });
    }
});

module.exports = router;
