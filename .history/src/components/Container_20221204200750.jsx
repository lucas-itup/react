
import React from 'react'
import FormTodo from './FormTodo';
import TaskList from './TaskList';
import { useState } from 'react';

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div>
      <p>Ingresa un valor o texto.</p>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
    
  )
}

export default Container