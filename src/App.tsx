import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Navbar'
import { HomePage } from "./pages/HomePage";
import { ToursPage } from './pages/ToursPage';
import { UserPage } from "./pages/UserPage";
import { Footer } from './components/Footer';
import { JsxElement } from 'typescript';


function App():JSX.Element {
  return (
	<>
	<NavBar/>
			<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/user" element={<UserPage />} />
			<Route path="/tours" element={<ToursPage />} />
			<Route path="/accommodations" element={<h1>Accommodations</h1>} />
			<Route path="/foods" element={<h1>Foods</h1>} />
			</Routes>
	<Footer/>
	</>
  );
}

export default App;
