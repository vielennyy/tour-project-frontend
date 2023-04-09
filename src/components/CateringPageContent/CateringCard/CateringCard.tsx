import {Box, Button, Typography} from '@mui/material';

import faro from '../../../assets/image/catering/faro.png';
import benchef from '../../../assets/image/catering/benchef.png';
import star from '../../../assets/image/accommodations/Star.png';

export const CateringCard = ():JSX.Element => {
  return(
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box>
        <img src={faro} alt='catering' style={{width: '100%', borderTopRightRadius: '15px', borderTopLeftRadius: '15px'}}/>
      </Box>
      <Box sx={{
        padding: 2
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5'>
            Faro del Porto
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
              Переглянути
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}