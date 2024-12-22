import React, { useState } from "react";
import "../styles/DeFiIntegrations.css";

function DeFiIntegrations() {
  const [swapAmount, setSwapAmount] = useState("");
  const [stakingAmount, setStakingAmount] = useState("");
  const [liquidityAmount, setLiquidityAmount] = useState("");

  const handleSwap = () => {
    alert(`Swapping ${swapAmount} tokens!`);
    // Integrate backend call for token swaps here
  };

  const handleStake = () => {
    alert(`Staking ${stakingAmount} tokens!`);
    // Integrate backend call for staking here
  };

  const handleLiquidity = () => {
    alert(`Adding ${liquidityAmount} tokens to the liquidity pool!`);
    // Integrate backend call for liquidity provisioning here
  };

  return (
    <div className="defi-integrations">
      <div className="container">
        <h2>DeFi Integrations</h2>

        {/* Simulation Tools Section */}
        <section className="simulation-tools">
          <h3>Simulate DeFi Actions</h3>

          <div className="action-card">
            <h4>Token Swap</h4>
            <input
              type="number"
              placeholder="Enter amount"
              value={swapAmount}
              onChange={(e) => setSwapAmount(e.target.value)}
            />
            <button className="cta-button" onClick={handleSwap}>
              Simulate Swap
            </button>
          </div>

          <div className="action-card">
            <h4>Stake Tokens</h4>
            <input
              type="number"
              placeholder="Enter amount"
              value={stakingAmount}
              onChange={(e) => setStakingAmount(e.target.value)}
            />
            <button className="cta-button" onClick={handleStake}>
              Simulate Staking
            </button>
          </div>

          <div className="action-card">
            <h4>Liquidity Provisioning</h4>
            <input
              type="number"
              placeholder="Enter amount"
              value={liquidityAmount}
              onChange={(e) => setLiquidityAmount(e.target.value)}
            />
            <button className="cta-button" onClick={handleLiquidity}>
              Simulate Liquidity
            </button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="integration-overview">
          <h3>Integration Tools</h3>
          <ul>
            <li>
              <strong>Orca Whirlpools</strong>: Dynamic fee optimization for liquidity pools.
            </li>
            <li>
              <strong>Meteora</strong>: Calculates optimal earnings from LPs.
            </li>
            <li>
              <strong>Adrena APIs</strong>: Enables perpetual and spot trade simulations.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DeFiIntegrations;
