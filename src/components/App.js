import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home"
import Todo from "./Todo"
import SongRecom from "./SongRecom"
import Navbar from "./Navbar"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/songRecom" element={<SongRecom />}></Route>
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
