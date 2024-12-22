const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const tokenomicsRoute = require("./routes/tokenomics");
const liquidityRoute = require("./routes/liquidity");
const walletRoute = require("./routes/wallet");
const priceRoute = require("./routes/price");
const tokenRoute = require("./routes/token");
const marketRoute = require("./routes/market")

// Setup API Endpoints
app.use("/api/tokenomics", tokenomicsRoute);
app.use("/api/liquidity", liquidityRoute);
app.use("/api/wallet", walletRoute);
app.use("/api/price", priceRoute);
app.use("/api/token", tokenRoute);
app.use("/api/market", marketRoute);

// Default Endpoint
app.get("/", (req, res) => {
    res.send("Tokenomics Simulator Backend Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
