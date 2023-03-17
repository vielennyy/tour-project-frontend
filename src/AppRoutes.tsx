import { HomePage } from "./pages/HomePage";
import { ToursPage } from './pages/ToursPage';
import { UserPage } from "./pages/UserPage";
import { PartnerPageContent } from './components/PartnerPageContent';
import {AdminPage} from "./pages/AdminPage";

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
    element: <PartnerPageContent/>
  },
  {
    path: '/admin',
    element: <AdminPage/>
  }
];

export default AppRoutes;