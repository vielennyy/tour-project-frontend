import React, { useState} from "react";
import {Link} from "react-router-dom";

import {Box, Breadcrumbs, Button, Container, Typography} from "@mui/material";

import { AccommodationsList } from "./AccommodationsList";
import SearchIcon from "@mui/icons-material/Search";

interface SearchString {
  value: string;
}

export const AccommodationsPageContent = ():JSX.Element => {
  const [searchValue, setSearchValues] = useState<SearchString>();
  const [result, setResult] = useState<SearchString>();
  const [searchAccommodationList, setSearchAccommodationList] = useState<[]>([])

  const handleChange = (event:any) => {
    setSearchValues(event.target.value);
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

  const searchAccommodation = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations?geolocations=${searchValue}`,
      {
        method: "GET"
      });
    const json = await fetching.json();
    if(fetching.ok) {
      setResult(searchValue);
    }
    return setSearchAccommodationList(json.data);
  }

  return(
    <Box sx={{
      position: 'relative'
    }}>
      <Box sx={{
        background: '#F4F6F8',
        height: 120,
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
      }}></Box>
        <Container sx={{
          width: '1440',
          paddingBottom: 8
        }}>
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
              <Button onClick={searchAccommodation} sx={{
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
              {result && searchAccommodationList.length > 0 ? `Результат пошку '${result}'` : 'Рекомендації'}
            </Typography>
          </Box>
          <AccommodationsList props={searchAccommodationList}/>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button sx={{
              background: '#EF5151',
              padding: '18px',
              borderRadius: '7px',
              width: 280,
              maxHeight: 60,
            }}
                    variant="contained">
              <Typography sx={{ color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
                Показати більше
              </Typography>
            </Button>
          </Box>
        </Container>
    </Box>
  )
}