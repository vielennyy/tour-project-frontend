import { Link } from 'react-router-dom';

import {Box, Container, Typography, Button} from '@mui/material';
import React from "react";
import { Map } from '../../../components/Map'

const containerStyle = {
  width: '600px',
  height: '400px',
}
const cherkassy = {
  lat: 49.44428388879221,
  lng: 32.05884117728714,
}

export const MapSection = ():JSX.Element => {
  return(
    <Container sx={{
      width: '1440',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      gap: '20px'
    }}>
      <Box>
        <Typography variant="h2">Плануй подорож із нами</Typography>
        <Typography sx={{
          marginTop: 3,
          maxWidth: 470
        }} variant="body2">Використовуйте нашу інтерактивну мапу, щоб знайти найцікавіші місця нашої області для вашої подорожі. Прокладіть маршрут і отримайте можливість побачити всі найцікавіші місця Черкащини на власні очі!
        </Typography>
        <Button sx={{
          background: '#EF5151',
          padding: '10px 30px',
          marginTop: 3,
          borderRadius: '7px',
        }}
        variant="contained">
          <Link to={'/map'}>
            <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
              Перейти до мапи
            </Typography>
          </Link>
        </Button>
      </Box>
      <Box>
      <Map size={containerStyle} center={cherkassy} zoom={8}></Map>
      </Box>
    </Container>
  )
}