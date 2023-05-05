import {Box, Button, Typography} from '@mui/material';

import tour from '../../../assets/image/tours/tour.png';
import star from '../../../assets/image/accommodations/Star.png';
import gai from '../../../assets/image/tours/gai.jpg'

export const TourSecondCard = ():JSX.Element => {
  return(
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box>
        <img src={gai} alt='tour' style={{width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}/>
      </Box>
      <Box sx={{
        padding: 2
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5'>
            Бузковий гай Диканьки
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src={star} alt='star' style={{width: '18px', height: '18px', margin: '0 10px 5px 0'}}/>
            <Typography variant='h5'>
              4.5
            </Typography>
          </Box>
        </Box>
        <Typography variant='h6' sx={{marginTop: 1.5}}>
          Від 460грн
        </Typography>
        <Box sx={{
          marginTop: 2
        }}>
          <Button sx={{
            width: 140,
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