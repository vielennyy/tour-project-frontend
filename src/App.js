import { Routes, Route } from 'react-router-dom';

import {HomePage} from "./pages/HomePage";
import {UserPage} from "./pages/UserPage";

function App() {
  return (
    <Routes>
			<Route path='/' element={<HomePage/>}/>
			<Route path='user' element={<UserPage/>}/>
			<Route path='tours' element={<h1>Tours</h1>}/>
      <Route path='accommodations' element={<h1>Accommodations</h1>}/>
			<Route path='foods' element={<h1>Foods</h1>}/>
		</Routes>
  );
}

export default App;
