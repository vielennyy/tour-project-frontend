import {useEffect, useState} from "react";
import { Link, useSearchParams } from 'react-router-dom';

import {Box, Typography} from "@mui/material";

import { MainCard } from "./MainCard";
import { Attraction } from "../../TypesAndInterfaces";
import moment from "moment/moment";


export const MainCards = ():JSX.Element => {
  const [attractions, setAttractions] = useState<[]>([]);
  const [searchResultList, setSearchResultList] = useState<[]>([]);
  const [searchParams] = useSearchParams();
  moment.locale('uk');

  console.log(searchParams.get('search'))
  const fetchingAttractions = async () => {
    const fetching = await fetch('https://cktour.club/api/v1/attractions',
      {
        method: "GET"
      });
    const json = await fetching.json();
    return setAttractions(json);
  }

  const searchAttractions = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/attractions?search=${searchParams.get('search')}`,
      {
        method: "GET"
      });
    const json = await fetching.json();
    return setSearchResultList(json);
  }

  useEffect(() => {
    fetchingAttractions()
    searchAttractions()
  }, [])

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
      marginTop: 4
    }}>
      {searchParams.get('search') ?
        searchResultList.map((attraction:Attraction) =>
        <Link to={`/attractions/${attraction.id}`} key={attraction.id}>
          <MainCard attraction={attraction}/>
        </Link>)
        :
        attractions.map((attraction:Attraction) =>
          <Link to={`/attractions/${attraction.id}`} key={attraction.id}>
            <MainCard attraction={attraction}/>
          </Link>)
      }
    </Box>
  )
}

// {attractions.length > 0 ?
//   attractions.map((attraction:Attraction) =>
//     <Link to={`/attractions/${attraction.id}`} key={attraction.id}>
//       <MainCard attraction={attraction}/>
//     </Link>)
//   :
//   <Typography>Атракцій не знайдено</Typography>
// }