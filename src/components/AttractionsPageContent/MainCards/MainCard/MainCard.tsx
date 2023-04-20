import {Box, Typography} from "@mui/material";

import card from '../../../../assets/image/attractions/card.png';
import rating from '../../../../assets/image/accommodations/Rating.png';
import location from '../../../../assets/image/accommodations/Location_icon.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Attraction } from "../../../TypesAndInterfaces";

interface AttractionProps {
  attraction: Attraction
}

export const MainCard = ({attraction}:AttractionProps):JSX.Element => {
  return (
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '60% 40%',
      height: 260,
      overflow: 'hidden'
    }}>
      <Box sx={{
        padding: 2,
        display: 'grid',
        gridTemplateRows: '25% 15% 48% 10%'
      }}>
      <Typography variant='h5'>{attraction.title}</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <img src={rating} alt='rating' style={{width: '150px', height: '25px'}}/>
        <Box sx={{
          display: 'flex'
        }}>
          <img src={location} alt='location' style={{width: '18px', height: '21px', marginRight: '10px'}}/>
          <Typography variant='body2'>{attraction.geolocations[0] ? attraction.geolocations[0]["locality"] : 'Невказано'}</Typography>
        </Box>
      </Box>
      <Typography variant='body2'>
        {attraction.description.length > 100 ? `${attraction.description.slice(0, 100)}...` : attraction.description}
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Typography variant='body2'>
          Дізнатися більше
        </Typography>
        <ArrowForwardIcon color={"primary"}/>
      </Box>

      </Box>
      <Box sx={{
        height: '100%'
      }}>
        <img src={attraction.image_url} alt='card'
             style={{width: '100%',
               minHeight: 259,
               maxHeight: 260,
               borderBottomRightRadius: '15px',
               borderTopRightRadius: '15px',
               objectFit: 'cover'}}/>
      </Box>
    </Box>
  )
}