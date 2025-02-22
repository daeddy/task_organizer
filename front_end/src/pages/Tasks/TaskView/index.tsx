import tasks from "../dummyData";
import { useParams } from "react-router";
import { formatDate } from "../../../utils/dates";

import NotFound from "../../../pages/NotFound";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TaskView = () => {
  const { id } = useParams<"id">();
  const task = tasks.find((task) => `${task.ID}` === id);

  if (!task) {
    return <NotFound />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.name}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>Status: {task.status}</li>
          <li>Due Date: {formatDate(task.due_date)}</li>
        </ul>
      </CardContent>
      <CardFooter className="text-xs">
        <ul>
          <li>last updated: {formatDate(task.UpdatedAt)}</li>
          <li>Created: {formatDate(task.CreatedAt)}</li>
        </ul>
      </CardFooter>
    </Card>
  );
};

export default TaskView;
