import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../Services/apiProducts";

export function useBrandProducts() {
  const { brand } = useParams();
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", brand],
    queryFn: () => getAllProducts({ brand }),
  });

  return { isLoading, products, error };
}
