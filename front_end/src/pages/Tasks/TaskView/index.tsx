import tasks from "../dummyData";
import { useParams } from "react-router";
import { formatDate } from "@/utils/dates";
import { ChevronLeft } from "lucide-react";

import NotFound from "@/pages/NotFound";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

const TaskView = () => {
  const { id } = useParams<"id">();
  const task = tasks.find((task) => `${task.id}` === id);

  if (!task) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col gap-4">
      <Link to="/tasks" className={buttonVariants({ size: "icon" })}>
        <ChevronLeft />
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>{task.name}</CardTitle>
          <CardDescription>{task.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Status: {task.status}</li>
            <li>Due Date: {task.due_date && formatDate(task.due_date)}</li>
          </ul>
        </CardContent>
        <CardFooter className="text-xs">
          <ul>
            <li>
              last updated: {task.updatedAt && formatDate(task.updatedAt)}
            </li>
            <li>Created: {task.createdAt && formatDate(task.createdAt)}</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TaskView;
