import React from "react";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to SimplyFi.Fun</h1>
          <p>
            The AI-driven platform for tokenomics, trading, and liquidity pool management.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose SimplyFi.Fun?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Simulation Engine</h3>
              <p>
                Model scenarios like token supply, staking rewards, inflation, and more.
              </p>
            </div>
            <div className="feature-card">
              <h3>AI Insights</h3>
              <p>
                Get real-time predictions and insights with advanced AI models.
              </p>
            </div>
            <div className="feature-card">
              <h3>DeFi Integrations</h3>
              <p>
                Simulate on-chain actions and optimize liquidity pools seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started">
        <div className="container">
          <h2>Get Started in 3 Easy Steps</h2>
          <ol>
            <li>Connect your wallet.</li>
            <li>Adjust tokenomics parameters or create SPL tokens.</li>
            <li>View real-time simulations and insights.</li>
          </ol>
          <button className="cta-button">Connect Wallet</button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
