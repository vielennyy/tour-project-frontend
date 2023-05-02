import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button
} from '@mui/material/';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LogoutIcon from '@mui/icons-material/Logout';

export const AdminNavBar = ():JSX.Element => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('adminToken');
    window.location.reload();
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      background: '#000000'
    }}>
      <Button onClick={() => navigate(-1)}>
        <ArrowBackIosIcon/>
      </Button>
      {localStorage.getItem('adminToken') ?
        <Button onClick={logout}>
          <LogoutIcon/>
          Logout
        </Button> :
        null
      }
    </Box>
  );
}