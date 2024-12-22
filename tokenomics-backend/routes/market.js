const express = require("express");
const router = express.Router();

router.post("/simulate", async (req, res) => {
    try {
        const { liquidity, priceImpact } = req.body;

        const adjustedPrice = liquidity - priceImpact;
        res.json({ adjustedPrice });
    } catch (error) {
        res.status(500).json({ error: "Failed to simulate market." });
    }
});

module.exports = router;
