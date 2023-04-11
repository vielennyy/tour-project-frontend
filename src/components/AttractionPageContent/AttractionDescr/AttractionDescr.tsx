import {Box, Button, Typography} from '@mui/material';

import img from '../../../assets/image/attractions/page-image.png';
export const AttractionDescr = ():JSX.Element => {
  return (
    <Box sx={{
      marginTop: 2,
      display: 'grid',
      gridTemplateColumns: '45% 53%',
      gap: '20px'
    }}>
      <Box>
        <Typography variant='body2' sx={{marginTop: 2}}>
          Національний дендрологічний парк «Софіївка» Національної академії наук України є шедевром світового садово-паркового мистецтва кінця XVIII — початку XIX століть. Парк заснований у 1796 році Станіславом Щенсним Потоцьким.
        </Typography>
        <Typography variant='body2' sx={{marginTop: 2}}>
          Це зразок пейзажного паркового мистецтва — композиції води, землі, каменів, рослин, архітектурних споруд і скульптур. Площа парку сягає 180 гектарів. Парк розташований на околиці старовинного міста Умані Черкаської області.
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
        <img src={img} alt='img' style={{width: '100%', height: '100%'}}/>
      </Box>
    </Box>
  )
}