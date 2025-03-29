import React, { useState } from 'react';

const CreateReport = () => {
  const [reportDetails, setReportDetails] = useState({
    date: '',
    description: '',
    hoursWorked: 0,
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportDetails({ ...reportDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik för att skapa rapport
    console.log('Ny rapport skapad:', reportDetails);
  };

  return (
    <div>
      <h1>Skapa Ny Rapport</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Datum:</label>
        <input type="date" id="date" name="date" onChange={handleChange} required />

        <label htmlFor="description">Beskrivning:</label>
        <textarea id="description" name="description" onChange={handleChange} required></textarea>

        <label htmlFor="hoursWorked">Arbetade Timmar:</label>
        <input type="number" id="hoursWorked" name="hoursWorked" onChange={handleChange} required />

        <label htmlFor="location">Plats:</label>
        <input type="text" id="location" name="location" onChange={handleChange} required />

        <button type="submit">Skapa Rapport</button>
      </form>
    </div>
  );
};

export default CreateReport;