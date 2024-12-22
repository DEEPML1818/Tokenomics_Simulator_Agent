const express = require("express");
const { buildWhirlpoolClient } = require("@orca-so/whirlpools-sdk");
const { Connection, PublicKey } = require("@solana/web3.js");

const router = express.Router();
const connection = new Connection(process.env.SOLANA_RPC_URL);

router.get("/:poolAddress", async (req, res) => {
    try {
        const poolAddress = req.params.poolAddress;
        const whirlpoolClient = buildWhirlpoolClient(connection);
        const pool = await whirlpoolClient.getPool(new PublicKey(poolAddress));
        res.json({
            tokenA: pool.tokenMintA.toString(),
            tokenB: pool.tokenMintB.toString(),
            liquidity: pool.liquidity.toString(),
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch pool info." });
    }
});

module.exports = router;
