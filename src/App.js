import React, { useState } from 'react';
import './App.css';
import chimeSound from './chime.mp3';

function App() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('Wake up');
  const [reminderMessage, setReminderMessage] = useState(''); // State for reminder message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const activities = ['Wake up', 'Go to gym', 'Breakfast', 'Meetings', 'Lunch', 'Quick nap', 'Go to library', 'Dinner', 'Go to sleep'];

  const handleReminderSubmit = () => {
    const now = new Date();
    const [hours, minutes] = selectedTime.split(':');
    const reminderTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

    const timeDifference = reminderTime - now;

    if (timeDifference > 0) {
      setTimeout(() => {
        playSound();
        setReminderMessage(`Reminder: ${selectedActivity}`); // Set reminder message
        setSuccessMessage('Successfully set reminder'); // Set success message
        alert(`Reminder: ${selectedActivity}`);
      }, timeDifference);
    } else {
      alert('Invalid reminder time.');
    }
  };

  const playSound = () => {
    const audio = new Audio(chimeSound);
    audio.play();
  };

  return (
    <div className="App">
      <div className="reminder-form">
        <h1>Simple Reminder App</h1>
        <label htmlFor="day">Select Day:</label>
        <select id="day" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          {daysOfWeek.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>

        <label htmlFor="time">Select Time:</label>
        <input type="time" id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />

        <label htmlFor="activity">Select Activity:</label>
        <select id="activity" value={selectedActivity} onChange={(e) => setSelectedActivity(e.target.value)}>
          {activities.map(activity => (
            <option key={activity} value={activity}>{activity}</option>
          ))}
        </select>

        <button onClick={handleReminderSubmit}>Set Reminder</button>

        <p>{reminderMessage}</p> {/* Display the reminder message */}
        <p>{successMessage}</p> {/* Display the success message */}
      </div>
    </div>
  );
}

export default App;
