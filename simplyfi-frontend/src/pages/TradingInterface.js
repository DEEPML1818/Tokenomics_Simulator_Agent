import React, { useState } from "react";
import "../styles/TradingInterface.css";

function TradingInterface() {
  const [tradeType, setTradeType] = useState("Spot");
  const [tradeSize, setTradeSize] = useState(100); // Default 100 tokens
  const [leverage, setLeverage] = useState(1); // Default 1x for Spot (no leverage)
  const [slippage, setSlippage] = useState(0.5); // Default 0.5%
  const [tradeImpact, setTradeImpact] = useState(null);

  const simulateTrade = () => {
    const priceImpact = tradeSize * slippage * 0.01;
    const result = {
      tradeType,
      tradeSize,
      leverage,
      slippage,
      priceImpact: priceImpact.toFixed(2),
    };
    setTradeImpact(result);
  };

  return (
    <div className="trading-interface">
      <div className="container">
        <h2>Trading Interface</h2>
        <p>
          Simulate spot and perpetual trades, and analyze their impact on token
          prices and portfolio balance.
        </p>

        <div className="input-section">
          <div className="form-group">
            <label>Trade Type</label>
            <select
              value={tradeType}
              onChange={(e) => setTradeType(e.target.value)}
            >
              <option value="Spot">Spot</option>
              <option value="Perpetual">Perpetual</option>
            </select>
          </div>
          <div className="form-group">
            <label>Trade Size (tokens)</label>
            <input
              type="number"
              value={tradeSize}
              onChange={(e) => setTradeSize(Number(e.target.value))}
            />
          </div>
          {tradeType === "Perpetual" && (
            <div className="form-group">
              <label>Leverage (x)</label>
              <input
                type="number"
                value={leverage}
                onChange={(e) => setLeverage(Number(e.target.value))}
                min="1"
                max="100"
              />
            </div>
          )}
          <div className="form-group">
            <label>Slippage (%)</label>
            <input
              type="number"
              value={slippage}
              onChange={(e) => setSlippage(Number(e.target.value))}
              min="0.01"
              step="0.01"
            />
          </div>
          <button className="cta-button" onClick={simulateTrade}>
            Simulate Trade
          </button>
        </div>

        {tradeImpact && (
          <div className="results-section">
            <h3>Trade Impact</h3>
            <ul>
              <li>
                <strong>Trade Type:</strong> {tradeImpact.tradeType}
              </li>
              <li>
                <strong>Trade Size:</strong> {tradeImpact.tradeSize} tokens
              </li>
              {tradeImpact.tradeType === "Perpetual" && (
                <li>
                  <strong>Leverage:</strong> {tradeImpact.leverage}x
                </li>
              )}
              <li>
                <strong>Slippage:</strong> {tradeImpact.slippage}%
              </li>
              <li>
                <strong>Price Impact:</strong> {tradeImpact.priceImpact} tokens
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TradingInterface;
