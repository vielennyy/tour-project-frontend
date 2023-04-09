import {Box, Typography} from '@mui/material';
import React from "react";

import pay_icon from '../../../assets/icons/acccondationIcons/cards.png';
import car_icon from '../../../assets/icons/acccondationIcons/car.png';
import wifi_icon from '../../../assets/icons/acccondationIcons/Wifi.png';
import dinner_icon from '../../../assets/icons/acccondationIcons/dinner.png';
import pet_icon from '../../../assets/icons/acccondationIcons/pet.png';

export const AccommodationDescr = ():JSX.Element => {
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
          Готель «Телячі Ніжності» розташований в Умані, за 14 км від парку Софіївка та за 16 км від Співаючих фонтанів. До послуг гостей ресторан, безкоштовна приватна парковка, бар і тераса. У готелі є камера зберігання багажу та консьєрж-служба. Безкоштовний Wi-Fi доступний на всій території готелю. У кожному номері є письмовий стіл, кондиціонер і окрема ванна кімната.
        </Typography>
        <Typography variant='h4' sx={{marginTop: 8}}>
          Зручності готелю «Телячі Ніжності»
        </Typography>
        <Box sx={{display: 'flex', marginTop: 2}}>
          <img src={pay_icon} alt='pay_icon' style={{width: '30px', height: '30px'}}/>
          <Typography variant='body2' sx={{marginLeft: 2}}>
            Доступна оплата карткою
          </Typography>
        </Box>
        <Box sx={{display: 'flex', marginTop: 2}}>
          <img src={car_icon} alt='pay_icon' style={{width: '30px', height: '27px'}}/>
          <Typography variant='body2' sx={{marginLeft: 2}}>
            Наявна парковка
          </Typography>
        </Box>
        <Box sx={{display: 'flex', marginTop: 2}}>
          <img src={wifi_icon} alt='pay_icon' style={{width: '30px', height: '25px'}}/>
          <Typography variant='body2' sx={{marginLeft: 2}}>
            Безкоштовний Wi-Fi
          </Typography>
        </Box>
        <Box sx={{display: 'flex', marginTop: 2}}>
          <img src={dinner_icon} alt='pay_icon' style={{width: '30px', height: '27px'}}/>
          <Typography variant='body2' sx={{marginLeft: 2}}>
            Сніданки включено
          </Typography>
        </Box>
        <Box sx={{display: 'flex', marginTop: 2}}>
          <img src={pet_icon} alt='pay_icon' style={{width: '30px', height: '27px'}}/>
          <Typography variant='body2' sx={{marginLeft: 2}}>
            Pet-friendly готель
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}