import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SimulationDashboard from "./pages/SimulationDashboard";
import DeFiIntegrations from "./pages/DeFiIntegrations";
import TokenCreator from "./pages/TokenCreator";
import MarketMaking from "./pages/MarketMaking";
import WalletTransactions from "./pages/WalletTransactions";
import DAOTreasuryGrowth from "./pages/DAOTreasuryGrowth";
import RiskAnalysis from "./pages/RiskAnalysis";
import TradingInterface from "./pages/TradingInterface";
import LiquidityPoolManagement from "./pages/LiquidityPoolManagement";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <section className="section homepage">
          <Homepage />
        </section>
        <section className="section trading-panel">
          <div className="panel left">
            <SimulationDashboard />
            <DeFiIntegrations />
          </div>
          <div className="panel right">
            <WalletTransactions />
            <RiskAnalysis />
          </div>
        </section>
        <section className="section features">
          <TokenCreator />
          <MarketMaking />
        </section>
        <section className="section growth">
          <DAOTreasuryGrowth />
        </section>
        <section className="section trading">
          <TradingInterface />
          <LiquidityPoolManagement />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
