import React, { useState } from 'react';
import './Register.css'; // Skapa en CSS-fil för Register om det behövs

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Lösenorden matchar inte');
      return;
    }
    // Lägg till logik för att hantera registrering
    setMessage(`Registrerad med ${email}`);
  };

  return (
    <div className="register-container">
      <h1>Registrera</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Jobbmejl:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Lösenord:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Bekräfta lösenord:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Registrera</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;