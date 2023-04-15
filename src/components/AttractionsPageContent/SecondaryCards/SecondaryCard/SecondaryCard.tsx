import {Box} from "@mui/material";

import card from '../../../../assets/image/Card3.png';
export const SecondaryCard = ():JSX.Element => {
  return (
    <Box>
      <img src={card} alt='card' style={{width: '100%'}}/>
    </Box>
  )
}