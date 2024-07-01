import React, { useState } from 'react';
import './models.css'; 
import Header from './header.js'
import Sidebar from './sidebar.js';


const BERT = ({ onNavigate, user }) => {
 
    return (
    <div className="app">
      <Sidebar onNavigate={onNavigate}/>
      <div className="main-content">
        <Header onNavigate={onNavigate} user={user}/>
        <ChatInterface />
      </div>
    </div>
  );
};

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [ans, setAnswer] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Attempting to send request");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = { user: 'Userrr', text: inputValue };
      setMessages(messages.concat(newMessage));

      // Send request to Flask backend
      console.log("Attempting to send request");

      try {
      console.log("Attempting to send request2");
          const response = await fetch('http://localhost:3000/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ question: inputValue, modulNum: 2})
          });
          const data = await response.json();
          setAnswer(data.answer);
          console.log("Received response:", data);
      } catch (error) {
          console.error('Error during fetch:', error);
        setMessages(messages.concat({ user: 'BERT', text: 'Error fetching response' }));
      }
      setInputValue('');
    }
  };

  return (
    <div className="chat-container">
      <h2>BERT</h2>
      <div className="scrollable-messages-display">
        <div className="messages-display">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <b>{message.user}:</b> {message.text}
              <div className='response'>
                <p><b>BERT </b>{ans}</p>
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
      <p className='info'>Click <a href="https://arxiv.org/abs/1908.04812v2" target="_blank">here</a> for more information about the model</p>
      <p className='paper'>Click <a href="https://arxiv.org/abs/1908.04812v2" target="_blank">here</a> to view the research paper</p>
    </div>
  );
};

export default BERT;
