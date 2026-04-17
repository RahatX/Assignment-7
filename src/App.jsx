import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import FriendDetailsPage from "./pages/FriendDetailsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import StatsPage from "./pages/StatsPage";
import TimelinePage from "./pages/TimelinePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/friend/:id" element={<FriendDetailsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
