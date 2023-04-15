import {Box} from "@mui/material";

import {SecondaryCard} from "./SecondaryCard";

export const SecondaryCards = ():JSX.Element => {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      marginTop: 4
    }}>
      <SecondaryCard/>
      <SecondaryCard/>
      <SecondaryCard/>
      <SecondaryCard/>
    </Box>
  )
}