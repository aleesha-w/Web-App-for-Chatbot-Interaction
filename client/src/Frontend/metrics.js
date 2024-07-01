import React,{useEffect, useState} from 'react';
import './metrics.css'; 
import Header from './header.js'
import Sidebar from './sidebar.js';

const Metrics = ({onNavigate, user, onLogout}) => {
  return (
    <div className="app">
      <Sidebar onNavigate={onNavigate}/>
      <div className="main-content">
      <div className="user-info">
        <Header onNavigate={onNavigate} user={user} onLogout={onLogout}/>    
        </div>
        <MetricsPanel />
      </div>
    </div>
  );
};

const MetricsPanel = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const response = await fetch('/api/metrics');
      const data = await response.json();
      setMetrics(data);
    };
    fetchMetrics();
  }, []);
  return (
    <div className="metrics-panel">
      {metrics.map(metric => (
        <MetricBox key={metric._id} title={metric.Name} metrics={[metric.RQ1, metric.RQ2, metric.RQ5]} />
      ))}
    </div>
  );
};

const MetricBox = ({ title, metrics }) => {
  const placeholders = ['R@1', 'R@2', 'R@5'];
  return (
    <div className="metric-box">
      <h2>{title}</h2>
      <ul>
        {placeholders.map((placeholder, index) => (
          <li key={placeholder}>
            {placeholder}: {metrics[index] !== undefined ? metrics[index] : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Metrics;
