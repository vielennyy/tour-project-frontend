import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box} from '@mui/material';
import {NavBar} from "../../components/Navbar";

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, normal',
  },
});


export const Layout = (props:any):JSX.Element => {
   return(
     <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Box>
         <NavBar/>
         <Box>
           {props.children}
         </Box>
       </Box>
     </ThemeProvider>
   )
}
