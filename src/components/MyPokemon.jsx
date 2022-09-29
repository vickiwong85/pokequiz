import React, {useState, useEffect} from 'react';
import Pokemon from './Pokemon.jsx';
import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #FFDE00;
  /* font-family: 'Noto Sans Mono', monospace; */
  font-family: 'Poppins', sans-serif;
  padding: 30px;
  flex-wrap: wrap;
`

const MyPokemon = (props) => {



  return (
    <div>
      <h1>My Pokémon</h1>
      <p>{props.count} total</p>
      <RowContainer>
      {props.pokemonlist && props.pokemonlist.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon}/>
      ))}
      </RowContainer>
    </div>
    );
}


export default MyPokemon;