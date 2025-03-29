import React, { useState } from 'react';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Lösenorden matchar inte');
      return;
    }
    // Logik för att ändra lösenord
    setMessage('Lösenordet har ändrats');
  };

  return (
    <div>
      <h1>Byt Lösenord</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="currentPassword">Nuvarande Lösenord:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <label htmlFor="newPassword">Nytt Lösenord:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Bekräfta Lösenord:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Byt Lösenord</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;