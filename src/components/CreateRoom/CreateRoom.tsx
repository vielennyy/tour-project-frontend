import React, {ChangeEvent, useEffect, useState} from 'react';

import {
  Box,
  Button,
  TextField,
  Dialog,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Accommodation } from '../TypesAndInterfaces';
import { AddRoomInfo } from './AddRoomInfo';

interface MyComponentProps {
    accommodation: Accommodation,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}



export const CreateRoom = (props:MyComponentProps) => {

    const handleWindowClose = () => {
        props.setOpen(false)
    }

    return(
        <Box >
      <Dialog open={props.open}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
        }}>
          <Typography variant='h6'>Додати номери </Typography>
          <CloseIcon onClick={handleWindowClose} sx={{cursor: 'pointer'}}/>
        </Box>
        <AddRoomInfo accommodation={props.accommodation}/>
      </Dialog>
    </Box>
    )
}
