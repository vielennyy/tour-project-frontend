import {Box, Typography} from "@mui/material";

import { AttractionTour } from "./AttractionTour";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const AttractionTours = ():JSX.Element => {
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
        }} variant="h3">Тури до цього місця</Typography>
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
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop: 4,
        gap: '30px'
      }}>
        <AttractionTour/>
        <AttractionTour/>
        <AttractionTour/>
      </Box>
    </Box>
  )
}