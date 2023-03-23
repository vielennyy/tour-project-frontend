import React, {useEffect, useState} from 'react';

import {Container} from '@mui/material';

import { DefaultFooter } from "./DefaultFooter";

export const Footer = ():JSX.Element => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {

  }, [path])

  return (
    <Container sx={{
      width: 1024
    }}>
      {path === '/admin' ? null : <DefaultFooter/>}
    </Container>
  );
}