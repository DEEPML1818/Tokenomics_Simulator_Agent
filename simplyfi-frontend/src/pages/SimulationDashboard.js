import React, { useState } from "react";
import "../styles/SimulationDashboard.css";

function SimulationDashboard() {
  const [inflationRate, setInflationRate] = useState(2.5);
  const [stakingReward, setStakingReward] = useState(5.0);

  const handleSimulation = () => {
    alert("Running simulation with current parameters!");
    // Integrate backend call here in the future
  };

  return (
    <div className="simulation-dashboard">
      <div className="container">
        {/* Overview Section */}
        <section className="overview">
          <h2>Simulation Dashboard</h2>
          <div className="cards">
            <div className="card">
              <h3>Token Price</h3>
              <p>$42.00</p>
            </div>
            <div className="card">
              <h3>Staking Ratio</h3>
              <p>60%</p>
            </div>
            <div className="card">
              <h3>Liquidity Flow</h3>
              <p>+$12,000</p>
            </div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="controls">
          <h2>Adjust Parameters</h2>
          <div className="control-group">
            <label>Inflation Rate (%)</label>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label>Staking Reward (APY %)</label>
            <input
              type="number"
              value={stakingReward}
              onChange={(e) => setStakingReward(e.target.value)}
            />
          </div>
          <button className="cta-button" onClick={handleSimulation}>
            Run Simulation
          </button>
        </section>

        {/* Charts Section */}
        <section className="charts">
          <h2>Simulation Results</h2>
          <div className="chart-placeholder">
            {/* Placeholder for D3.js or Chart.js */}
            <p>Charts will appear here.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SimulationDashboard;