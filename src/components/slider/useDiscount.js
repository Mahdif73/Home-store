import { useQuery } from "@tanstack/react-query";
import { getDiscount } from "../../Services/apiProducts";
export function useDiscount() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getDiscount,
  });
  return {
    products,
    isLoading,
    error,
  };
}
