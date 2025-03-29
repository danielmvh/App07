import React, { useState } from 'react';

const CreateTimeReport = () => {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');
  const [lunchBreak, setLunchBreak] = useState('');
  const [overtime, setOvertime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logik för att skapa en ny tidsrapport
    console.log('Ny Tidsrapport:', { date, hours, description, lunchBreak, overtime });
  };

  return (
    <div>
      <h1>Skapa Tidsrapport</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Datum:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Timmar:
          <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} required />
        </label>
        <label>
          Beskrivning:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Lunchrast (minuter):
          <input type="number" value={lunchBreak} onChange={(e) => setLunchBreak(e.target.value)} required />
        </label>
        <label>
          Övertid (timmar):
          <input type="number" value={overtime} onChange={(e) => setOvertime(e.target.value)} required />
        </label>
        <button type="submit">Skapa</button>
      </form>
    </div>
  );
};

export default CreateTimeReport;