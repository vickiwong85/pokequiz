import React, {useState, useEffect} from 'react';
import pokelogo from '../../assets/pokequiz.png';
import LoginButton from '../LoginButton.jsx';
import LogoutButton from '../LogoutButton.jsx';
import { Grid, Paper, AppBar, Toolbar } from "@material-ui/core";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #FFDE00;
  font-family: 'Noto Sans Mono', monospace;
  height: 500px;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  border-radius: 10px;
  border: solid 2px #3B4CCA;
  padding: 30px;
  /* font-family: 'Noto Sans Mono', monospace; */
  font-family: 'Poppins', sans-serif;
  /* background: white; */
  background: #3B4CCA;
  color: white;
`
const Direction = styled.h3`
/* font-family: 'Noto Sans Mono', monospace; */
font-family: 'Poppins', sans-serif;
`
const Button = styled.button`
padding: 10px;
background: #3B4CCA;
/* font-family: 'Noto Sans Mono', monospace; */
font-family: 'Poppins', sans-serif;
border-radius: 10px;
margin-top: 40px;
margin-left: 130px;
color: white;
&:hover {
    background-color: #130281
  }
`

export default function Login(props) {

  return(
    <div>
    <AppBar position="static" alignitems="center" color="primary">
    <Toolbar>
    <Grid container justifyContent="center" wrap="wrap">
    <Grid item>
    <img src={pokelogo}></img>
    </Grid>
    </Grid>
    </Toolbar>
    </AppBar>
    <Container>
      <FormContainer>
      <Direction>Login</Direction>
      <form onSubmit={props.handleLogin}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => props.setUsername(e.target.value)} required/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => props.setPassword(e.target.value)} required/>
        </label>
        <div>
          <Button type="submit" color="primary">LogIn</Button>
        </div>
      </form>
      </FormContainer>
      <FormContainer>
      <Direction>Create an Account</Direction>
      <form onSubmit={props.handleCreate}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => props.setUsername(e.target.value)} required/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => props.setPassword(e.target.value)} required/>
        </label>
        <div>
          <Button type="submit" color="primary">Create</Button>
        </div>
      </form>
      </FormContainer>
    </Container>
    </div>
  )
}