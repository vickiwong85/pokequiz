import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';

const Pokemon = (props) => {
  return (
    <Card variant="outlined">
      <img src={props.pokemon.photo}></img><br></br>
      <span><strong>{props.pokemon.name}</strong></span><br></br>
      <span>base experience: {props.pokemon.baseExp}</span><br></br>
      <span>height: {props.pokemon.height} decimeters</span><br></br>
      <span>weight: {props.pokemon.weight} hectograms</span><br></br>
    </Card>
    );
}


export default Pokemon;