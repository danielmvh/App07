import React, { useState } from 'react';

const SendMessage = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik för att skicka meddelande
    console.log(`Meddelande skickat till ${recipient}: ${message}`);
  };

  return (
    <div>
      <h1>Skicka Meddelande</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipient">Mottagare:</label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <label htmlFor="message">Meddelande:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default SendMessage;