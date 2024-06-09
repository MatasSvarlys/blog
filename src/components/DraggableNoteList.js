import React from 'react';

export default function DraggableNoteList({ notes }){

    
    return (
        <ul>
            {notes.map((note, index) =>{
                return (
                <li key={index}>
                    {note.noteText}, {note.timeToFinish} min, index: {note.displayIndex}
                </li>
                );})}
        </ul>
    );
};

