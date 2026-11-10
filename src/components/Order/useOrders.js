import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../Services/apiOrder";

export function useOrders() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["order"],
    queryFn: getOrders,
  });

  return { isLoading, orders, error };
}
