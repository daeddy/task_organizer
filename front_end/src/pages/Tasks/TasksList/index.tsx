import tasks from "../dummyData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";
import { formatDate } from "@/utils/dates";

const TasksList = () => (
  <div>
    <h3>Tasks</h3>

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
          <TableRow>
            <TableCell className="font-medium">{task.id}</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.due_date && formatDate(task.due_date)}</TableCell>
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
  </div>
);

export default TasksList;
