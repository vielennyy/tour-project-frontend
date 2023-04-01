import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box} from '@mui/material';
import {NavBar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#EF5151'
    },
  },
  typography: {
    fontFamily: 'Gilroy, normal',
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
         <Footer/>
       </Box>
     </ThemeProvider>
   )
}
