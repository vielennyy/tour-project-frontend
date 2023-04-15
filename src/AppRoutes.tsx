import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { MapPage } from "./pages/MapPage"
import { PartnerPage } from "./pages/PartnerPage";
import { AccommodationsPage } from "./pages/AccommodationsPage";
import { AccommodationPage } from "./pages/AccommodationPage";
import { CateringPage } from "./pages/CateringPage";
import { CateringItemPage } from "./pages/CateringItemPage";
import { MainPage } from "./components/AddAdvertisement/MainPage";
import { ToursPage } from './pages/ToursPage';
import { TourPage } from "./pages/TourPage";
import { AttractionsPage } from "./pages/AttractionsPage";
import { AttractionPage } from "./pages/AttractionPage";

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
    path: '/accommodations',
    element: <AccommodationsPage />
  },
  {
    path: '/accommodations/:id',
    element: <AccommodationPage/>
  },
  {
    path: '/catering',
    element: <CateringPage />
  },
  {
    path: '/catering/:id',
    element: <CateringItemPage />
  },
  {
    path: '/tours',
    element: <ToursPage />
  },
  {
    path: '/tours/:id',
    element: <TourPage />
  },
  {
    path: '/attractions',
    element: <AttractionsPage />
  },
  {
    path: '/attractions/:id',
    element: <AttractionPage />
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
  },
  {
    path: '/accommodations/:id',
    element: <AccommodationPage/>
  },
  {
    path: '/add-advertisement',
    element: <MainPage/>
  }
];

export default AppRoutes;