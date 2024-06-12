import React, { useState, useEffect } from 'react';
import { deleteLastNote, getNotesGroupedByDate } from './Api';
import NoteInsertPanel from './NoteInsertPanel';
import DraggableNoteList from './DraggableNoteList';

export default function Todo() {
  const [groupedNotesByDate, setGroupedNotesByDate] = useState({});
  const [debugMode, setDebugMode] = useState(true);

  useEffect(() => {
    fetchGroupedNotes();
  }, []);

  const fetchGroupedNotes = async () => {
    const groupedNotes = await getNotesGroupedByDate();
    setGroupedNotesByDate(groupedNotes);
  };

  const handleDeleteLastNote = async () => {
    await deleteLastNote();
    fetchGroupedNotes();
  };

  const handleGetNotesByDate = async () => {
    const groupedNotes = await getNotesGroupedByDate();
    setGroupedNotesByDate(groupedNotes);
  };

  const toggleDebug = () =>{
    setDebugMode(!debugMode);
  }
  return (
    <>
      <button onClick={toggleDebug}>toggle debug mode</button>
      <NoteInsertPanel fetchNotes={fetchGroupedNotes} orderedNotes={groupedNotesByDate} />
      {debugMode ? (
        <>
          <button onClick={handleDeleteLastNote}>Delete last note</button>
          <button onClick={handleGetNotesByDate}>Fetch notes grouped by date</button>
        </>
      ) : null}
      {groupedNotesByDate && Object.keys(groupedNotesByDate).length > 0 ? (
        <ul>
          {Object.keys(groupedNotesByDate).map((finishDate) => (
            <li key={finishDate}>
              <h3>Date: {finishDate ? finishDate : 'Not specified'}</h3>
              <DraggableNoteList notes={groupedNotesByDate[finishDate]} debugMode={debugMode} />
            </li>
          ))}
        </ul>
      ) : (
        <li>No notes found.</li>
      )}
    </>
  );
}
