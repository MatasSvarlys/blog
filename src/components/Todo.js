import React, { useState, useEffect } from 'react'
import {deleteLastNote, insertNote, getAllNotes} from './Api'

export default function Todo(){
    const tempNote = {
        noteText: 'Sample note text',
        timeInMinutes: 30
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
                    
    
    return(
        <>
            <button onClick={handleInsertNote}>Add note</button>
            <button onClick={handleDeleteLastNote}>Delete last note</button>
            <div>Todo list:</div>
            <ul>
                {notes && notes.length > 0 ? notes.map((element, index) => (
                    <li key={index}>{element[1]}</li>
                )) : <li>No notes available</li>}
            </ul>
        </>
    );
}