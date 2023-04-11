import {Box} from "@mui/material";
import { Link } from 'react-router-dom';

import { MainCard } from "./MainCard";

export const MainCards = ():JSX.Element => {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
      marginTop: 4
    }}>
      <Link to={`/attractions/${1}`}>
        <MainCard/>
      </Link>
      <MainCard/>
    </Box>
  )
}