import {Box, Typography} from "@mui/material";
import { useState } from 'react'

import location_icon from "../../../assets/image/accommodations/Location_icon.png";
import map from "../../../assets/image/accommodations/map.png";
import { Accommodation, Geolocations } from "src/components/TypesAndInterfaces";
import { Map } from "src/components/Map";

interface myComponentProps {
  accommodation: Accommodation;
}

export const AccommodationMap = (props:myComponentProps):JSX.Element => {
  const [geolocation, setGeolocation] = useState<Geolocations>()

  fetch(`https://cktour.club/api/v1/accommodations/${props.accommodation.id}/geolocations`, {
            method: "GET",
            headers: { Authorization: 'Bearer ' +  localStorage.getItem('token') }
          })
          .then(response => response.json())
          .then(json => setGeolocation(json[0]));

      let center = {
        lat: 49.44428388879221,
        lng: 32.05884117728714,
      }
      const size = {width:'100vw', height:'60vh'}
      if (geolocation?.latitude !== undefined && geolocation?.longitude !== undefined) {
        center = {lat: +geolocation?.latitude, lng: +geolocation?.longitude}
      } 
      
  return (
    <Box>
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography variant='h4'>
          Розташування готелю
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src={location_icon} alt='location_icon' style={{width: '24px', height: '28px'}}/>
          <Typography variant='h5' sx={{marginLeft: 2}}>
            {geolocation?.locality !== undefined && geolocation?.street !== undefined && geolocation?.suite !== undefined ? 
            `${geolocation?.locality}, ${geolocation?.street} ${geolocation?.suite}`
              : ''
            }
          </Typography>
        </Box>
      </Box>
      
      <Map size={size} center={center} zoom={18}/>
      
    </Box>
  )
}