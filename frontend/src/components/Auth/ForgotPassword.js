import React, { useState } from 'react';
import './ForgotPassword.css'; // Skapa en CSS-fil för ForgotPassword om det behövs

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lägg till logik för att hantera återställning av lösenord
    setMessage(`En återställningslänk har skickats till ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h1>Återställ lösenord</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Jobbmejl:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Skicka återställningslänk</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;