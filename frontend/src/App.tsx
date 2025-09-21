import { Route, Routes } from "react-router-dom";
import OrganizerLandingPage from "./pages/OrganizerLandingPage";
import DashboardCreateEventPage from "./pages/DashboardCreateEventPage";

const App = () => {
  return (
    <Routes>
      <Route path="/organizers" element={<OrganizerLandingPage />} />
      <Route
        path="/dashboard/create-event"
        element={<DashboardCreateEventPage />}
      />
    </Routes>
  );
};

export default App;
