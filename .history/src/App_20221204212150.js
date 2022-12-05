import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import pokeApi from './pages/pokeapi';
import toDoList from './pages/todolist';
import home from './pages/home';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={home} />
        <Route path='/pokeApi' element={pokeApi}/>
        <Route path='/todoList' element={toDoList} />
      </Routes>
    </Router>
  );
}
  
export default App;