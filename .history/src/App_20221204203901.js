import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import pokeApi from './pages/pokeapi';
import toDoList from './pages/todolist';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' exact component={Home} />
        <Route path='/pokeApi' component={pokeApi} />
        <Route path='/events' component={toDoList} />
      </Routes>
    </Router>
  );
}
  
export default App;