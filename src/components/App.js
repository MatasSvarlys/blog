import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home"
import Todo from "./Todo"
import SongRecom from "./SongRecom"
import Navbar from "./Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/songRecom" element={<SongRecom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
