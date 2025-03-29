import React, { useState } from 'react';

const EditUser = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik för att redigera användare
    console.log('Användare redigerad:', userDetails);
  };

  return (
    <div>
      <h1>Redigera Användare</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Användarnamn:</label>
        <input type="text" id="username" name="username" onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />

        <label htmlFor="role">Roll:</label>
        <input type="text" id="role" name="role" onChange={handleChange} required />

        <button type="submit">Uppdatera Användare</button>
      </form>
    </div>
  );
};

export default EditUser;