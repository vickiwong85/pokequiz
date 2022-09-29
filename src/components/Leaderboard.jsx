import React, {useState, useEffect} from 'react';
import Leader from './Leader.jsx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const Title = styled.h1`
text-align: center;
`
const Div = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  border-radius: 10px;
  border: solid 3px white;
  font-family: 'Poppins', sans-serif;
  padding: 30px;
  background: white;
  margin-left: 20%;
  z-index: 10;
`

const Leaderboard = (props) => {
  return (
    <Div>
    <Title>Leaderboard</Title>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 450 }} size="small" >
      <TableHead>
        <TableRow>
        <TableCell>Username</TableCell>
        <TableCell align="center">Pokemon Caught</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.leaders.length > 1 && props.leaders.map((leader, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">{leader.username}</TableCell>
        <TableCell align="center">{leader.pokemoncount}</TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
    </Div>
  );
}


export default Leaderboard;