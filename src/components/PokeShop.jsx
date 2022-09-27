import React, {useState, useEffect} from 'react';

const PokeShop = (props) => {

  return (
    <div>
      <h1>Pokémon Shop</h1>
      <h5>What would you like to buy?</h5>
      <select onChange={props.changeBall}>
        <option value="Poké Ball">Poké ball $10</option>
        <option value="Great Ball">Great ball $20</option>
        <option value="Master Ball">Master ball $40</option>
      </select>
      <button onClick={props.purchase}>Purchase</button>
    </div>
    );
}


export default PokeShop;