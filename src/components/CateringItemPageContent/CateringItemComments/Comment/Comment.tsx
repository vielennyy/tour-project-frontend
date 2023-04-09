import {Box, Button, Typography} from "@mui/material";

import rating from '../../../../assets/image/accommodations/Rating.png';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export const Comment = ():JSX.Element => {
  return(
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography variant='h5'>
          Віталіна Андрощук
        </Typography>
        <Typography variant='h5' sx={{
          color: '#777777',
          fontSize: 16
        }}>
          1 березня 2023
        </Typography>
      </Box>
      <img src={rating} alt='rating' style={{width: '150px', height: '25px', marginTop: '16px'}}/>
      <Typography variant='body2' sx={{marginTop: 2}}>
        Зупинялись в цьому готелі протягом декількох ночей і були приємно вражені чистотою і порядком. Сніданок також був дуже смачним і різноманітним, що було приємним бонусом.
      </Typography>
    </Box>
  )
}