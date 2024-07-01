import React, { useState, useEffect  } from 'react';
import './metrics.css'; 

const Header = ({ onNavigate, user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    onLogout();
    onNavigate('/login');
  };

  const handleHome = () => {
    onNavigate('/');
  };

  // Use a useEffect hook to handle clicks outside the dropdown to close it
  useEffect(() => {
    const closeDropdown = (e) => {
      // If the target of the click isn't within the user-info div, close the dropdown
      if (!e.target.closest('.user-info')) {
        setShowDropdown(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener('click', closeDropdown);

    // Cleanup the event listener
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <div className="header">
      <a onClick={() => onNavigate('/')} style={{ cursor: 'pointer' }}>
        <h1>Model Analysis</h1>
      </a>
      <div className="user-info">
        <span>{user ? user.name : 'Username'}</span>
        <div className="user-icon" onClick={toggleDropdown}>👤</div>
        {showDropdown && (
          <div className="dropdown-content show-dropdown"> {/* Update class to show dropdown */}
            <a onClick={handleHome}>Home</a>
            <a onClick={handleLogout}>Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;