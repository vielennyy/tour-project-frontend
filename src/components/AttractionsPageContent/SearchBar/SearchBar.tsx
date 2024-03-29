import React, {useEffect, useState} from "react";
import { Link, useSearchParams } from 'react-router-dom';

import {Box, Button, Typography, Breadcrumbs} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ():JSX.Element => {
  const [searchResultList, setSearchResultList] = useState<[]>([]);
  const [searchParams] = useSearchParams();

  const searchAttractions = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/attractions?search=${searchParams.get('search')}`,
      {
        method: "GET"
      });
    const json = await fetching.json();
    return setSearchResultList(json);
  }

  useEffect(() => {
    searchAttractions()
  }, [])

  console.log(searchResultList);

  const breadcrumbs = [
    <Link to={'/'}>
      <Typography variant="body2">
        Головна
      </Typography>
    </Link>,
    <Link to={'/attractions'}>
      <Typography variant="body2">
        Атракції
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
          <input type="text"
           placeholder="Куди їдемо?"
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
        {searchParams.get('search') && searchResultList.length > 0 ? `Цікаві місця в ${searchParams.get('search')}` :
          searchParams.get('search') && searchResultList.length === 0 ? 'За даним запитом нічого не знайдено' :
          'Цікаві місця'}
      </Typography>
    </Box>
  )
}