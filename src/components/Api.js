export async function insertNote(data) {
    const url = 'http://localhost:8000/insertNote';
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
    const url = 'http://localhost:8000/notes';
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log('All notes:', jsonResponse); 
    } catch(err) {
        console.log('ERROR', err);
    }
}

export async function deleteLastNote() {
    const url = 'http://localhost:8000/deleteLastNote';
    const options = {
        method:'DELETE'
    };
    try {
        const response = await fetch(url, options);
        const jsonResponse = await response.json();
        console.log('Response: ', jsonResponse);
    } catch(err) {
        console.log('ERROR', err);
    }
}
  