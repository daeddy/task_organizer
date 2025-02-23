import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";

import MainLayout from "./layouts/Main";

import Notfound from "@/pages/NotFound";
import Tasks, { TasksList, TasksView } from "@/pages/Tasks";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/tasks" />} />
          <Route path="tasks" element={<Tasks />}>
            <Route index element={<TasksList />} />
            <Route path="/tasks/:id" element={<TasksView />} />
          </Route>
        </Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
