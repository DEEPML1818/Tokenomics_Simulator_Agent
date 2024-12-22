import React, { useState } from "react";
import "../styles/MarketMaking.css";

function MarketMaking() {
  const [tradeAmount, setTradeAmount] = useState("");
  const [priceImpact, setPriceImpact] = useState(0);
  const [liquidityChange, setLiquidityChange] = useState(0);

  const handleSimulate = () => {
    // Placeholder calculation for price impact
    const calculatedPriceImpact = (tradeAmount * 0.05).toFixed(2); // Example formula
    const calculatedLiquidityChange = (tradeAmount * 0.1).toFixed(2); // Example formula
    setPriceImpact(calculatedPriceImpact);
    setLiquidityChange(calculatedLiquidityChange);
  };

  return (
    <div className="market-making">
      <div className="container">
        <h2>Market-Making Simulator</h2>
        <p>
          Explore how trades, liquidity, and market conditions affect token
          prices.
        </p>

        <div className="simulation-form">
          <div className="form-group">
            <label>Trade Amount</label>
            <input
              type="number"
              placeholder="Enter trade amount"
              value={tradeAmount}
              onChange={(e) => setTradeAmount(e.target.value)}
            />
          </div>

          <button className="cta-button" onClick={handleSimulate}>
            Simulate Market Impact
          </button>
        </div>

        <div className="simulation-results">
          <h3>Simulation Results</h3>
          <div className="result">
            <strong>Price Impact:</strong> {priceImpact}%
          </div>
          <div className="result">
            <strong>Liquidity Change:</strong> {liquidityChange} tokens
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketMaking;
