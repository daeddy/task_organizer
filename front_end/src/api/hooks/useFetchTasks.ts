import { useState, useEffect } from "react";
import tasksApi from "@/api";
import { Task } from "@/__generated__/data-contracts";

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await tasksApi.tasksList();
        setTasks(response.data.rows);
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

    fetchTasks();
  }, []);

  return { tasks, loading, error };
};

export default useFetchTasks;
