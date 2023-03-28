import { HomePage } from "./pages/HomePage";
import { ToursPage } from './pages/ToursPage';
import { UserPage } from "./pages/UserPage";
import {AdminPage} from "./pages/AdminPage";
import {MapPage} from "./pages/MapPage"
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
    element: <MapPage/>
  }
];

export default AppRoutes;