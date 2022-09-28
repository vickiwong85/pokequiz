import React, {useState, useEffect} from 'react';
import Leader from './Leader.jsx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Leaderboard = (props) => {
  return (
    <div>
    <h1>Leaderboard</h1>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small">
      <TableHead>
        <TableRow>
        <TableCell>Username</TableCell>
        <TableCell align="left">Pokemon Caught</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.leaders.length > 1 && props.leaders.map((leader, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">{leader.username}</TableCell>
        <TableCell align="left">{leader.pokemoncount}</TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
    </div>
  );
}


export default Leaderboard;