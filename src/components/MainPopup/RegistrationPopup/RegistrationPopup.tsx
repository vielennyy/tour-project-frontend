import React, {useState} from 'react';

import {
  Box,
  Typography,
  Button,
  Tab,
  Tabs, TextField
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const RegistrationPopup = ():JSX.Element =>  {
  const [visibility, setVisibility] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      padding: '30px',
      paddingBottom: 0
    }}>
      <Typography sx={{fontSize: 16, fontWeight: 500}}>Реєстрація</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '50px'
      }}>
        <TextField
          required={true}
          label="Ім'я"
          id="outlined-size-normal"
          placeholder={"Ім'я"}
          type="text"
          sx={{width: '160px'}}/>
        <TextField
          required={true}
          label="Призвіще"
          id="outlined-size-normal"
          placeholder={"Призвіще"}
          type="text"
          sx={{width: '160px'}}/>
      </Box>
      <Box>
        <TextField
          hiddenLabel={true}
          required={true}
          label="Електронна почта"
          id="outlined-size-normal"
          placeholder={'E-mail'}
          fullWidth
          type="email"
          sx={{marginTop: "35px"}}/>
        <TextField
          required={true}
          label="Пароль"
          id="outlined-size-normal"
          placeholder={"Пароль"}
          fullWidth
          type="password"
          sx={{marginTop: '35px'}}/>
      </Box>
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
        }}>Реєстрація</Button>
      </Box>
    </Box>
  );
}