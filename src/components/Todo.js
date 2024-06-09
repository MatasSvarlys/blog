import React, { useState, useEffect } from 'react'
import {deleteLastNote, insertNote, getAllNotes} from './Api'

export default function Todo(){
    const tempNote = {
        noteText: 'Sample note text',
        timeInMinutes: 30,
        finishDate: "2024-06-09"
    };

    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const fetchedNotes = await getAllNotes();
        setNotes(fetchedNotes);
    };
        
    useEffect(() => {
        fetchNotes();
    }, []);

    const handleInsertNote = async () => {
        await insertNote(tempNote);
        fetchNotes(); 
    };
                
    const handleDeleteLastNote = async () => {
        await deleteLastNote();
        fetchNotes();
    };
                    
    const groupNotes = (notes) => {
        // console.log(notes);
        if (Array.isArray(notes)) {
          return notes.reduce((acc, note) => {
            const finishDate = note[3];
            if (!acc[finishDate]) {
              acc[finishDate] = [];
            }
            acc[finishDate].push(note);
            return acc;
          }, {});
        } else {
          console.log("notes are not in an array format");
          return {};
        }
      };
    
    const groupedNotesByDate = groupNotes(notes);
    
    return(
        <>
            <button onClick={handleInsertNote}>Add note</button>
            <button onClick={handleDeleteLastNote}>Delete last note</button>
            <div>Todo list:</div>
            {notes && Object.keys(groupedNotesByDate).length > 0 ? (
                <ul>
                    {Object.keys(groupedNotesByDate).map((finishDate) => (
                    <li key={finishDate}>
                        <h3>Date: {finishDate}</h3>
                        <ul>
                        {groupedNotesByDate[finishDate].map((note, index) => (
                            <li key={index}>
                                {note[1]}, {note[2]} min
                            </li>
                        ))}
                        </ul>
                    </li>
                    ))}
                </ul>
                ) : (
                <li>No notes found.</li>
            )}

        </>
    );
}