import React from "react";

import { Box,
  Typography,
  Link,
  TextField,
  Button } from '@mui/material';


export const LoginPopup = ():JSX.Element =>  {
  return (
    <Box sx={{
      padding: 2,
      paddingBottom: 0
    }}>
      <Typography>Вхід</Typography>
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
        sx={{display: 'block'}}
      >
        Забули пароль?
      </Link>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 2
      }}>
        <Button  sx={{
          background: '#c1bfbf',
          width: 200,
          height: 40,
          margin: "0 auto"
        }}>Вхід
        </Button>
      </Box>
    </Box>
  );
}
