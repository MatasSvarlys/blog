import React from 'react'
import {deleteLastNote, insertNote} from './Api'

export default function Todo(){
    const tempNote = {
        noteText: 'Sample note text',
        timeInMinutes: 30
        };
        return(
            <>
                <button onClick={() => insertNote(tempNote)}>Add note</button>
                <button onClick={() => deleteLastNote()}>Delete last note</button>
                {/* getAllNotes(); //on another button press display refreshed notes */}
                <div>Todo list:</div>
            </>
    );
}