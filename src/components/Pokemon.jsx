import React, {useState, useEffect} from 'react';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  'border-radius': '50px',
  boxShadow: 24,
  p: 4,
};


function Pokemon (props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <span class="bounce_button">
    <Avatar sx={{ width: 56, height: 56 }} src={props.pokemon.photo} onClick={handleOpen} >
    </Avatar></span>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      alignitems="center"
      textAlign= "center"
    >
      <Box sx={style} alignitems="center" textAlign="center">
        <img src={props.pokemon.photo} width="200"></img><br></br>
        <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
        <strong>{props.pokemon.name}</strong>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Experience: {props.pokemon.baseExp}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Height: {props.pokemon.height} decimeters
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Weight: {props.pokemon.weight} hectograms
        </Typography>
      </Box>
    </Modal>
    </React.Fragment>
    );
}


export default Pokemon;