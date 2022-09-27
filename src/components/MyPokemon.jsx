import React, {useState, useEffect} from 'react';
import Pokemon from './Pokemon.jsx'

const MyPokemon = (props) => {



  return (
    <div>
      <h1>My Pokémon</h1>
      {props.pokemonlist && props.pokemonlist.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon}/>
      ))}
    </div>
    );
}


export default MyPokemon;