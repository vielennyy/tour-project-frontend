import { Routes, Route } from 'react-router-dom';
import {Box} from "@mui/material";

import {Layout} from "./pages/Layout";
import AppRoutes from "./AppRoutes"

function App():JSX.Element {

  return (
	<Box>

    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
	</Box>
  );
}

export default App;

