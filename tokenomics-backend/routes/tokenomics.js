const express = require("express");
const { AmmImpl } = require("@mercurial-finance/dynamic-amm-sdk");
const { Connection, Keypair } = require("@solana/web3.js");

const router = express.Router();

// Set up the Solana connection and wallet
const connection = new Connection("https://api.devnet.solana.com");
const wallet = Keypair.generate();

// Initialize the AMM client
const ammClient = new AmmImpl({ connection, wallet });

router.post("/simulate", async (req, res) => {
    try {
        const { tokenPair, amount } = req.body;
        // Simulate the LP optimization
        const simulation = await ammClient.simulateLP(tokenPair, amount);
        res.json(simulation);
    } catch (error) {
        res.status(500).json({ error: "Failed to simulate LP optimization." });
    }
});

module.exports = router;
