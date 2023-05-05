import React, {useState} from "react";
import { Link } from 'react-router-dom';

import {Box, Button, Typography, Breadcrumbs} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchString {
  value: string;
}

export const SearchBar = ():JSX.Element => {
  const [searchValue, setSearchValues] = useState<SearchString>();

  const handleChange = (event:any) => {
    setSearchValues(event.target.value)
  }

  const breadcrumbs = [
    <Link to={'/'}>
      <Typography variant="body2">
        Головна
      </Typography>
    </Link>,
    <Link to={'/accommodations'}>
      <Typography variant="body2">
        Де жити?
      </Typography>
    </Link>,
  ];
  return(
    <Box sx={{
      paddingTop: 2
    }}>
      <Breadcrumbs separator="·" aria-label="breadcrumb" sx={{color: '#EF5151'}}>
        {breadcrumbs}
      </Breadcrumbs>
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        width: '650px',
        height: '60px',
        background: '#ffffff',
        margin: '0 auto',
        marginTop: 4,
        borderRadius: '7px',
        padding: 1,
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 1
        }}>
          <SearchIcon/>
          <input type="text" placeholder="Де жити?" onChange={handleChange}
           style={{
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
      <Typography variant='h3' sx={{textAlign: 'center', marginTop: 2}}>
        Рекомендації
      </Typography>
    </Box>
  )
}