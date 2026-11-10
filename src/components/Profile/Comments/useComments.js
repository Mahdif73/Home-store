import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../../Services/apiComments";

export function useComments(id) {
  const {
    isLoading,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => getComments(id),
    enabled: !!id,
  });

  return { isLoading, comments, error };
}
