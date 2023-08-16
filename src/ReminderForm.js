import React, { useState, useEffect } from 'react';

const ReminderForm = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedActivity, setSelectedActivity] = useState('Wake up');

  const handleReminderSubmit = () => {
    // Logic to set a reminder and play a sound/chime when the time is up
    alert(`Reminder set for ${selectedDay} at ${selectedTime}: ${selectedActivity}`);
  };

  return (
    <div className="reminder-form">
      <h2>Set a Reminder</h2>
      <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        {/* Add options for other days */}
      </select>
      <input
        type="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      />
      <select
        value={selectedActivity}
        onChange={(e) => setSelectedActivity(e.target.value)}
      >
        <option value="Wake up">Wake up</option>
        <option value="Go to gym">Go to gym</option>
        {/* Add options for other activities */}
      </select>
      <button onClick={handleReminderSubmit}>Set Reminder</button>
    </div>
  );
};

export default ReminderForm;
