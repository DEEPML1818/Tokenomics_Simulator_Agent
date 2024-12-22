import React, { useState } from "react";
import "../styles/DAOTreasuryGrowth.css";

function DAOTreasuryGrowth() {
  const [stakingRewards, setStakingRewards] = useState(5); // Default 5% APY
  const [treasuryInflows, setTreasuryInflows] = useState(10000); // Default 10,000 tokens
  const [inflationRate, setInflationRate] = useState(2); // Default 2% annual inflation
  const [growthProjection, setGrowthProjection] = useState([]);

  const simulateGrowth = () => {
    const years = 10; // Simulate for 10 years
    let treasury = 0;
    const projection = [];

    for (let i = 1; i <= years; i++) {
      treasury += treasuryInflows + (treasury * stakingRewards) / 100;
      treasury -= treasury * (inflationRate / 100); // Adjust for inflation
      projection.push({ year: i, treasury: treasury.toFixed(2) });
    }

    setGrowthProjection(projection);
  };

  return (
    <div className="dao-treasury-growth">
      <div className="container">
        <h2>DAO Treasury Growth Simulator</h2>
        <p>
          Project the long-term growth of DAO treasuries based on staking
          rewards, treasury inflows, and inflation rates.
        </p>

        <div className="input-section">
          <div className="form-group">
            <label>Staking Rewards (APY %)</label>
            <input
              type="number"
              value={stakingRewards}
              onChange={(e) => setStakingRewards(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Treasury Inflows (tokens/year)</label>
            <input
              type="number"
              value={treasuryInflows}
              onChange={(e) => setTreasuryInflows(Number(e.target.value))}
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
          <button className="cta-button" onClick={simulateGrowth}>
            Simulate Growth
          </button>
        </div>

        {growthProjection.length > 0 && (
          <div className="results-section">
            <h3>Growth Projection</h3>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Treasury Balance (tokens)</th>
                </tr>
              </thead>
              <tbody>
                {growthProjection.map((entry) => (
                  <tr key={entry.year}>
                    <td>{entry.year}</td>
                    <td>{entry.treasury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DAOTreasuryGrowth;
