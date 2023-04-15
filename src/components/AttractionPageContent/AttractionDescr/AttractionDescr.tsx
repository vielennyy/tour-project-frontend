import {Box, Button, Typography} from '@mui/material';

import img from '../../../assets/image/attractions/page-image.png';
import {Attraction} from "../../TypesAndInterfaces";

interface AttractionProps {
  attraction: Attraction
}
export const AttractionDescr = ({attraction}:AttractionProps):JSX.Element => {
  console.log(attraction)
  return (
    <Box sx={{
      marginTop: 2,
      display: 'grid',
      gridTemplateColumns: '45% 53%',
      gap: '20px'
    }}>
      <Box>
        <Typography variant='body2' sx={{marginTop: 2}}>
          {attraction.description}
        </Typography>
        <Button sx={{
          background: '#EF5151',
          padding: '18px',
          borderRadius: '7px',
          width: 280,
          maxHeight: 60,
          marginTop: 4
        }}
                variant="contained">
          <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
            Бронювати
          </Typography>
        </Button>
      </Box>
      <Box>
        <img src={attraction.image_url} alt='img' style={{width: '100%', height: '100%', borderRadius: '15px'}}/>
      </Box>
    </Box>
  )
}