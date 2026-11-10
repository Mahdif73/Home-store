import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../../Services/apiFavorites";

export function useFavorites() {
  const { isLoading, data: favorites } = useQuery({
    queryKey: ["favorite"],
    queryFn: getFavorites,
  });

  return { favorites, isLoading };
}
