import React, {useState, useEffect} from 'react';

const Leader = (props) => {


  return (
    <div>
      {props.leader && <div>
        <span>{props.leader.username}</span>
        <span>{props.leader.pokemoncount}</span>
        </div>}
    </div>
    );
}


export default Leader;