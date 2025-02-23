import { useState, useEffect } from "react";
import taskApi from "@/api";
import { Task } from "@/__generated__/data-contracts";

const useFetchTask = (id: number) => {
  const [task, setTask] = useState<Task | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await taskApi.tasksDetail(id);
        setTask(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  return { task, loading, error };
};

export default useFetchTask;
