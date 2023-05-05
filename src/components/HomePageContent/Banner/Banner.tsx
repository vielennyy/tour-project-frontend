import React, { useState} from "react";
import { Link } from 'react-router-dom';

import {
  Box, Button,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import bg from '../../../assets/image/banner.jpg';

interface SearchString {
  value: string;
}

export const Banner = ():JSX.Element => {
  const [searchValue, setSearchValues] = useState<SearchString>();

  const handleChange = (event:any) => {
    setSearchValues(event.target.value)
  }

  return (
    <Box sx={{position: 'relative', height: '880px', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <img src={bg} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        filter: 'brightness(70%)',
        objectFit: 'cover',
        maxHeight: '880px'}}/>
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
          borderRadius: '7px',
          marginTop: 2
      }}>
        <Box sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          height: 24,
          width: 24
        }}>
          <SearchIcon/>
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', width: '100%',height: '100%', padding: '10px'
        }}>
          <input onChange={handleChange}
            placeholder="Куди їдемо?"
            style={{
              border: 'none',
              width: 300,
              marginLeft: '30px',
              fontSize: 16,
              padding: '0 0 0 15px',
            }}
          />
          <Button variant="contained" sx={{background: '#EF5151',
            padding: '0 30px',
            borderRadius: '7px',
            border: 'none'}}
          >
            <Link to={`/attractions?search=${searchValue}`}>
              <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
                Пошук
              </Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

