import React, {useState} from "react";

import { Box,
  Dialog,
  DialogContent,
  Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {RegistrationPopup} from "./RegistrationPopup";
import {LoginPopup} from "./LoginPopup";

export const MainPopup = ():JSX.Element =>  {
  const [open, setOpen] = useState(false);
  const [loginPopup, setLoginPopup] = useState(true);
  const [registerPopup, setRegisterPopup] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegisterOpen = () => {
    setLoginPopup(false);
    setRegisterPopup(true);
  }

  const handleLoginOpen = () => {
    setLoginPopup(true);
    setRegisterPopup(false);
  }


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
            {loginPopup ?
              <LoginPopup/> :
              <RegistrationPopup/>
            }

          </DialogContent>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {loginPopup ?
              <Button sx={{fontSize: 10}} onClick={handleRegisterOpen}>
                Не має акаунту? Реєстрація
              </Button> :
              <Button  sx={{fontSize: 10}} onClick={handleLoginOpen}>
                Вже маєш акаунт? Вхід
              </Button>
            }
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}

