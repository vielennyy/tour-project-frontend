import {Box, Typography } from "@mui/material";

import { AccommodationRoom } from "./AccommodationRoom";
import {Room} from "../../TypesAndInterfaces";
import React from "react";

export const AccommodationRooms = ({rooms}:any):JSX.Element => {

  return (
    <Box sx={{
      marginTop: 8
    }}>
      <Typography variant='h4'>
        Доступні номери
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        marginTop: 4
      }}>
        {rooms.length > 0 ?
          rooms.map((room:Room) =>
            <AccommodationRoom key={room.id} room={room}/>
          ) :
          <Typography>Кімнат не знайдено</Typography>
        }
      </Box>
    </Box>
  )
}