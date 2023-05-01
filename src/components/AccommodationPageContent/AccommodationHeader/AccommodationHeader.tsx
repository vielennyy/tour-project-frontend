import React, {useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';

import { Box, Typography, Breadcrumbs} from "@mui/material";
import rating from "../../../assets/image/accommodations/Rating.png";
import location_icon from "../../../assets/image/accommodations/Location_icon.png";

import { Accommodation } from "../../TypesAndInterfaces";

interface AccommodationProps {
  accommodation: Accommodation;
}

export const AccommodationHeader = ({accommodation}:AccommodationProps):JSX.Element => {
  const [rate, setRate] = useState()
  const {id} = useParams();

  useEffect( () => {
    fetch(`https://cktour.club/api/v1/accommodations/${id}/rates`,
      {
        method: "GET"
      })
      .then(response => response.json())
      .then(result => setRate(result))
  }, [])

  const breadcrumbs = [
    <Link to={'/'}>
      <Typography variant="body2">
        Головна
      </Typography>
    </Link>,
    <Link to={'/accommodations'}>
      <Typography variant="body2">
        Де жити?
      </Typography>
    </Link>,
    <Link to={`/accommodations/${1}`}>
      <Typography variant="body2">
        {accommodation.name}
      </Typography>
    </Link>,
  ];
  return (
    <Box>
      <Breadcrumbs separator="·" aria-label="breadcrumb" sx={{color: '#EF5151'}}>
        {breadcrumbs}
      </Breadcrumbs>
      <Typography variant='h2' sx={{marginTop: 8}}>{accommodation.name}</Typography>
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
            {rate}
          </Typography>
          {/*<Typography variant='h6' sx={{*/}
          {/*  marginLeft: 2,*/}
          {/*  color: '#777777',*/}
          {/*  fontSize: 14*/}
          {/*}}>*/}
          {/*  (12 відгуків)*/}
          {/*</Typography>*/}
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src={location_icon} alt='location_icon' style={{width: '24px', height: '28px'}}/>
          <Typography variant='h5' sx={{marginLeft: 2}}>
            {accommodation.address_owner}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}