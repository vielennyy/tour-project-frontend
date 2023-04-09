import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import { AccommodationCard } from "../AccommodationCard";

export const AccommodationsList = ():JSX.Element => {
  const [accommodationsList, setAccommodationsLest] = useState();
  const fetchingAccommodations = async () => {
    // isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/accommodations',
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      });
    const json = await fetching.json();
    // isLoading(false);
    return setAccommodationsLest(json.data);
  }

  useEffect(() => {
    fetchingAccommodations()
  }, [])

  console.log(accommodationsList);
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      margin: '40px 0'
    }}>
      <Link key='1' to={`/accommodations/${1}`}>
        <AccommodationCard/>
      </Link>
      <AccommodationCard/>
      <AccommodationCard/>
      <AccommodationCard/>
      <AccommodationCard/>
      <AccommodationCard/>
    </Box>
  )
}