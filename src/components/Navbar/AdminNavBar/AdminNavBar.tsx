import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button
} from '@mui/material/';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const AdminNavBar = ():JSX.Element => {
  const navigate = useNavigate();

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
    </Box>
  );
}