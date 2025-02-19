import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "./layouts/Main";
import Notfound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/tasks" />} />
          <Route path="tasks" element={<Notfound />}>
            <Route index element={<Notfound />} />
            <Route path="/tasks/:id" element={<Notfound />} />
          </Route>
        </Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
