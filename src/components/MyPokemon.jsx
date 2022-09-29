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
  border-radius: 10px;
  border: solid 2px white;
  background: #ACE1AF;
`

const ODiv = styled.div`
  /* border-radius: 10px; */
  border-radius: 10px;
  border: solid 2px white;
  padding: 20px;
  margin-bottom: 30px;
  /* font-family: 'Noto Sans Mono', monospace; */
  font-family: 'Poppins', sans-serif;
  background: white;
  /* background: #3B4CCA; */
  /* color: white; */
`

const MyPokemon = (props) => {



  return (
    <ODiv>
      <h1>My Pokémon</h1>
      <p>{props.count} total</p>
      <RowContainer>
      {props.pokemonlist && props.pokemonlist.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon}/>
      ))}
      </RowContainer>
    </ODiv>
    );
}


export default MyPokemon;