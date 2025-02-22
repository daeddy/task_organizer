export type task_status = "Overdue" | "Due soon" | "Not urgent";

export type task = {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  name: string;
  description: string;
  due_date: string;
  status: task_status;
};

const tasks: task[] = [
  {
    ID: 9,
    CreatedAt: "2025-02-22T06:42:21.516058Z",
    UpdatedAt: "2025-02-22T07:45:17.658123Z",
    DeletedAt: null,
    name: "Sample Task",
    description: "This is a sample task",
    due_date: "2025-02-20T00:00:00Z",
    status: "Overdue",
  },
  {
    ID: 10,
    CreatedAt: "2025-02-22T06:43:25.859525Z",
    UpdatedAt: "2025-02-22T06:43:25.859525Z",
    DeletedAt: null,
    name: "Sample Task",
    description: "This is a sample task",
    due_date: "2025-02-28T00:00:00Z",
    status: "Due soon",
  },
  {
    ID: 11,
    CreatedAt: "2025-02-22T06:43:26.640771Z",
    UpdatedAt: "2025-02-22T06:43:26.640771Z",
    DeletedAt: null,
    name: "Sample Task",
    description: "This is a sample task",
    due_date: "2025-02-28T00:00:00Z",
    status: "Due soon",
  },
  {
    ID: 12,
    CreatedAt: "2025-02-22T06:43:27.504389Z",
    UpdatedAt: "2025-02-22T06:43:27.504389Z",
    DeletedAt: null,
    name: "Sample Task",
    description: "This is a sample task",
    due_date: "2025-02-28T00:00:00Z",
    status: "Due soon",
  },
  {
    ID: 13,
    CreatedAt: "2025-02-22T07:43:05.508847Z",
    UpdatedAt: "2025-02-22T07:43:05.508847Z",
    DeletedAt: null,
    name: "Sample Task",
    description: "This is a sample task",
    due_date: "2025-02-28T00:00:00Z",
    status: "Due soon",
  },
  {
    ID: 14,
    CreatedAt: "2025-02-22T07:43:58.106156Z",
    UpdatedAt: "2025-02-22T07:43:58.106156Z",
    DeletedAt: null,
    name: "Sample Task",
    description: "This is a sample task",
    due_date: "2025-02-28T00:00:00Z",
    status: "Due soon",
  },
];

export default tasks;
