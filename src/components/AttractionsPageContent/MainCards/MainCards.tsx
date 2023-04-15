import {useEffect, useState} from "react";

import {Box, Typography} from "@mui/material";
import { Link } from 'react-router-dom';

import { MainCard } from "./MainCard";
import { Attraction } from "../../TypesAndInterfaces";
import moment from "moment/moment";


export const MainCards = ():JSX.Element => {
  const [attractions, setAttractions] = useState<[]>([]);
  moment.locale('uk');

  const fetchingAttractions = async () => {
    const fetching = await fetch('https://cktour.club/api/v1/attractions',
      {
        method: "GET"
      });
    const json = await fetching.json();
    return setAttractions(json);
  }

  useEffect(() => {
    fetchingAttractions()
  }, [])

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
      marginTop: 4
    }}>
      {attractions.length > 0 ?
        attractions.map((attraction:Attraction) =>
        <Link to={`/attractions/${attraction.id}`} key={attraction.id}>
          <MainCard attraction={attraction}/>
        </Link>)
        :
      <Typography>Атракцій не знайдено</Typography>
      }
    </Box>
  )
}