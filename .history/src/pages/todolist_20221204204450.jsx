import React from 'react';
import Container from './components/Container';
const toDoList = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
       <Container></Container>
    </div>
  );
};
  
export default toDoList;