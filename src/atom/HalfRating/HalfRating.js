import * as React from 'react';
import Rating from '@mui/material/Rating';

export const HalfRating = () => {
  return (
      <Rating sx={{color: '#FF3939'}} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
  );
}