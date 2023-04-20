import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import {Box, Typography} from '@mui/material';

import { AccommodationCard } from "../AccommodationCard";
import { Accommodation } from "../../TypesAndInterfaces";

export const AccommodationsList = ():JSX.Element => {
  const [accommodationsList, setAccommodationsLest] = useState<[]>([]);
  const fetchingAccommodations = async () => {
    const fetching = await fetch('https://cktour.club/api/v1/accommodations',
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      });
    const json = await fetching.json();
    return setAccommodationsLest(json.data);
  }

  useEffect(() => {
    fetchingAccommodations()
  }, [])
  console.log(accommodationsList)
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      margin: '40px 0'
    }}>
      {accommodationsList.length > 0 ?
        accommodationsList.map((accommodation:Accommodation) =>
          <Link to={`/accommodations/${accommodation.id}`} key={accommodation.id}>
            <AccommodationCard accommodation={accommodation}/>
          </Link>)
      :
      <Typography>Готелей не знайдено</Typography>
      }
    </Box>
  )
}