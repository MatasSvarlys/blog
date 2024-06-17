import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home"
import NotesIndex from "./Notes/NotesIndex"
import SongRecom from "./SongRecom"
import Navbar from "./Navbar"
import GameIndex from "./Game/GameIndex"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/Notes" element={<NotesIndex />}></Route>
            <Route path="/songRecom" element={<SongRecom />}></Route>
            <Route path="/simpleRoguelite" element={<GameIndex />}></Route>
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
