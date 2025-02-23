import { useState, useEffect } from "react";

import { Task } from "@/__generated__/data-contracts";
import tasksApi from "@/api";

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await tasksApi.tasksList({ page: currentPage });
        setTasks(response.data.rows);
        setTotalPages(response.data.total_pages || 1);
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
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return { tasks, loading, error, currentPage, totalPages, handlePageChange };
};

export default useFetchTasks;
