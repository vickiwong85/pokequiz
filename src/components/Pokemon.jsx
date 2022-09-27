import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
  return (
    <div>
      <img src={props.pokemon.photo}></img><br></br>
      <span>{props.pokemon.name}</span><br></br>
      <span>base experience: {props.pokemon.baseExp}</span><br></br>
      <span>height: {props.pokemon.height} decimeters</span><br></br>
      <span>weight: {props.pokemon.weight} hectograms</span><br></br>
    </div>
    );
}


export default Pokemon;