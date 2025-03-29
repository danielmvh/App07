import React, { useState } from 'react';

const CreateOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    date: '',
    time: '',
    location: '',
    customerInfo: '',
    workType: '',
    description: '',
    assignedEmployees: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik för att skapa arbetsorder
    console.log('Ny arbetsorder skapad:', orderDetails);
  };

  return (
    <div>
      <h1>Skapa Ny Arbetsorder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Datum:</label>
        <input type="date" id="date" name="date" onChange={handleChange} required />

        <label htmlFor="time">Tid:</label>
        <input type="time" id="time" name="time" onChange={handleChange} required />

        <label htmlFor="location">Plats:</label>
        <input type="text" id="location" name="location" onChange={handleChange} required />

        <label htmlFor="customerInfo">Kundinformation:</label>
        <input type="text" id="customerInfo" name="customerInfo" onChange={handleChange} required />

        <label htmlFor="workType">Typ av arbetsplats:</label>
        <input type="text" id="workType" name="workType" onChange={handleChange} required />

        <label htmlFor="description">Arbetsbeskrivning:</label>
        <textarea id="description" name="description" onChange={handleChange} required></textarea>

        <button type="submit">Skapa Arbetsorder</button>
      </form>
    </div>
  );
};

export default CreateOrder;