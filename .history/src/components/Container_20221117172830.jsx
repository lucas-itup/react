
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
      Container!
      <TaskList list={list} setList={setList} />
      <FormTodo handleAddItem={handleAddItem} />
    </div>
    
  )
}

export default Container