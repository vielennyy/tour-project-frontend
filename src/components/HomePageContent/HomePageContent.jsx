import Box from "@mui/material/Box";
import {Gallery} from "./Gallery";
import {CardItem} from "./Card";


export const HomePageContent = () => {
  return(
    <Box sx={{
      display: 'flex',
      flexDirection: {xs: 'column', md: 'row'},
      justifyContent: 'space-around',
    }}>
      <Gallery/>
      <CardItem/>
    </Box>
  )
}