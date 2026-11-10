import { useQuery } from "@tanstack/react-query";
import { getFavorite } from "../../../Services/apiFavorites";

export function useFavorite(product_id) {
  const { data: favorite, isLoading: favoriteLoader } = useQuery({
    queryKey: ["favorite", product_id],
    queryFn: () => getFavorite({ product_id }),
  });

  return { favorite, favoriteLoader };
}
