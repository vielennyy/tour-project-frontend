import {Box, Button, Typography} from '@mui/material';
import React from "react";
export const CateringItemDescr = ():JSX.Element => {
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
          Faro del Porto - це прекрасний ресторан, розташований у мальовничому місці на берёзі Дніпра в Черкасах. Ресторан славиться своєю чудовою кухнею, регіональними стравами. Крім того, Faro del Porto має приємну атмосферу та вражаючі краєвиди на Дніпро, що додає особливого шарму їжі та перебуванню в ресторані.
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