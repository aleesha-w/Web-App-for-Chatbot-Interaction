import React from 'react';
import './metrics.css'; 

const Sidebar = ({ onNavigate }) => {

 

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
      <div className="sidebar">
        <div><h4>Switch Model</h4></div>
        <div>
        <button className="sidebar-item" onClick={handleSMN}>SMN</button>
        <button className="sidebar-item" onClick={handleDUA}>DUA</button>
        <button className="sidebar-item" onClick={handleDAM}>DAM</button>
        <button className="sidebar-item" onClick={handleIoI}>IoI</button>
        <button className="sidebar-item" onClick={handleESIM}>ESIM</button>
        <button className="sidebar-item" onClick={handleBERT}>BERT</button>
        <button className="sidebar-item" onClick={handleBERTFP}>BERT-FP</button>
        <button className="sidebar-item" onClick={handleBERTSL}>BERT-SL</button>
        <button className="sidebar-item" onClick={handleSABERT}>SA-BERT</button>
        <button className="sidebar-item" onClick={handleBERTDPT}>BERT-DPT</button>
        <button className="sidebar-item2" onClick={handleViewMetricsClick}><strong>View Metrics</strong></button>
        </div>
      </div>
    );
};

export default Sidebar;
