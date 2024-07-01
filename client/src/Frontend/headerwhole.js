import React from 'react';
import './headerwhole.css'; 

const Header = ({ onNavigate }) => {

  const handleHome = () => {
    console.log("View home clicked");
    onNavigate('/');
  };
  
  return (
    <div className="header">
      <a onClick={handleHome} style={{ cursor: 'pointer' }}>
        <h1>Model Analysis</h1>
      </a>
      <div className="user-info" style={{ position: 'absolute', right: '20px' }}>
        <span>Username</span>
        <div className="user-icon">👤</div>
      </div>
    </div>
  );
};



export default Header;
