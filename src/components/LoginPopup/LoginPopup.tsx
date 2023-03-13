import React, {useState} from "react";

import { Box,
  Typography,
  Link,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {RegistrationPopup} from "../RegistrationPopup";

export const LoginPopup = ():JSX.Element =>  {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button onClick={handleClickOpen} sx={{
        color: '#ffffff'
      }}>
        Вхід
      </Button>
        <Dialog open={open}>
          <Box sx={{
            maxWidth: 400,
            padding: 2
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <DialogTitle sx={{padding: 1}}>Вхід</DialogTitle>
              <Button onClick={handleClose} sx={{padding: 0, minWidth: 20, color: "inherit"}}>
                <CloseIcon/>
              </Button>
            </Box>
            <DialogContent sx={{padding: 1}}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Електронна почта"
                type="email"
                fullWidth
                variant="standard"
                sx={{marginBottom: 2}}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Пароль"
                type="email"
                fullWidth
                variant="standard"
                sx={{marginBottom: 2}}
              />
              <Link
                component="button"
                variant="body2"
              >
                Забули пароль?
              </Link>
            </DialogContent>
            <DialogActions sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Button onClick={handleClose} sx={{
                background: '#c1bfbf',
                width: 200,
                height: 40
              }}>Вхід</Button>
            </DialogActions>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Typography sx={{
                fontSize: 14
              }}>
                Не має акаунту?
              </Typography>
              <RegistrationPopup/>
            </Box>
          </Box>
        </Dialog>
    </div>
  );
}
