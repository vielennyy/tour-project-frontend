import React from "react";
import { Link } from 'react-router-dom';

import { Box, Typography, Breadcrumbs} from "@mui/material";
import rating from "../../../assets/image/accommodations/Rating.png";
import location_icon from "../../../assets/image/accommodations/Location_icon.png";
import {Attraction} from "../../TypesAndInterfaces";

interface AttractionProps {
  attraction: Attraction
}

export const AttractionHeader = ({attraction}:AttractionProps):JSX.Element => {
  const breadcrumbs = [
    <Link to={'/'}>
      <Typography variant="body2">
        Головна
      </Typography>
    </Link>,
    <Link to={'/attractions'}>
      <Typography variant="body2">
        Атракції
      </Typography>
    </Link>,
    <Link to={`/attractions/${1}`}>
      <Typography variant="body2">
        {attraction.title}
      </Typography>
    </Link>,
  ];

  return (
    <Box>
      <Breadcrumbs separator="·" aria-label="breadcrumb" sx={{color: '#EF5151'}}>
        {breadcrumbs}
      </Breadcrumbs>
      <Typography variant='h2' sx={{marginTop: 8}}>{attraction.title}</Typography>
      <Box sx={{
        marginTop: 3,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'end'
        }}>
          <img src={rating} alt='rating' style={{height: '25px'}}/>
          <Typography variant='h5' sx={{marginLeft: 2}}>
            4.9
          </Typography>
          <Typography variant='h6' sx={{
            marginLeft: 2,
            color: '#777777',
            fontSize: 14
          }}>
            (12 відгуків)
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src={location_icon} alt='location_icon' style={{width: '24px', height: '28px'}}/>
          <Typography variant='h5' sx={{marginLeft: 2}}>
            {attraction.geolocations[0] ? attraction.geolocations[0]["locality"] : 'Невказано'}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}