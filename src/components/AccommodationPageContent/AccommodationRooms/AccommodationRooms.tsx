import {Box, Typography } from "@mui/material";

import { AccommodationRoom } from "./AccommodationRoom";

export const AccommodationRooms = ():JSX.Element => {
  return (
    <Box sx={{
      marginTop: 8
    }}>
      <Typography variant='h4'>
        Доступні номери в «Телячі Ніжності»
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        marginTop: 4
      }}>
        <AccommodationRoom/>
        <AccommodationRoom/>
        <AccommodationRoom/>
      </Box>
    </Box>
  )
}