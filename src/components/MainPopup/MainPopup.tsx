import React, {useState} from "react";

import { Box,
  Dialog,
  DialogContent,
  Button,
  Typography} from '@mui/material';
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
    <Box>
      <Button onClick={handleClickOpen} sx={{
        textTransform: 'none',
        padding: '0 20px',
        background: 'rgba(255, 255, 255, 0.15)',
        height: 45,
        width: 140,
        borderRadius: '9px',
        boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)'
      }}>
        <Typography variant="body2">
          Вхід
        </Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          position: 'relative',
          width: 400,
        }}>
          <Button onClick={handleClose} sx={{
            position: 'absolute',
            top: 25,
            right: 16,
            minWidth: 20,
            color: "inherit"
          }}>
            <CloseIcon/>
          </Button>
          <DialogContent sx={{padding: 0}}>
            {loginPopup ?
              <LoginPopup/> :
              <RegistrationPopup/>
            }

          </DialogContent>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            paddingBottom: 1
          }}>
            {loginPopup ?
              <Button sx={{fontSize: 10, color: "#000000"}} onClick={handleRegisterOpen}>
                Не має акаунту? Реєстрація
              </Button> :
              <Button  sx={{fontSize: 10, color: "#000000"}} onClick={handleLoginOpen}>
                Вже маєш акаунт? Вхід
              </Button>
            }
          </Box>
          {loginPopup ?
            null :
            <Box sx={{
              margin: '0 auto',
              width: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 2,
              textAlign: 'center'
            }}>
              <Typography sx={{fontSize: '10px', fontWeight: 500}}>Натискаючи кнопку «Реєстрація», я погоджуюсть з Умовами сайту, враховуючи Умови оплати, і Політикою конфіденційності.</Typography>
            </Box>
          }
        </Box>
      </Dialog>
    </Box>
  );
}

