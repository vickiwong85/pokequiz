import React, {useState, useEffect} from 'react';

const PokeShop = () => {



  return (
    <div>
      <h1>Pokémon Shop</h1>
      <h5>What would you like to buy?</h5>
      <select>
        <option>Pokeball $10</option>
        <option>Greatball $20</option>
        <option>Masterball $40</option>
      </select>
      <button>Purchase</button>
    </div>
    );
}


export default PokeShop;