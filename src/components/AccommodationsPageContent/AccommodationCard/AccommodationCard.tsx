import {Box, Button, Typography} from '@mui/material';

import picture from '../../../assets/image/accommodations/third.png';
import star from '../../../assets/image/accommodations/Star.png';
export const AccommodationCard = ():JSX.Element => {
  return(
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box>
        <img src={picture} alt='hotel' style={{width: '100%'}}/>
      </Box>
      <Box sx={{
        padding: 2
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5'>
            Готель "Телячі ніжності"
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src={star} alt='star' style={{width: '18px', height: '18px', margin: '0 10px 5px 0'}}/>
            <Typography variant='h5'>
              4.7
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          marginTop: 1.5,
          alignItems: 'center'
        }}>
          <Typography variant='h6'>
            Від $500
          </Typography>
          <Typography variant='h6' sx={{
            marginLeft: 2,
            color: '#777777',
            fontSize: 14
          }}>
            за 1 ніч
          </Typography>
        </Box>
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