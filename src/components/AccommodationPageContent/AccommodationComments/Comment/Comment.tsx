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
          Андрій Войтенко
        </Typography>
        <Typography variant='h5' sx={{
          color: '#777777',
          fontSize: 16
        }}>
          3 квітня 2023
        </Typography>
      </Box>
      <img src={rating} alt='rating' style={{width: '150px', height: '25px', marginTop: '16px'}}/>
      <Typography variant='body2' sx={{marginTop: 2}}>
        Вражаючий сервіс, затишний номер і чудове розташування. Щиро рекомендую!
      </Typography>
    </Box>
  )
}