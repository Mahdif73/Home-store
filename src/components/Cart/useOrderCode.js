import { useQuery } from "@tanstack/react-query";
import { getOrderCode } from "../../Services/apiCode";

export function useOrderCode(user_id) {
  const {
    isLoading,
    data: code,
    error,
  } = useQuery({
    queryKey: ["orderCode", user_id],
    queryFn: () => getOrderCode(user_id),
    enabled: !!user_id,
  });

  return { isLoading, code, error };
}
