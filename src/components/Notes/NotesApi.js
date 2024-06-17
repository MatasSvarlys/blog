const serverAdress = 'http://127.0.0.1:8000';

export async function insertNote(data) {
    const url = serverAdress + '/insertNote';
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        await fetch(url, options);
        //TODO: add response
    } catch(err) {
        console.log('ERROR', err);
    }
}

export async function getNotesGroupedByDate(){
    async function fetchNotesByDate(finishDate) {
        if(!finishDate){
            finishDate = 'null';
        }
        const notesByDateLink = serverAdress+'/notesByDate?finishDate='+finishDate;
        const response = await fetch(notesByDateLink);
        return response.json();
    }
    
    const convertArrayToNotes = (data) => {
        if(data.status === 300){
            //TODO: return smth to make sure its not an error
            return [];
        }
        if (!Array.isArray(data)) {
            throw new Error('Input must be an array');
        }
                
        const columnNames = ['id', 'noteText', 'timeToFinish', 'displayIndex'];
                
        return data.map((row) => {
            const obj = {};
            for (let i = 0; i < columnNames.length; i++) {
                obj[columnNames[i]] = row[i];
            }
            return obj;
        });
    }
    const datesLink = serverAdress+'/finishDates';           
    const fetchedDatesResponse = await fetch(datesLink);
    const fetchedDates = await fetchedDatesResponse.json();
    
    if(fetchedDates.status === 300){ 
        //TODO: return smth to make sure its not an error
        return {};
    }

    const tasksByDate = {};
    
    for (const date of fetchedDates) {
        const notes = await fetchNotesByDate(date.toString());
        tasksByDate[date] = convertArrayToNotes(notes);
    }

    return tasksByDate;
}

export async function getAllNotes() {
    const url = 'http://127.0.0.1:8000/notes';

    const convertArrayToNotes = (data) => {
        if(data.status === 300){
            return [];
        }
        if (!Array.isArray(data)) {
          throw new Error('Input must be an array');
        }

        const columnNames = ['id', 'noteText', 'timeToFinish', 'finishDate', 'displayIndex'];
      
        return data.map((row) => {
          const obj = {};
          for (let i = 0; i < columnNames.length; i++) {
            obj[columnNames[i]] = row[i];
          }
          return obj;
        });
    }

    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return convertArrayToNotes(jsonResponse);
    } catch(err) {
        console.log('ERROR', err);
    }
}

export async function deleteLastNote() {
    const url = 'http://127.0.0.1:8000/deleteLastNote';
    const options = {
        method:'DELETE'
    };
    try {
        await fetch(url, options); 
        //TODO: add response
    } catch(err) {
        console.log('ERROR', err);
    }
}
  