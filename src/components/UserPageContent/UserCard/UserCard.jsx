import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const UserCard = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '450px' },
        p: 2
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>
        User information
      </Typography>
      <Box sx={{
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <TextField id="outlined-basic" label="First name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField id="outlined-basic" label="Phone number" variant="outlined" />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <TextField id="outlined-basic" label="Age" variant="outlined" />
          <TextField id="outlined-basic" label="Town" variant="outlined" />
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Save</Button>
        </Stack>
      </Box>
    </Box>
  );
}