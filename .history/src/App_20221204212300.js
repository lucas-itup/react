import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PokeApi from './pages/pokeapi';
import ToDoList from './pages/todolist';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/pokeApi' element={<PokeApi />} />
        <Route path='/todoList' element={<ToDoList />} />
      </Routes>
    </Router>
  );
}
  
export default App;