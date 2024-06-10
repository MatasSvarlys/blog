import React, { useState, useEffect } from 'react'
import {deleteLastNote, getAllNotes} from './Api'
import NoteInsertPanel from './NoteInsertPanel';
import DraggableNoteList from './DraggableNoteList';

export default function Todo(){
    const [notes, setNotes] = useState([]);
    const [debugMode, setDebugMode] = useState(true);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const fetchedNotes = await getAllNotes();
        setNotes(fetchedNotes);
    };
        

    const handleDeleteLastNote = async () => {
        await deleteLastNote();
        fetchNotes();
    };
                    
    const groupNotes = (notes) => {
        // console.log(notes);
        if(!notes){
          return {};
        }
        if (Array.isArray(notes)) {
          return notes.reduce((acc, note) => {
            const finishDate = note.finishDate;
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
          <NoteInsertPanel fetchNotes={fetchNotes} orderedNotes={groupedNotesByDate}/>
          {debugMode?
            <button onClick={handleDeleteLastNote}>Delete last note</button>
            : null
          }
          {notes && Object.keys(groupedNotesByDate).length > 0 ? (
              <ul>
                  {Object.keys(groupedNotesByDate).map((finishDate) => (
                    <li key={finishDate}>
                        <h3>Date: {finishDate?finishDate:"not specified"}</h3>
                        <DraggableNoteList notes={groupedNotesByDate[finishDate]} debugMode={debugMode}/>
                    </li>
                  ))}
              </ul>
              ) : (<li>No notes found.</li>)}
        </>
    );
}