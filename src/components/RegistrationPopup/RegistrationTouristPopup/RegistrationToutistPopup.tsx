
import { Box,
  TextField,
  Typography } from '@mui/material';
import * as React from "react";

export const RegistrationTouristPopup = ():JSX.Element => {
  return(
    <Box sx={{
      maxWidth: 450,
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Ім'я"
          type="text"
          variant="standard"
          sx={{marginBottom: 2}}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Прізвище"
          type="text"
          variant="standard"
          sx={{marginBottom: 2}}
        />
      </Box>
      <Box>
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
          type="password"
          fullWidth
          variant="standard"
          sx={{marginBottom: 2}}
        />
      </Box>
    </Box>
  )
}