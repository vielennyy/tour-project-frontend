import React, {useEffect, useState} from 'react';

import {Container, Box, Typography} from '@mui/material';

import { DefaultFooter } from "./DefaultFooter";

export const Footer = ():JSX.Element => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {

  }, [path])

  return (
    <Box>
      {path === '/admin' ?
        <Typography sx={{
          color: '#989A9E',
          fontSize: 14,
          fontWeight: 400,
          marginTop: 2,
          position: 'fixed',
          bottom: '20px',
          left: '20px'}}>
          © Всі права захищені
        </Typography> :
        <Box sx={{
          width: '100vw',
          height: 300,
          background: '#383D44',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <DefaultFooter/>
        </Box>}
    </Box>
  )
}