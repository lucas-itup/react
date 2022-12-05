import React from 'react';
import PokeAPI from '../components/PokeApi';
const pokeApi = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>POKE API</h1>
      <PokeAPI/>
    </div>
  );
};
  
export default pokeApi;