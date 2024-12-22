import React, { useState } from "react";
import "../styles/LiquidityPoolManagement.css";

function LiquidityPoolManagement() {
  const [liquidity, setLiquidity] = useState(1000); // Default 1000 tokens
  const [feeRate, setFeeRate] = useState(0.3); // Default 0.3% fee
  const [apy, setApy] = useState(null);
  const [feeEarnings, setFeeEarnings] = useState(null);

  const calculateAPY = () => {
    // Simplistic APY calculation
    const apyValue = (liquidity * feeRate * 365) / 100;
    setApy(apyValue.toFixed(2));
  };

  const simulateFeeEarnings = () => {
    // Simple fee earnings calculation for one day
    const earnings = (liquidity * feeRate) / 100;
    setFeeEarnings(earnings.toFixed(2));
  };

  return (
    <div className="lp-management">
      <div className="container">
        <h2>Liquidity Pool Management</h2>
        <p>
          Manage and simulate liquidity pools. Optimize fees and analyze
          performance metrics like APY and fee earnings.
        </p>

        <div className="input-section">
          <div className="form-group">
            <label>Liquidity (tokens)</label>
            <input
              type="number"
              value={liquidity}
              onChange={(e) => setLiquidity(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Fee Rate (%)</label>
            <input
              type="number"
              value={feeRate}
              onChange={(e) => setFeeRate(Number(e.target.value))}
              min="0.1"
              step="0.1"
            />
          </div>
          <div className="button-group">
            <button className="cta-button" onClick={calculateAPY}>
              Calculate APY
            </button>
            <button className="cta-button" onClick={simulateFeeEarnings}>
              Simulate Fee Earnings
            </button>
          </div>
        </div>

        <div className="results-section">
          {apy !== null && (
            <div className="result">
              <h3>Estimated APY</h3>
              <p>{apy}%</p>
            </div>
          )}
          {feeEarnings !== null && (
            <div className="result">
              <h3>Daily Fee Earnings</h3>
              <p>{feeEarnings} tokens</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LiquidityPoolManagement;
