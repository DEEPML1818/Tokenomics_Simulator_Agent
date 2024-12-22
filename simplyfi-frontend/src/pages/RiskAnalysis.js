import React, { useState } from "react";
import "../styles/RiskAnalysis.css";

function RiskAnalysis() {
  const [liquidityOutflow, setLiquidityOutflow] = useState(10); // Default 10% liquidity outflow
  const [inflationRate, setInflationRate] = useState(5); // Default 5% annual inflation
  const [priceVolatility, setPriceVolatility] = useState(20); // Default 20% price volatility
  const [riskScore, setRiskScore] = useState(null);

  const calculateRiskScore = () => {
    // Simple risk calculation logic (can be replaced with backend integration)
    const score =
      liquidityOutflow * 0.4 + inflationRate * 0.3 + priceVolatility * 0.3;
    setRiskScore(score.toFixed(2));
  };

  return (
    <div className="risk-analysis">
      <div className="container">
        <h2>Risk Analysis</h2>
        <p>
          Simulate and evaluate the risks associated with different tokenomics
          strategies.
        </p>

        <div className="input-section">
          <div className="form-group">
            <label>Liquidity Outflow (%)</label>
            <input
              type="number"
              value={liquidityOutflow}
              onChange={(e) => setLiquidityOutflow(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Inflation Rate (%)</label>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Price Volatility (%)</label>
            <input
              type="number"
              value={priceVolatility}
              onChange={(e) => setPriceVolatility(Number(e.target.value))}
            />
          </div>
          <button className="cta-button" onClick={calculateRiskScore}>
            Calculate Risk Score
          </button>
        </div>

        {riskScore !== null && (
          <div className="results-section">
            <h3>Risk Score</h3>
            <div className={`risk-score-display risk-${getRiskLevel(riskScore)}`}>
              <p>
                <strong>{riskScore}</strong>
              </p>
              <p>Risk Level: {getRiskLevel(riskScore)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const getRiskLevel = (score) => {
  if (score < 20) return "Low Risk Relatively safe to proceed.";
  if (score < 50) return "Moderate Risk Proceed with caution.";
  return "High Risk Consider mitigation strategies.";
};

export default RiskAnalysis;
