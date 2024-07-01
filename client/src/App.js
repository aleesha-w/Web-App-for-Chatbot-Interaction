import React, { useState } from 'react';
import './App.css';
import Metrics from './Frontend/metrics.js';
import './Frontend/metrics.css';
import Home from './Frontend/Home.js';
import './Frontend/Home.css';
import './Frontend/models.css';
import SMN from './Frontend/SMN.js';
import DUA from './Frontend/DUA.js';
import DAM from './Frontend/DAM.js';
import IoI from './Frontend/IoI.js';
import ESIM from './Frontend/ESIM.js';
import BERT from './Frontend/BERT.js';
import BERTFP from './Frontend/BERTFP.js';
import BERTSL from './Frontend/BERTSL.js';
import SABERT from './Frontend/SABERT.js';
import BERTDPT from './Frontend/BERTDPT.js';
import Login from './Frontend/login.js'; 
import Signup from './Frontend/signup.js';
import Header from './Frontend/header.js';

const App = () => {
  const [route, setRoute] = useState('/login');
  const [user, setUser] = useState(null); 
  const navigate = (path) => {
    setRoute(path);
  };

  const logout = () => {
    setUser(null); 
    navigate('/login'); 
  };


  return (
    <div>
      <Header user={user} onNavigate={navigate} onLogout={logout} />
      {route === '/login' && <Login onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/signup' && <Signup onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/' && <Home onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/metrics' && <Metrics onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/SMN' && <SMN onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/DUA' && <DUA onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/DAM' && <DAM onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/IoI' && <IoI onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/ESIM' && <ESIM onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/BERT' && <BERT onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/BERTFP' && <BERTFP onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/BERTSL' && <BERTSL onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/SABERT' && <SABERT onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
      {route === '/BERTDPT' && <BERTDPT onNavigate={navigate} setUser={setUser} onLogout={logout}/>}
    </div>
  );
};

export default App;
