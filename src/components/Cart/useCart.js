import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../Services/apiCart";

export function useCart() {
  const {
    isLoading: cartLoader,
    data: cart,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { cartLoader, cart, error };
}
