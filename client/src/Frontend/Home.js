
import React from 'react';
import './Home.css';

const Home = ({ onNavigate, user, onLogout }) => {

  const handleViewMetricsClick = () => {
    console.log("View all metrics button clicked");
    onNavigate('/metrics');
  };

  const handleSMN=()=>{
    console.log("View SMN button clicked");
    onNavigate('/SMN');
  };

  const handleDUA=()=>{
    console.log("View DUA button clicked");
    onNavigate('/DUA');
  };

  const handleDAM=()=>{
    console.log("View DAM button clicked");
    onNavigate('/DAM');
  };

  const handleIoI=()=>{
    console.log("View IoI button clicked");
    onNavigate('/IoI');
  };

  const handleESIM=()=>{
    console.log("View ESIM button clicked");
    onNavigate('/ESIM');
  };

  const handleBERT=()=>{
    console.log("View BERT button clicked");
    onNavigate('/BERT');
  };

  const handleBERTFP=()=>{
    console.log("View BERT-FP button clicked");
    onNavigate('/BERTFP');
  };

  const handleBERTSL=()=>{
    console.log("View BERT-SL button clicked");
    onNavigate('/BERTSL');
  };

  const handleSABERT=()=>{
    console.log("View SA-BERT button clicked");
    onNavigate('/SABERT');
  };

  const handleBERTDPT=()=>{
    console.log("View BERT-DPT button clicked");
    onNavigate('/BERTDPT');
  };

  return (
    <div>
      <div className="header2">
      <h1>Model Analysis</h1>
      <div className="user-info" style={{ position: 'absolute', right: '20px' }}>
        <span>Username</span>
        <div className="user-icon">👤</div>
      </div>
      </div>
      <div className="container">
        <div className="model-selection">
        <button className="model-button" onClick={handleSMN}>SMN</button>
        <button className="model-button" onClick={handleDUA}>DUA</button>
        <button className="model-button" onClick={handleDAM}>DAM</button>
        <button className="model-button" onClick={handleIoI}>IoI</button>
        <button className="model-button" onClick={handleESIM}>ESIM</button>
        <button className="model-button" onClick={handleBERT}>BERT</button>
        <button className="model-button" onClick={handleBERTFP}>BERT-FP</button>
        <button className="model-button" onClick={handleBERTSL}>BERT-SL</button>
        <button className="model-button" onClick={handleSABERT}>SA BERT</button>
        <button className="model-button" onClick={handleBERTDPT}>BERT DPT</button>
        </div>
        <div className="metrics-view">
          <button className="metrics-button" onClick={handleViewMetricsClick}>
            View all metrics
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
