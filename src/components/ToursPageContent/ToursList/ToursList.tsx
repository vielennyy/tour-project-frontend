import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import { TourCard } from "../TourCard";
import {TourSecondCard} from "../TourSecondCard";
import { TourThirdCard} from "../TourThirdCard/TourThirdCard";

export const ToursList = ():JSX.Element => {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      margin: '40px 0'
    }}>
      <Link key='1' to={`/tours/${1}`}>
       <TourCard/>
      </Link>
      <TourSecondCard/>
      <TourThirdCard/>
    </Box>
  )
}