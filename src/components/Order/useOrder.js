import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder } from "../../Services/apiOrder";

export function useOrder() {
  const { id } = useParams();

  const {
    isLoading,
    data: order,
    error,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id),
    retry: false,
  });

  return { isLoading, error, order };
}
