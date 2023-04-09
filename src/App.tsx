import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Box} from "@mui/material";

import {Layout} from "./pages/Layout";
import AppRoutes from "./AppRoutes"

import {UserContext} from "./UserContext";

function App():JSX.Element {
  const [user, setUser] = useState({isAuthorize: false, token: '', id: ''});

  return (
	<Box>
    <UserContext.Provider value={{user, setUser}}>
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element}/>;
          })}
        </Routes>
      </Layout>
    </UserContext.Provider>
	</Box>
  );
}

export default App;

