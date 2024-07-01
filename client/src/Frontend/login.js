// Login.js
import React, { useState } from 'react';
import './Login.css';
import Header from './headerwhole.js' 

const Login = ({ onNavigate, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        onNavigate('/'); 
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error("Failed to login:", error);
      alert("Failed to login");
    }
  };

  return (
    <div className="header-container">
        <Header onNavigate={onNavigate}/>
    <div className="login-container">
    <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => onNavigate('/signup')}>Create a new account</button>
    </div>
    </div>
  );
};

export default Login;
