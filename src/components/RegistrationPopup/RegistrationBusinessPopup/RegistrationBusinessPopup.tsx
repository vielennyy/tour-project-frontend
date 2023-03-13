
import { Box,
  TextField,
  Typography } from '@mui/material';
import * as React from "react";

export const RegistrationBusinessPopup = ():JSX.Element => {
  return(
    <Box sx={{
      maxWidth: 450
    }}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Назва компанії"
          type="text"
          fullWidth
          variant="standard"
          sx={{marginBottom: 2}}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Ім'я представника"
          type="text"
          fullWidth
          variant="standard"
          sx={{marginBottom: 2}}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Електронна пошта"
          type="email"
          fullWidth
          variant="standard"
          sx={{marginBottom: 2}}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Телефон"
          type="number"
          fullWidth
          variant="standard"
          sx={{marginBottom: 2}}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Створіть пароль"
          type="password"
          fullWidth
          variant="standard"
          sx={{marginBottom: 2}}
        />
    </Box>
  )
}