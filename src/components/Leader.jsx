import React, {useState, useEffect} from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Leader = (props) => {


  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {props.leader && <div>
        <span>{props.leader.username}</span>
        <span>{props.leader.pokemoncount}</span>
        </div>}
    </TableRow>
    );
}


export default Leader;