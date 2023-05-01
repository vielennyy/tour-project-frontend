import React, {useState, useEffect} from "react";

import {
  Box,
  Dialog,
  DialogContent,
  Button,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import {RegistrationPopup} from "./RegistrationPopup";
import {LoginPopup} from "./LoginPopup";
import {ResetPopup} from "./ResetPopup";

export const MainPopup = ():JSX.Element =>  {
  const [open, setOpen] = useState(false);
  const [loginPopup, setLoginPopup] = useState(true);
  const [registerPopup, setRegisterPopup] = useState(false);
  const [resetPopup, setResetPopup] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if(open === false) {
      setTimeout(() => {
        setLoginPopup(true);
        setRegisterPopup(false);
        setResetPopup(false);
      }, 500)
    }
  },[open])

  const handleRegisterOpen = () => {
    setLoginPopup(false);
    setRegisterPopup(true);
    setResetPopup(false);
  }

  const handleLoginOpen = () => {
    setLoginPopup(true);
    setRegisterPopup(false);
    setResetPopup(false);
  }

  const handleResetOpen = () => {
    setLoginPopup(false);
    setRegisterPopup(false);
    setResetPopup(true);
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
            {loginPopup ? <LoginPopup /> :
              registerPopup ? <RegistrationPopup backToLoginPopup={handleLoginOpen}/> :
                resetPopup ? <ResetPopup backToLoginPopup={handleLoginOpen}/> :
                  null
            }

          </DialogContent>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            paddingBottom: 1
          }}>
            <Box>
              {loginPopup ?
                <Button sx={{fontSize: 10, color: "#000000"}} onClick={handleRegisterOpen}>
                  Не має акаунту? Реєстрація
                </Button> :
                registerPopup ?
                  <Button  sx={{fontSize: 10, color: "#000000"}} onClick={handleLoginOpen}>
                    Вже маєш акаунт? Вхід
                  </Button> :
                  <Button  sx={{fontSize: 10, color: "#000000", padding: '20px 0 14px 0'}} onClick={handleLoginOpen}>
                    <KeyboardBackspaceIcon fontSize={'small'}/>Назад до входу
                  </Button>
              }
            </Box>
            <Box>
              {loginPopup ?
                <Button sx={{fontSize: 10, color: "#000000"}} onClick={handleResetOpen}>
                  Забули пароль?
                </Button> :
                null
              }
            </Box>
          </Box>
          {registerPopup ?
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
            </Box> :
            null
          }
        </Box>
      </Dialog>
    </Box>
  );
}

