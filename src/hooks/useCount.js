import { useCart } from "../components/Cart/useCart";

export function useCount() {
  const { cart, cartLoader } = useCart();

  const getTotalCartQuantity = cart?.length
    ? cart?.reduce((sum, item) => sum + item.quantity, 0)
    : null;

  return { getTotalCartQuantity, cartLoader };
}
