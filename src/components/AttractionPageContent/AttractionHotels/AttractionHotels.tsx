import {Box, Typography } from "@mui/material";

import { AttractionHotel } from "./AttractionHotel";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import first from "../../../assets/image/accommodations/first.png";
import second from "../../../assets/image/accommodations/luks.png";
import third from '../../../assets/image/accommodations/second.png';
import fouth from '../../../assets/image/accommodations/third.png';

export const AttractionHotels = ():JSX.Element => {
  const firstHotel = {
    name: 'Dragomir Apartments',
    image: first,
    location: 'Умань'
  }
  const secondHotel = {
    name: 'Cherkasy Palace',
    image: second,
    location: 'Черкаси'
  }
  const thirdHotel = {
    name: 'Perlyna Resort',
    image: third,
    location: 'Буки'
  }
  const fourthHotel = {
    name: 'Guest House',
    image: fouth,
    location: 'Умань'
  }


  return (
    <Box sx={{
      marginTop: 8
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography sx={{
        }} variant="h3">Де зупинитися?</Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 2
        }}>
          <Link to={'/'}>
            <Typography variant="body2">
              Переглянути все
            </Typography>
          </Link>
          <ArrowForwardIcon color={"primary"}/>
        </Box>
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginTop: 4,
        gap: '30px'
      }}>
        <AttractionHotel props={firstHotel}/>
        <AttractionHotel props={secondHotel}/>
        <AttractionHotel props={thirdHotel}/>
        <AttractionHotel props={fourthHotel}/>
      </Box>
    </Box>
  )
}