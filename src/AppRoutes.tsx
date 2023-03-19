import { HomePage } from "./pages/HomePage";
import { ToursPage } from './pages/ToursPage';
import { UserPage } from "./pages/UserPage";
import {AdminPage} from "./pages/AdminPage";
import {Map} from "./components/Map"
import { PartnerPage } from "./pages/PartnerPage";

const AppRoutes = [
  {
    index: true,
    element: <HomePage />
  },
  {
    path: '/user',
    element: <UserPage />
  },
  {
    path: '/tours',
    element: <ToursPage />
  },
  {
    path: '/accommodations',
    element: <ToursPage />
  },
  {
    path: '/foods',
    element: <ToursPage />
  },
  {
    path: '/partner',
    element: <PartnerPage/>
  },
  {
    path: '/admin',
    element: <AdminPage/>
  },
  {
    path: '/map',
    element: <Map/>
  }
];

export default AppRoutes;