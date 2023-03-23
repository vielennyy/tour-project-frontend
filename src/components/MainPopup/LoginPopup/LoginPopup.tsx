import React from "react";

import { Box,
  Typography,
  Link,
  TextField,
  Button } from '@mui/material';
import {ResetPopup} from "../ResetPopup";


export const LoginPopup = ():JSX.Element =>  {
  return (
    <Box sx={{
      padding: '30px',
      paddingBottom: 0
    }}>
      <Typography sx={{fontSize: 16, fontWeight: 500}}>Вхід</Typography>
      <TextField
        hiddenLabel={true}
        required={true}
        label="Електронна почта"
        id="outlined-size-normal"
        placeholder={'E-mail'}
        fullWidth
        type="email"
        sx={{marginTop: "50px"}}/>
      <Box sx={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <Link
          component="button"
          variant="body2">
          <ResetPopup/>
        </Link>
      </Box>
      <TextField
        required={true}
        label="Пароль"
        id="outlined-size-normal"
        placeholder={"Пароль"}
        fullWidth
        type="password"
        sx={{marginTop: '15px'}}/>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 2
      }}>
        <Button variant="contained" sx={{
          background: '#FF3939',
          width: 200,
          height: 40,
          margin: "0 auto",
          color: '#ffffff',
          marginTop: "20px",
          borderRadius: '10px'
        }}>Вхід
        </Button>
      </Box>
    </Box>
  );
}
