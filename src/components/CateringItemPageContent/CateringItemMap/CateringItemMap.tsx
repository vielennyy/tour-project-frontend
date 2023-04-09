import {Box, Typography} from "@mui/material";

import location_icon from "../../../assets/image/accommodations/Location_icon.png";
import map from "../../../assets/image/accommodations/map.png";
export const CateringItemMap = ():JSX.Element => {
  return (
    <Box>
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography variant='h4'>
          Розташування закладу
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src={location_icon} alt='location_icon' style={{width: '24px', height: '28px'}}/>
          <Typography variant='h5' sx={{marginLeft: 2}}>
            м. Чекраси, Черкаська обл.
          </Typography>
        </Box>
      </Box>
      <img src={map} style={{width: '100%', marginTop: '35px'}}/>
    </Box>
  )
}