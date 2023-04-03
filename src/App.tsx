import { createContext, useState, useContext, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Box} from "@mui/material";

import {Layout} from "./pages/Layout";
import AppRoutes from "./AppRoutes"

import {UserContext} from "./UserContext";

function App():JSX.Element {
  const [isAuthorize, setIsAuthorize] = useState(false);

  return (
	<Box>
    <UserContext.Provider value={{isAuthorize, setIsAuthorize}}>
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

