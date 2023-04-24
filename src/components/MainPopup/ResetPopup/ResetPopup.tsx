import * as React from 'react';

import {Box,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const ResetPopup = ():JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForgotPasswordClick = () => {
    fetch(`https://cktour.club/api/v1/password/forgot`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json',
                // Authorization: 'Bearer ' +  userToken 
              },
            body: JSON.stringify({email: email})
          })
          .then(response => {
            if(response.ok){
            response.json()
            setOpen(false);
            }
          })
          .then(json => {
            console.log(json)
          })
  }

  return (
    <div>
      <Typography onClick={handleClickOpen}
        sx={{fontSize: 16, fontWeight: 500}}
      >
        Забули пароль?
      </Typography>
      <Dialog open={open}>
        <Box sx={{maxWidth: 400, borderRadius: 2}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '15px 16px 0 5px'}}>
            <DialogTitle sx={{fontSize: 16, fontWeight: 500}}>Відновлення паролю</DialogTitle>
            <Button onClick={handleClose} sx={{
              minWidth: 20,
              color: "inherit"
            }}>
              <CloseIcon/>
            </Button>
          </Box>
          <DialogContent sx={{padding: '30px'}}>
            <Typography sx={{fontSize: 16, fontWeight: 500}}>
              Введіть вашу пошту для відновлення паролю. Ми надішлемо вам форму для відновлення паролю.
            </Typography>
            <TextField
              hiddenLabel={true}
              required={true}
              label="Електронна пошта"
              id="outlined-size-normal"
              placeholder={'E-mail'}
              fullWidth
              type="email"
              onChange={(e)=> {setEmail(e.target.value)}}
              sx={{marginTop: "35px"}}/>
          </DialogContent>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Button variant="contained" 
            onClick={handleForgotPasswordClick}
            sx={{
              background: '#FF3939',
              width: 200,
              height: 40,
              margin: "0 auto",
              color: '#ffffff',
              borderRadius: '10px',
              display: 'block',
              marginTop: '10px'
            }}>Підтвердити
            </Button>
            <Button  sx={{fontSize: 10, color: "#000000", padding: '20px 0 14px 0'}} onClick={handleClose}>
              <KeyboardBackspaceIcon fontSize={'small'}/>Назад до входу
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
