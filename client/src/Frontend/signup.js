import React, { useState } from 'react';
import './Signup.css'; 
import Header from './headerwhole.js'

const Signup = ({ onNavigate, setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        onNavigate('/'); 
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error("Failed to signup:", error);
      alert("Failed to signup");
    }
  };
  

  return (
    <div className="header-container">
    <Header onNavigate={onNavigate}/>
    <div className="signup-container">
        <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      <button onClick={() => onNavigate('/login')}>Log into an existing account</button>
    </div>
    </div>
  );
};

export default Signup;
