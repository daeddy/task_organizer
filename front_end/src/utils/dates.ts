import { format } from "date-fns";

// Use same format for all dates
const formatDate = (date: string): string => {
  return format(new Date(date), "MMMM dd, yyyy HH:mm");
};

export { formatDate };
