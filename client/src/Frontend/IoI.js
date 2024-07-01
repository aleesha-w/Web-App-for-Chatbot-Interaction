import React,{useState} from 'react';
import './models.css'; 
import Header from './header.js'
import Sidebar from './sidebar.js';

const IoI = ({onNavigate, user, onLogout}) => {
    return (
      <div className="app">
        <Sidebar onNavigate={onNavigate}/>
        <div className="main-content">
          <Header onNavigate={onNavigate } user={user} onLogout={onLogout}/>
          <ChatInterface/>
        </div>
      </div>
    );
  };

  const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { user: 'User', text: inputValue }]);
        setInputValue('');
      }
    };
  
    return (
      <div className="chat-container">
        <h2>IoI</h2>
        <div className="scrollable-messages-display">
          <div className="messages-display">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <b>{message.user}:</b> {message.text}
                <div className='response'>
                <p><b>IoI: </b></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-box"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your prompt"
          />
          <button type="submit" className="submit-button">Enter</button>
        </form>
        <p className='info'>Click <a href="https://aclanthology.org/P19-1001/" target="_blank">here</a> for more information about the model</p>
        <p className='paper'>Click <a href="https://aclanthology.org/P19-1001/" target="_blank">here</a> to view the research paper</p>
      </div>
    );
  };

export default IoI;