import {Box, Button, Typography} from "@mui/material";

import luks from '../../../../assets/image/accommodations/luks.png';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { BookingPopup } from "../../BookingPopup";

import {Room} from "../../../TypesAndInterfaces";

interface RoomProps {
  room: Room
}

export const AccommodationRoom = ({room}:RoomProps):JSX.Element => {
  return(
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box>
        <img src={luks} alt='luks' style={{width: '100%'}}/>
      </Box>
      <Box sx={{
        padding: 2
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5'>
            {room.name}
          </Typography>
          <Typography variant='h5'>
            {`$${room.price_per_night}`}
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          marginTop: 1.5,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{
            color: '#777777',
            fontSize: 14
          }}>
            До {room.places} чоловік
          </Typography>
          <Typography variant='h6' sx={{
            color: '#777777',
            fontSize: 14
          }}>
            Ціна за 1 ніч
          </Typography>
        </Box>
        <Box sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Button sx={{
            width: 140,
            height: 30,
            border: '1px solid #EF5151',
            padding: '20px'
          }}>
            <BookingPopup props={room.id}/>
          </Button>
          <Box sx={{
            display: 'flex'
          }}>
            <Typography variant='h6'>
              Деталі
            </Typography>
            <ArrowForwardIcon color={"primary"}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}