import { useForm, SubmitHandler } from "react-hook-form";
import { BaseTask, Task } from "@/__generated__/data-contracts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import taskApi from "@/api";

interface TaskFormProps {
  task?: Task;
  onSuccess: (data: Task | undefined) => void;
  onError: (errorMessage: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSuccess, onError }) => {
  // format date for input
  const dueDate = task?.due_date
    ? new Date(task.due_date).toISOString().split("T")[0]
    : "";
  const form = useForm<BaseTask>({
    defaultValues: {
      name: task?.name || "",
      description: task?.description || "",
      due_date: dueDate || "",
    },
  });
  const onSubmit: SubmitHandler<BaseTask> = async (data) => {
    try {
      // Format the due_date to the expected format
      const formattedData = {
        ...data,
        due_date: data.due_date ? new Date(data.due_date).toISOString() : "",
      };

      let response;
      if (task?.id) {
        response = await taskApi.tasksUpdate(task.id, formattedData);
      } else {
        response = await taskApi.tasksCreate(formattedData);
      }
      onSuccess(response.data);
    } catch (err) {
      if (err instanceof Error) {
        onError(err.message);
      } else {
        onError(String(err));
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="due_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default TaskForm;
