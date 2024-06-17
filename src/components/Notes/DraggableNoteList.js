import React from 'react';

export default function DraggableNoteList({ notes, debugMode }){

    notes = notes.sort((a, b) => a.displayIndex - b.displayIndex);
    return (
        <ul>
            {notes.map((note, index) =>{
                return (
                    <li key={index}>
                        {note.noteText}, {note.timeToFinish} min
                        {debugMode?(', index: '+ note.displayIndex):''}
                    </li>
                );})}
        </ul>
    );
};

