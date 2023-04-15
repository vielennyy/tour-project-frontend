import {Box, Button, Typography} from "@mui/material";

export const TourReservationItem = ():JSX.Element => {
  return(
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px'
    }}>
      <Box sx={{
        padding: 2
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5'>
            14 квітня 2023р.
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          marginTop: 1.5,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{
            color: '#777777',
            fontSize: 14
          }}>
            Від ₴460
          </Typography>
        </Box>
        <Box sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Button sx={{
            width: 200,
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