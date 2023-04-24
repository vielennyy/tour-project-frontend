import { useFormik } from 'formik';

import {
  Box,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import bg from '../../../assets/image/banner.jpg';
import React from "react";

export const Banner = ():JSX.Element => {

  const search = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/attractions?search=долина`,
      {
        method: "GET"
      });
    const json = await fetching.json();
    console.log(json)
  }

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: (values) => {
      search();
    }
  });

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
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', justifyContent: 'space-between', width: '100%',height: '100%', padding: '10px' }}>
          <input
            id="name"
            name="name"
            placeholder="Куди їдемо?"
            value={formik.values.name}
            onChange={formik.handleChange}
            style={{
              border: 'none',
              width: 300,
              marginLeft: '30px',
              fontSize: 16,
              padding: 0,
            }}
          />
          <button type="submit" style={{background: '#EF5151',
            padding: '0 30px',
            borderRadius: '7px',
            border: 'none'}}>
            <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
              Пошук
            </Typography>
          </button>
        </form>
      </Box>
    </Box>
  )
}

