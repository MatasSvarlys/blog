import React, { useState } from 'react';

const addNotePanel = () => {
  const [noteText, setNoteText] = useState('');
  const [timeToFinish, setTimeToFinish] = useState(0); // Initial value for time
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10)); // Today's date

  const handleInsertNote = async () => {
    // Validation (optional): Ensure noteText is not empty and timeToFinish is a valid number
    if (noteText.trim() === '' || isNaN(timeToFinish) || timeToFinish < 0) {
      alert('Please enter a note and a valid time to finish.');
      return;
    }

    const newNote = {
      noteText,
      timeToFinish,
      dueDate, // Assuming dueDate is already in a valid format
    };

    // Call your function to insert the note (replace with your actual logic)
    await insertNote(newNote);

    // Clear input fields after successful insertion (optional)
    setNoteText('');
    setTimeToFinish(0);
    setDueDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <div>
      <h2>Add Note</h2>
      <label htmlFor="noteText">Note Text:</label>
      <input
        type="text"
        id="noteText"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <br />
      <label htmlFor="timeToFinish">Time to Finish (minutes):</label>
      <input
        type="number"
        id="timeToFinish"
        value={timeToFinish}
        min="0" // Set minimum time to 0
        onChange={(e) => setTimeToFinish(parseInt(e.target.value))} // Parse to integer
      />
      <br />
      <label htmlFor="dueDate">Due Date:</label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <br />
      <button onClick={handleInsertNote}>Add Note</button>
    </div>
  );
};

export default addNotePanel;
