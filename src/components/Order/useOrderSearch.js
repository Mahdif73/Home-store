import { useQuery } from "@tanstack/react-query";
import { getOrderSearch } from "../../Services/apiSearch";

export function useOrderSearch(searchOrder) {
  const {
    isLoading: isSearching,
    data: search,
    error,
  } = useQuery({
    queryKey: ["products", searchOrder],
    queryFn: () => getOrderSearch({ searchOrder }),
  });

  return { isSearching, error, search };
}
