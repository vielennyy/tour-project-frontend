import React, {useState} from "react";

import { Box,
  Dialog,
  DialogContent,
  Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {LoginPopup} from "../LoginPopup";

export const AdminPopup = ():JSX.Element =>  {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box >
      <Button onClick={handleClickOpen} sx={{
        color: '#ffffff'
      }}>
        Вхід
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          position: 'relative'
        }}>
          <Button onClick={handleClose} sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            minWidth: 20,
            color: "inherit"
          }}>
            <CloseIcon/>
          </Button>
          <DialogContent sx={{padding: 1}}>
            <LoginPopup/>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
}

