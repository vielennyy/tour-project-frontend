import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import {Box, Button, Typography} from "@mui/material";

import { BookingPopup } from "../../BookingPopup";
import { ShowDetailsModal } from "./ShowDetailsModal";

import {Room} from "../../../TypesAndInterfaces";

interface RoomTypes {
  room: Room
  image_urls: any
}

interface RoomProps {
  room: Room
}

export const AccommodationRoom = ({room}:RoomProps):JSX.Element => {
  const [currentRoom, setCurrentRoom] = useState<RoomTypes>();
  const {id} = useParams();

  const fetchingRoom = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${id}/rooms/${room.id}`,
      {
        method: "GET"
      });
    const json = await  fetching.json();
    return setCurrentRoom(json.data);
  }

  useEffect(() => {
    fetchingRoom()
  }, [])

  return(
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box>
        <img src={currentRoom?.image_urls[0]} alt='luks' style={{width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}/>
      </Box>
      <Box sx={{
        padding: 2
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5'>
            {currentRoom?.room.name}
          </Typography>
          <Typography variant='h5'>
            {`${currentRoom?.room.price_per_night} грн`}
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
            До {currentRoom?.room.places} чоловік
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
          <ShowDetailsModal props={currentRoom}/>
        </Box>
      </Box>
    </Box>
  )
}

// <Box sx={{
//   display: 'flex'
// }}>
//   <Typography variant='h6'>
//     Деталі
//   </Typography>
//   <ArrowForwardIcon color={"primary"}/>
//   <ShowDetailsModal/>
// </Box>