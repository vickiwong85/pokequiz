import React, {useState, useEffect} from 'react';
import greatball from '../assets/greatball.png';
import masterball from '../assets/masterball.png';
import pokeball from '../assets/pokeball.png';
import ultraball from '../assets/ultraball.png';
import styled from 'styled-components';

const Button = styled.button`
padding: 10px;
background: #3B4CCA;
font-family: 'Noto Sans Mono', monospace;
border-radius: 10px;
margin-top: 40px;
margin-left: 130px;
color: #FFDE00;
&:hover {
    background-color: #130281
  }
`

const PokeShop = (props) => {

  return (
    <div>
      <h1>Pokémon Shop</h1>
      <h5>What would you like to buy?</h5>
      <form>
        {/* <select onChange={props.changeBall}> */}
          <img src={pokeball}></img>
          <label><input type="radio" value="Poké Ball" onClick={props.changeBall} name="ball" required/>Poké ball (10 PD)</label>
          <br></br>
          <img src={greatball}></img>
          <label><input type="radio" value="Great Ball" onClick={props.changeBall} name="ball" required/>Great ball (20 PD)</label>
          <br></br>
          <img src={ultraball}></img>
          <label><input type="radio" value="Ultra Ball" onClick={props.changeBall} name="ball" required/>Ultra ball (30 PD)</label>
          <br></br>
          <img src={masterball}></img>
          <label><input type="radio" value="Master Ball" onClick={props.changeBall} name="ball" required/>Master ball (40 PD)</label>
          <br></br>
          {/* <option value="Great Ball">Great ball $20</option>
          <option value="Ultra Ball">Ultra ball $30</option>
          <option value="Master Ball">Master ball $40</option> */}
        {/* </select> */}
        <Button onClick={props.purchase}>Purchase</Button>
      </form>
    </div>
    );
}



export default PokeShop;