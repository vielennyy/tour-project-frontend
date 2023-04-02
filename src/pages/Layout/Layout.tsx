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
    h1: {
      fontFamily: 'Gilroy, normal',
      fontWeight: 700,
      fontSize: 58,
      color: '#FFFFFF'
    },
    h2: {
      fontFamily: 'Gilroy, normal',
      fontSize: 46,
      fontWeight: 700,
      color: '#000000'
    },
    h3: {
      fontFamily: 'Gilroy, normal',
      fontSize: 28,
      fontWeight: 600,
      color: '#000000'
    },
    h4: {
      fontFamily: 'Gilroy, normal'
    },
    h5: {
      fontFamily: 'Gilroy, normal'
    },
    h6: {
      fontFamily: 'Gilroy, normal'
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 22,
      color: '#000000'
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 18,
      color: '#000000'
    }
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
