import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../Services/apiProducts";

export function useGroups() {
  const {
    isLoading,
    data: groups,
    error,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });

  return { isLoading, groups, error };
}
