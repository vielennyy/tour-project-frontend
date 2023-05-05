import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import {Box} from '@mui/material';

import { AccommodationCard } from "../AccommodationCard";
import { Accommodation } from "../../TypesAndInterfaces";

interface SearchProps {
  props: []
}

export const AccommodationsList = ({props}:SearchProps):JSX.Element => {
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

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      margin: '40px 0'
    }}>
      {props.length > 0 ?
        props.map((searchAccommodation:Accommodation) =>
          <Link to={`/accommodations/${searchAccommodation.id}`} key={searchAccommodation.id}>
            <AccommodationCard accommodation={searchAccommodation}/>
          </Link>) :
        accommodationsList.map((accommodation:Accommodation) =>
          <Link to={`/accommodations/${accommodation.id}`} key={accommodation.id}>
            <AccommodationCard accommodation={accommodation}/>
          </Link>)
      }
    </Box>
  )
}