import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Task } from "@/__generated__/data-contracts";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";
import { buttonVariants } from "@/components/ui/button";
import { TaskForm } from "@/components/forms";
import { Link } from "react-router";
import { formatDate } from "@/utils/dates";
import { useFetchTasks } from "@/api/hooks";
import { Plus } from "lucide-react";

const TasksList: React.FC = () => {
  const { tasks, error } = useFetchTasks();

  if (error) {
    return <NotFound />;
  }

  const handleCreateTask = (data: Task | undefined) => {
    console.table(data);
  };
  const handleCreateTaskError = (error_message: string) => {
    console.log(error_message);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3>Tasks</h3>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <Plus />
              New Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New task</DialogTitle>
              <DialogDescription>Create a new task</DialogDescription>
              <TaskForm
                onSuccess={handleCreateTask}
                onError={handleCreateTaskError}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {tasks && (
        <Table>
          <TableCaption>A list of tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Due date</TableHead>
              <TableHead className="px-4 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.id}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>
                  {task.due_date && formatDate(task.due_date)}
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    to={`${task.id}`}
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default TasksList;
