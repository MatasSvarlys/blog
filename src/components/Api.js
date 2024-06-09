export async function insertNote(data) {
    const url = 'http://127.0.0.1:8000/insertNote';
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const response = await fetch(url, options);
        const jsonResponse = await response.text();
        console.log('JSON response', jsonResponse);
    } catch(err) {
        console.log('ERROR', err);
    }
}
  
export async function getAllNotes() {
    const url = 'http://127.0.0.1:8000/notes';

    const convertArrayToNotes = (data) => {
        if(data.status == 300){
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
        const response = await fetch(url, options);
        // const jsonResponse = await response.json();
        // console.log('Response: ', jsonResponse);
    } catch(err) {
        console.log('ERROR', err);
    }
}
  