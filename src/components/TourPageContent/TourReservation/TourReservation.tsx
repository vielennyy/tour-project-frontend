import {Box, Typography } from "@mui/material";

// import { AccommodationRoom } from "./AccommodationRoom";
import { TourReservationItem } from "./TourReservationItem";

export const TourReservation = ():JSX.Element => {
  return (
    <Box sx={{
      marginTop: 8
    }}>
      <Typography variant='h4'>
        Дати початку наступного туру «Цікавинки Черкащини»
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: '30px',
        marginTop: 4
      }}>
        <TourReservationItem/>
        <TourReservationItem/>
        <TourReservationItem/>
      </Box>
    </Box>
  )
}