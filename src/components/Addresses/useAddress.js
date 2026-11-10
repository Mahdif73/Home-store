import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../../Services/apiAddress";

export function useAddress() {
  const {
    isLoading,
    data: address,
    error,
  } = useQuery({
    queryKey: ["address"],
    queryFn: getAddress,
  });

  return { isLoading, address, error };
}
