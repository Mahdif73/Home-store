import { useQuery } from "@tanstack/react-query";
import { getSearch } from "../../Services/apiSearch";

export function useSearch(searchTerm) {
  const {
    isLoading,
    data: search,
    error,
  } = useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => getSearch({ searchTerm }),
    enabled: searchTerm.length >= 3,
  });

  return { isLoading, error, search };
}
