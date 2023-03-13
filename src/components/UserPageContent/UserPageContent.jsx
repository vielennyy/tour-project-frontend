import Box from "@mui/material/Box";

import {UserCard} from "./UserCard";
import {Orders} from "./Orders";


export const UserPageContent = () => {
  return(
    <Box sx={{
      width: {xs: '100%', md: '1024px'},
      m: '0 auto'
    }}>
      <Box>
      </Box>
      <Box>
        <UserCard/>
      </Box>
    </Box>
  )
}