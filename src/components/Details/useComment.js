import { useQuery } from "@tanstack/react-query";
import { getComment } from "../../Services/apiComments";

export function useComment(id) {
  const {
    isLoading: commentLoader,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => getComment(id),
    enabled: !!id,
  });

  return { commentLoader, comments, error };
}
