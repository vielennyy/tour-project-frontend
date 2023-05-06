import {Box, Button, Typography} from "@mui/material";
import luks from "../../../../assets/image/accommodations/luks.png";
import tour from '../../../../assets/image/attractions/tour.png'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import clock from "../../../../assets/icons/Vector.png";
import React from "react";

export const AttractionTour = ({props}:any):JSX.Element => {
  console.log(props)
  return (
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box>
        <img src={props.image} alt='tour' style={{width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}/>
      </Box>
      <Box sx={{
        padding: 2
      }}>
        <Typography variant='h5'>
          {props.name}
        </Typography>
        <Box sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src={clock} alt='clock' style={{width: '24px', height: '24px'}}/>
            <Typography variant='h5' sx={{marginLeft: 2}}>
              3 дні
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex'
          }}>
            <Typography variant='h6'>
              Детальніше
            </Typography>
            <ArrowForwardIcon color={"primary"}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}