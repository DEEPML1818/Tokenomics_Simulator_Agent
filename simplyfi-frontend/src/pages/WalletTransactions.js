import React, { useState } from "react";
import "../styles/WalletTransactions.css";

function WalletTransactions() {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      type: "Stake",
      amount: "100",
      status: "Success",
      date: "2024-12-20",
    },
    {
      id: "2",
      type: "Swap",
      amount: "50",
      status: "Pending",
      date: "2024-12-19",
    },
  ]);

  const connectWallet = () => {
    // Placeholder function for wallet connection
    setWalletAddress("5Z8G...XYZ");
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setIsConnected(false);
  };

  return (
    <div className="wallet-transactions">
      <div className="container">
        <h2>Wallet & Transactions</h2>
        <p>
          Connect your wallet to interact with the platform. View balances and
          transaction history.
        </p>

        <div className="wallet-section">
          {isConnected ? (
            <div className="wallet-info">
              <p>
                <strong>Wallet Address:</strong> {walletAddress}
              </p>
              <button className="cta-button" onClick={disconnectWallet}>
                Disconnect Wallet
              </button>
            </div>
          ) : (
            <button className="cta-button" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>

        <div className="transactions-section">
          <h3>Transaction History</h3>
          {transactions.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id}>
                    <td>{txn.id}</td>
                    <td>{txn.type}</td>
                    <td>{txn.amount}</td>
                    <td>{txn.status}</td>
                    <td>{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No transactions found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletTransactions;
