import Box from "@mui/material/Box";

import {HomePageContent} from "../../components/HomePageContent";

export const HomePage = () => {
  return(
    <Box sx={{
      width: {xs: '100%', md: '1024px'},
      m: '0 auto'
    }}>
      <Box>
      </Box>
      <Box>
        <HomePageContent/>
      </Box>
    </Box>
  )
  }