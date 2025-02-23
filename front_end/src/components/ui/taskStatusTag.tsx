import { Badge, BadgeProps } from "@/components/ui/badge";
import { TaskStatus } from "@/__generated__/data-contracts";

const variants: Record<TaskStatus, BadgeProps["variant"]> = {
  [TaskStatus.StatusNotUrgent]: "info",
  [TaskStatus.StatusDueSoon]: "warning",
  [TaskStatus.StatusOverdue]: "destructive",
};

interface TaskStatusTagProps {
  status: TaskStatus;
}

// Custom verson of badge for task statuses
const TaskStatusTag: React.FC<TaskStatusTagProps> = ({ status }) => {
  return <Badge variant={variants[status]}>{status}</Badge>;
};

export { TaskStatusTag };
