import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
			<Route path='/' element={<h1>Home Page</h1>}/>
			<Route path='user' element={<h1>User Page</h1>}/>
			<Route path='tours' element={<h1>Tours</h1>}/>
      <Route path='accomodations' element={<h1>Accomodations</h1>}/>
			<Route path='foods' element={<h1>Foods</h1>}/>
		</Routes>
  );
}

export default App;
