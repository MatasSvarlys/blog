import React, { useState } from 'react';
import {insertNote} from './NotesApi'
  
export default function NoteInsertPanel ({ fetchNotes, orderedNotes }) {
  const [noteText, setNoteText] = useState('');
  const [timeInMinutes, setTimeInMinutes] = useState('');
  const [finishDate, setFinishDate] = useState('');

  const handleInsertNote = async () => {
    const handleDisplayIndex = () => {
      const notesThisDay = orderedNotes[finishDate];
      return (notesThisDay?.length || 0);
      }
      try {
        const displayIndex = handleDisplayIndex();
        // console.log(displayIndex);
        const newNote = { noteText, timeInMinutes: parseInt(timeInMinutes), finishDate, displayIndex};
        await insertNote(newNote);
        fetchNotes();
        // Clear input fields
        setNoteText('');
        setTimeInMinutes('');
        setFinishDate('');
    } catch (error) {
        console.error('Error inserting note:', error);
    }
  }

  return (
    <div className='inputFields'>
        <input
            type="text"
            placeholder="Note text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
        />
        <input
            type="number"
            placeholder="Time in minutes"
            value={timeInMinutes}
            onChange={(e) => setTimeInMinutes(e.target.value)}
        />
        <input
            type="date"
            value={finishDate}
            onChange={(e) => setFinishDate(e.target.value)}
        />
        <button onClick={handleInsertNote}>Add note</button>
    </div>
  );
};

