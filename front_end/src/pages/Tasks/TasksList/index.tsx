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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Task } from "@/__generated__/data-contracts";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";
import { buttonVariants } from "@/components/ui/button";
import { TaskForm } from "@/components/forms";
import { Link, useNavigate } from "react-router";
import { formatDate } from "@/utils/dates";
import { useFetchTasks } from "@/api/hooks";
import { Plus } from "lucide-react";

const TasksList: React.FC = () => {
  const { tasks, error, currentPage, totalPages, handlePageChange } =
    useFetchTasks();
  const navigate = useNavigate();

  if (error) {
    return <NotFound />;
  }

  const handleCreateTask = (data: Task | undefined) => {
    navigate(`/tasks/${data?.id}`);
  };
  const handleCreateTaskError = (errorMessage: string) => {
    console.log(errorMessage);
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
        <>
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
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationButton
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationButton>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
};

export default TasksList;
