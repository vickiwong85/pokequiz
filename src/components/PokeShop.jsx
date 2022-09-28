import React, {useState, useEffect} from 'react';
import greatball from '../assets/greatball.png';
import masterball from '../assets/masterball.png';
import pokeball from '../assets/pokeball.png';
import ultraball from '../assets/ultraball.png';

const PokeShop = (props) => {

  return (
    <div>
      <h1>Pokémon Shop</h1>
      <h5>What would you like to buy?</h5>
      <form>
        {/* <select onChange={props.changeBall}> */}
          <label><input type="radio" value="Poké Ball" onClick={props.changeBall} required/>Poké ball $10</label>
          <img src={pokeball}></img>
          <br></br>
          <label><input type="radio" value="Great Ball" onClick={props.changeBall} required/>Great ball $20</label>
          <img src={greatball}></img>
          <br></br>
          <label><input type="radio" value="Ultra Ball" onClick={props.changeBall} required/>Ultra ball $10</label>
          <img src={ultraball}></img>
          <br></br>
          <label><input type="radio" value="Master Ball" onClick={props.changeBall} required/>Master ball $10</label>
          <img src={masterball}></img>
          <br></br>
          {/* <option value="Great Ball">Great ball $20</option>
          <option value="Ultra Ball">Ultra ball $30</option>
          <option value="Master Ball">Master ball $40</option> */}
        {/* </select> */}
        <button onClick={props.purchase}>Purchase</button>
      </form>
    </div>
    );
}


export default PokeShop;