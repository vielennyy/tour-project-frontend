import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const ResetPopup = ():JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography onClick={handleClickOpen}>
        Забули пароль?
      </Typography>
      <Dialog open={open}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '15px 16px 0 5px'}}>
          <DialogTitle sx={{fontSize: 16}}>Відновлення паролю</DialogTitle>
          <Button onClick={handleClose} sx={{
            minWidth: 20,
            color: "inherit"
          }}>
            <CloseIcon/>
          </Button>
        </Box>
        <DialogContent sx={{padding: '30px'}}>
          <DialogContentText>
            Введіть вашу пошту для відновлення паролю. Ми надішлемо вам форму для відновлення паролю.
          </DialogContentText>
          <TextField
            hiddenLabel={true}
            required={true}
            label="Електронна почта"
            id="outlined-size-normal"
            placeholder={'E-mail'}
            fullWidth
            type="email"
            sx={{marginTop: "35px"}}/>
        </DialogContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button variant="contained" sx={{
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
      </Dialog>
    </div>
  );
}
