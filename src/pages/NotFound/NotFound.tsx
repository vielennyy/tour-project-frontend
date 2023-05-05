import {Link} from "react-router-dom";

import { Container, Typography, Button } from "@mui/material";
import React from "react";

export const NotFound = ():JSX.Element => {
  return(
    <Container sx={{
      width: '1440',
      marginTop: 2,
      marginBottom: 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Typography variant='h2' sx={{
        marginTop: 4
      }}>
        404 Not-Found
      </Typography>
      <Button sx={{
        background: '#EF5151',
        padding: '18px',
        borderRadius: '7px',
        width: 350,
        maxHeight: 60,
        marginTop: 4
      }}
      variant="contained"
      >
        <Link to={'/'}>
          <Typography variant="h5" sx={{
            textTransform: 'none',
            color: '#FFFFFF'
          }}>
            Повернутись на головну
          </Typography>
        </Link>
      </Button>
    </Container>
  )
}