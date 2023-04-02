import {Box,
  Typography,
  Button,
  TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import bg from '../../assets/image/banner.jpg';
import React from "react";
export const Banner = ():JSX.Element => {
  return (
    <Box sx={{position: 'relative', height: '700px', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <img src={bg} style={{
        position: 'absolute',
        top: '-120px',
        left: 0,
        width: '100%',
        filter: 'brightness(70%)',
        objectFit: 'cover',
        maxHeight: '820px'}}/>
      <Typography sx={{
        position: 'relative',
        zIndex: 2,
        color: '#FFFFFF',
        width: '800px',
        textAlign: 'center'
      }} variant="h1">Подорож Україною - відкриття краси і культури</Typography>
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        width: '650px',
        height: '60px',
        background: '#ffffff',
        marginTop: 4,
        borderRadius: '7px',
        padding: 1,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 1
        }}>
          <SearchIcon/>
          <input type="text" placeholder="Куди їдемо?" style={{
            border: 'none',
            width: 200,
            padding: '5px 10px',
            marginLeft: '10px',
            fontSize: 16
          }}/>
        </Box>
        <Button sx={{
          background: '#EF5151',
          padding: '10px 30px',
          borderRadius: '7px',
        }}
        variant="contained">
          <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
            Пошук
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}