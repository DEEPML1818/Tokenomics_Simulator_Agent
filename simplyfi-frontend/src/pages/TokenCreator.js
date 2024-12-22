import React, { useState } from "react";
import "../styles/TokenCreator.css";

function TokenCreator() {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState(1000000);
  const [decimals, setDecimals] = useState(9);
  const [metadata, setMetadata] = useState("");

  const handleCreateToken = () => {
    alert(
      `Token Created: \nName: ${tokenName}\nSymbol: ${tokenSymbol}\nSupply: ${totalSupply}\nDecimals: ${decimals}\nMetadata: ${metadata}`
    );
    // Placeholder for backend token creation call
  };

  return (
    <div className="token-creator">
      <div className="container">
        <h2>Create Your SPL Token</h2>
        <p>
          Design and deploy SPL tokens with custom parameters. Simulate before
          deploying on the Solana blockchain.
        </p>

        <form className="token-form">
          <div className="form-group">
            <label>Token Name</label>
            <input
              type="text"
              placeholder="e.g., SimplyFi Token"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Token Symbol</label>
            <input
              type="text"
              placeholder="e.g., SFT"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Total Supply</label>
            <input
              type="number"
              placeholder="e.g., 1000000"
              value={totalSupply}
              onChange={(e) => setTotalSupply(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Decimals</label>
            <input
              type="number"
              placeholder="e.g., 9"
              value={decimals}
              onChange={(e) => setDecimals(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Metadata (Optional)</label>
            <textarea
              placeholder="Enter token metadata (e.g., description or logo URL)"
              value={metadata}
              onChange={(e) => setMetadata(e.target.value)}
            ></textarea>
          </div>

          <button
            type="button"
            className="cta-button"
            onClick={handleCreateToken}
          >
            Simulate Token Creation
          </button>
        </form>
      </div>
    </div>
  );
}

export default TokenCreator;
