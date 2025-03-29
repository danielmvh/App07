import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <div className="login-container">
      <div className="clock-container">
        <div className="analog-clock">
          <div className="hour-hand"></div>
          <div className="minute-hand"></div>
          <div className="second-hand"></div>
        </div>
        <div className="digital-clock" id="digital-clock"></div>
      </div>
      <div className="login-box">
        <img src="/assets/images/logo.png" alt="Företagslogga" className="logo" id="login-logo"/>
        <h1 id="welcome-text">Välkommen!</h1>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input type="text" id="username" placeholder="Användarnamn" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" id="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button id="login-button" onClick={handleLogin}>Logga in</button>
        <a href="#" id="forgot-password">Glömt lösenord?</a>
      </div>
      <div id="forgot-password-modal" className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h2>Återställ lösenord</h2>
          <input type="email" id="reset-email" placeholder="Jobbmejl" required/>
          <button id="send-reset-link">Skicka återställningslänk</button>
          <div id="reset-message"></div>
          <div id="new-password-section" style={{display: 'none'}}>
            <input type="password" id="new-password" placeholder="Nytt lösenord" required/>
            <button id="confirm-new-password">Bekräfta nytt lösenord</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;