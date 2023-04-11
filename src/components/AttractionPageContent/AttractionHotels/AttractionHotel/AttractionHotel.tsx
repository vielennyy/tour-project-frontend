import {Box, Button, Typography} from "@mui/material";
import location_icon from "../../../../assets/image/accommodations/Location_icon.png";
import React from "react";

import luks from '../../../../assets/image/accommodations/first.png'

export const AttractionHotel = ():JSX.Element => {
  return(
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box sx={{
        padding: 2
      }}>
        <Box>
          <img src={luks} alt='tour' style={{width: '100%'}}/>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5'>
            «Телячі Ніжності»
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 2
        }}>
          <img src={location_icon} alt='location_icon' style={{width: '24px', height: '28px'}}/>
          <Typography variant='h5' sx={{marginLeft: 2}}>
            м. Умань
          </Typography>
        </Box>
        <Box sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Button sx={{
            width: '100%',
            height: 30,
            border: '1px solid #EF5151',
            padding: '20px'
          }}>
            <Typography variant='body2' sx={{
              textTransform: 'none',
              color: '#EF5151'
            }}>
              Бронювати
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}