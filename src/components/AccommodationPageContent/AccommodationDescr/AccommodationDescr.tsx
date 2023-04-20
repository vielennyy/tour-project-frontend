import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import {Box, Typography} from '@mui/material';

import pay_icon from '../../../assets/icons/acccondationIcons/cards.png';
import car_icon from '../../../assets/icons/acccondationIcons/car.png';
import wifi_icon from '../../../assets/icons/acccondationIcons/Wifi.png';
import dinner_icon from '../../../assets/icons/acccondationIcons/dinner.png';
import pet_icon from '../../../assets/icons/acccondationIcons/pet.png';

import { Accommodation, Facilities } from "../../TypesAndInterfaces";

interface AccommodationProps {
  accommodation: Accommodation;
}

export const AccommodationDescr = ({accommodation}:AccommodationProps):JSX.Element => {
  const [facilities, setFacilities] = useState<Facilities>();
  const {id} = useParams();
  const fetchingFacilities = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${id}/facilities`,
      {
        method: "GET"
      });
    const json = await  fetching.json();
    return setFacilities(json[0].data);
  }

  useEffect(() => {
    fetchingFacilities()
  }, [])

  return (
    <Box sx={{
      marginTop: 8,
      display: 'grid',
      gridTemplateColumns: '60% 40%'
    }}>
      <Box>
        <Typography variant='h4'>
          Про місце
        </Typography>
        <Typography variant='body1' sx={{marginTop: 2}}>
          {accommodation.description}
        </Typography>
        <Typography variant='h4' sx={{marginTop: 8}}>
          Зручності готелю {accommodation.name}
        </Typography>

        {facilities?.credit_card ?
          <Box sx={{display: 'flex', marginTop: 2}}>
            <img src={pay_icon} alt='pay_icon' style={{width: '30px', height: '30px'}}/>
            <Typography variant='body2' sx={{marginLeft: 2}}>
              Доступна оплата карткою
            </Typography>
          </Box> :
          null
        }

        {facilities?.free_parking ?
          <Box sx={{display: 'flex', marginTop: 2}}>
            <img src={car_icon} alt='pay_icon' style={{width: '30px', height: '27px'}}/>
            <Typography variant='body2' sx={{marginLeft: 2}}>
              Наявна парковка
            </Typography>
          </Box> :
          null
        }

        {facilities?.wi_fi ?
          <Box sx={{display: 'flex', marginTop: 2}}>
            <img src={wifi_icon} alt='pay_icon' style={{width: '30px', height: '25px'}}/>
            <Typography variant='body2' sx={{marginLeft: 2}}>
              Безкоштовний Wi-Fi
            </Typography>
          </Box> :
          null
        }

        {facilities?.breakfast ?
          <Box sx={{display: 'flex', marginTop: 2}}>
            <img src={dinner_icon} alt='pay_icon' style={{width: '30px', height: '27px'}}/>
            <Typography variant='body2' sx={{marginLeft: 2}}>
              Сніданки включено
            </Typography>
          </Box> :
          null
        }

        {facilities?.pets ?
          <Box sx={{display: 'flex', marginTop: 2}}>
            <img src={pet_icon} alt='pay_icon' style={{width: '30px', height: '27px'}}/>
            <Typography variant='body2' sx={{marginLeft: 2}}>
              Pet-friendly готель
            </Typography>
          </Box> :
          null
        }
      </Box>
    </Box>
  )
}