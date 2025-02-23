import { ChevronLeft } from "lucide-react";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

import { Task } from "@/__generated__/data-contracts";
import { useFetchTask } from "@/api/hooks";
import { TaskForm } from "@/components/forms";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TaskStatusTag } from "@/components/ui/taskStatusTag";
import NotFound from "@/pages/NotFound";
import { formatDate } from "@/utils/dates";

const TaskView = () => {
  const { id } = useParams<"id">();
  const taskId = id ? parseInt(id, 10) : NaN;
  const { task, loading, error } = useFetchTask(taskId);
  const [currentTask, setCurrentTask] = useState<Task | undefined>(task);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    setCurrentTask(task);
  }, [task]);

  if ((!task && !loading) || error) {
    return <NotFound />;
  }

  const handleCreateTask = (data: Task | undefined) => {
    setCurrentTask(data);
    setDialogOpen(false);
  };
  const handleCreateTaskError = (errorMessage: string) => {
    console.log(errorMessage);
  };
  const handleCloseDialog = (open: boolean) => {
    setDialogOpen(open);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Link to="/tasks" className={buttonVariants({ size: "icon" })}>
          <ChevronLeft />
        </Link>
        <Dialog open={dialogOpen} onOpenChange={handleCloseDialog}>
          <DialogTrigger asChild>
            <Button variant="ghost" onClick={() => setDialogOpen(true)}>
              <Pencil />
              Edit Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit task</DialogTitle>
              <DialogDescription>{`Edit ${currentTask?.name}`}</DialogDescription>
              <TaskForm
                task={currentTask}
                onSuccess={handleCreateTask}
                onError={handleCreateTaskError}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      {!loading && currentTask && (
        <Card>
          <CardHeader>
            <CardTitle>{currentTask.name}</CardTitle>
            <CardDescription>{currentTask.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                Status:{" "}
                {currentTask.status && (
                  <TaskStatusTag status={currentTask.status} />
                )}
              </li>
              <li>
                Due Date:{" "}
                {currentTask.due_date && formatDate(currentTask.due_date)}
              </li>
            </ul>
          </CardContent>
          <CardFooter className="text-xs">
            <ul>
              <li>
                last updated:{" "}
                {currentTask.updated_at && formatDate(currentTask.updated_at)}
              </li>
              <li>
                Created:{" "}
                {currentTask.created_at && formatDate(currentTask.created_at)}
              </li>
            </ul>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default TaskView;
