import { Outlet } from "react-router";

const TasksIndex = () => (
  <div className="flex w-full scroll-mt-16 flex-col p-4">
    <Outlet />
  </div>
);

export default TasksIndex;
