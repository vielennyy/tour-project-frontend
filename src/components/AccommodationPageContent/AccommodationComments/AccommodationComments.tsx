import {Box, Button, Typography} from "@mui/material";

import { Comment } from "./Comment";

import star from '../../../assets/image/accommodations/Star.png';
import React from "react";
export const AccommodationComments = ():JSX.Element => {
  return(
    <Box sx={{
      marginTop: 8
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'end'
      }}>
        <img src={star} alt='star_logo' style={{width: '30px', height: '30px'}}/>
        <Typography variant='h5' sx={{marginLeft: 2}}>
          4.7
        </Typography>
        <span style={{color: 'red', marginLeft: '8px'}}>·</span>
        <Typography variant='h5' sx={{marginLeft: 1}}>
          12 відгуків
        </Typography>
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        marginTop: 2,
        columnGap: '100px',
        rowGap: '40px'
      }}>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </Box>
      <Box sx={{
        marginTop: 4
      }}>
        <Button sx={{
          background: '#EF5151',
          padding: '18px',
          borderRadius: '7px',
          width: 280,
          maxHeight: 60,
        }}
                variant="contained">
          <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
            Читати всі відгуки
          </Typography>
        </Button>
        <Button sx={{
          background: '#FFFFFF',
          padding: '18px',
          borderRadius: '7px',
          width: 280,
          maxHeight: 60,
          marginLeft: 4,
          border: '1px solid #EF5151'
        }}
                variant="contained">
          <Typography sx={{ margin: '0 20px', color: '#EF5151', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
            Написати відгук
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}