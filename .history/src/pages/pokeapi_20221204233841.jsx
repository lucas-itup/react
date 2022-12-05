import React from 'react';
import PokeAPI from '../components/PokeApi';
const pokeApi = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      
      <PokeAPI/>
    </div>
  );
};
  
export default pokeApi;