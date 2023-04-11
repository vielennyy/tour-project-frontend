import {Box, Typography } from "@mui/material";

import { AttractionHotel } from "./AttractionHotel";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const AttractionHotels = ():JSX.Element => {
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
          <Link to={'/accommodations'}>
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
        <AttractionHotel/>
        <AttractionHotel/>
        <AttractionHotel/>
        <AttractionHotel/>
      </Box>
    </Box>
  )
}