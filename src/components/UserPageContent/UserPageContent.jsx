import Box from "@mui/material/Box";

import {UserCard} from "./UserCard";
import {Orders} from "./Orders";


export const UserPageContent = () => {
  return(
    <Box sx={{
      display: 'flex',
      flexDirection: {xs: 'column', md: 'row'},
      justifyContent: 'space-around',
    }}>
      <UserCard/>
      <Orders/>
    </Box>
  )
}