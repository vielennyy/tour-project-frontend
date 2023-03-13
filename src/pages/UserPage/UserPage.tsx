import Box from "@mui/material/Box";

import {UserPageContent} from "../../components/UserPageContent/UserPageContent";


export const UserPage = () => {
  return(
    <Box sx={{
      width: {xs: '100%', md: '1024px'},
      m: '0 auto'
    }}>
      <Box>
      </Box>
      <Box>
        <UserPageContent/>
      </Box>
    </Box>
  )
}