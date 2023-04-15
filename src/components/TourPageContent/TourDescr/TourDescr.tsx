import {Box, Button, Typography} from '@mui/material';
import React from "react";
export const TourDescr = ():JSX.Element => {
  return (
    <Box sx={{
      marginTop: 8,
      display: 'grid',
      gridTemplateColumns: '60% 40%'
    }}>
      <Box>
        <Typography variant='h4'>
          Про місце
        </Typography>
        <Typography variant='body1' sx={{marginTop: 2}}>
          Туристична екскурсія Черкащиною буде цікавим та захоплюючим досвідом для кожного, хто хоче дізнатися більше про культуру, історію та природу України. З цим туром ви відвідаєте найвизначніші місця нашої області.
        </Typography>
        <Button sx={{
          background: '#EF5151',
          padding: '18px',
          borderRadius: '7px',
          width: 280,
          maxHeight: 60,
          marginTop: 4
        }}
                variant="contained">
          <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
            Бронювати
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}