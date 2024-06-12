from flask import Flask, request, jsonify, g
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)
DATABASE = 'database/backendDatabase.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()
        
@app.route('/insertNote', methods=['POST'])
def insertNote():
    db = get_db()
    cur = db.cursor()
    data = request.get_json()
    note_text = data.get('noteText')
    time_in_minutes = data.get('timeInMinutes')
    finish_date = data.get('finishDate')
    display_index = data.get('displayIndex')
    try:
        cur.execute("INSERT INTO notes (noteText, timeInMinutes, finishDate, displayIndex) VALUES (?, ?, ?, ?)", (note_text, time_in_minutes, finish_date, display_index))
        db.commit()
        return '100 ok'
    except Exception as e:
        print(f'Something went wrong while inserting: {e}')
        return jsonify({'message': 'Insert error', 'status': 200})

@app.route('/notes')
def get_notes():
    db = get_db()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM notes")
        notes = cur.fetchall()
        if notes:
            return jsonify(notes)
        else:
            return jsonify({'message': 'No records in database', 'status': 300})
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'message': 'Select error', 'status': 201})

@app.route('/finishDates')
def get_finish_dates():
    db = get_db()
    cur = db.cursor()
    try:
        cur.execute("SELECT finishDate FROM notes GROUP BY finishDate")
        notes = cur.fetchall()
        if notes:
            return jsonify(notes)
        else:
            return jsonify({'message': 'No records in database', 'status': 300})
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'message': 'Select error', 'status': 201})

@app.route('/notesByDate')
def get_notes_by_date():
    finish_date = request.args.get('finishDate')
    if not finish_date:
        return jsonify({'message': 'finishDate parameter is required', 'status': 400})

    db = get_db()
    cur = db.cursor()
    try:
        if (finish_date != 'null'):
            cur.execute("SELECT id, noteText, timeInMinutes, displayIndex FROM notes WHERE finishDate = ?", (finish_date,))
        else:
            cur.execute("SELECT id, noteText, timeInMinutes, displayIndex FROM notes WHERE finishDate = ''")
        notes = cur.fetchall()
        if notes:
            return jsonify(notes)
        else:
            return jsonify({'message': 'No notes found for the given date', 'status': 300})
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'message': 'Select error', 'status': 201})


@app.route('/deleteLastNote', methods=['DELETE'])
def deleteLastNote():
    db = get_db()
    cur = db.cursor()
    try:
        cur.execute("SELECT id FROM notes ORDER BY id DESC LIMIT 1")
        lastId = cur.fetchone()
        if lastId:
            lastId = lastId[0]
            cur.execute("DELETE FROM notes WHERE id=?", [lastId])
            db.commit()
            return jsonify({'message': 'Note deleted successfully', 'status': 100})
        else:
            return jsonify({'message': 'No records in database', 'status': 300})
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'message': 'delete error', 'status': 202})
        
if __name__ == '__main__':
    app.run(debug=True)
