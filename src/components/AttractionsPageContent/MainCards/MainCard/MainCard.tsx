import {Box, Typography} from "@mui/material";

import card from '../../../../assets/image/attractions/card.png';
import rating from '../../../../assets/image/accommodations/Rating.png';
import location from '../../../../assets/image/accommodations/Location_icon.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const MainCard = ():JSX.Element => {
  return (
    <Box sx={{
      boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
      borderRadius: '15px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '60% 40%'
    }}>
      <Box sx={{
        padding: 2
      }}>
      <Typography variant='h5'>Національний дендрологічний парк «Софіївка»</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 2
      }}>
        <img src={rating} alt='rating' style={{width: '150px', height: '25px'}}/>
        <Box sx={{
          display: 'flex'
        }}>
          <img src={location} alt='location' style={{width: '18px', height: '21px', marginRight: '10px'}}/>
          <Typography variant='body2'>Умань</Typography>
        </Box>
      </Box>
      <Typography variant='body2' sx={{marginTop: 2}}>
        Національний дендрологічний парк «Софіївка» Національної академії наук України є шедевром світового садово-паркового мистецтва кінця XVIII — початку XIX століть...
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 1
      }}>
        <Typography variant='body2'>
          Дізнатися більше
        </Typography>
        <ArrowForwardIcon color={"primary"}/>
      </Box>

      </Box>
      <Box>
        <img src={card} alt='card' style={{width: '100%', height: '100%'}}/>
      </Box>
    </Box>
  )
}