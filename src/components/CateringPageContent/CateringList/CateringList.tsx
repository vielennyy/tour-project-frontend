import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import { CateringCard } from "../CateringCard";


export const CateringList = ():JSX.Element => {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      margin: '40px 0'
    }}>
      <Link key='1' to={`/catering/${1}`}>
        <CateringCard/>
      </Link>
      <CateringCard/>
      <CateringCard/>
      <CateringCard/>
      <CateringCard/>
      <CateringCard/>
    </Box>
  )
}