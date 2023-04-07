import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box} from '@mui/material';

import {UserToken} from "../../../TypesAndInterfaces";

export const AddAdminForm = ({token}:UserToken):JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAdminAdded = async () => {
    const fetching = await fetch('https://cktour.club/api/v1/admins/create_admin',
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: "admin1",
          email: "admin1@test.com",
          password: "Admin123!"
        })
      });
  }

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Додати нового Адміністратора
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Новий адміністратор</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ПІБ"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="E-mail адреса"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Пароль"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Підтвердження пароля"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onAdminAdded}>Створити</Button>
          <Button onClick={handleClose}>Відмінити</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}