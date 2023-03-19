import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Navbar'
import { HomePage } from "./pages/HomePage";
import { ToursPage } from './pages/ToursPage';
import { Footer } from './components/Footer';

// import 'normalize.css';
import {Box} from "@mui/material";
import { PartnerPageContent } from './components/PartnerPageContent';
import {Map} from "./components/Map"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserPageContent } from './components/UserPageContent';

const theme = createTheme({
	typography: {
	  fontFamily: 'Inter, normal',
	},
  });

function App():JSX.Element {
  return (
	<Box>
		<ThemeProvider theme={theme}>
			<NavBar/>
					<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/user" element={<UserPageContent />} />
					<Route path="/tours" element={<ToursPage />} />
					<Route path="/accommodations" element={<h1>Accommodations</h1>} />
					<Route path="/foods" element={<h1>Foods</h1>} />
					<Route path="/partner" element={<PartnerPageContent/>} />
					<Route path="/map" element={<Map/>} />


					</Routes>
			<Footer/>
		</ThemeProvider>
	</Box>
  );
}

export default App;
