const express = require("express");
const { Connection, PublicKey } = require("@solana/web3.js");
const { SwitchboardProgram, SBV2_MAINNET_PID } = require("@switchboard-xyz/solana.js");

const router = express.Router();
const connection = new Connection(process.env.SOLANA_RPC_URL);

router.get("/:feedAddress", async (req, res) => {
    try {
        const feedAddress = req.params.feedAddress;
        const switchboardProgram = await SwitchboardProgram.load(connection, SBV2_MAINNET_PID);
        const aggregator = await switchboardProgram.loadAggregator(new PublicKey(feedAddress));
        const latestValue = await aggregator.latestValue();
        res.json({ price: latestValue.toString() });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch price data." });
    }
});

module.exports = router;
