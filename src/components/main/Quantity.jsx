import { HiOutlineTrash } from "react-icons/hi2";
import { faDigitsNum } from "../../utils/helpers";
import { useDeleteCart } from "../Cart/useDeleteCart";
import { useUpdateCart } from "../Cart/useUpdateCart";
import QuantitySkeleton from "../Loading/QuantitySkeleton";

function Quantity({ item }) {
  const { updateCart, isUpdating } = useUpdateCart();
  const { mutate, isDeleting } = useDeleteCart();
  const loading = isDeleting || isUpdating;

  if (loading) return <QuantitySkeleton />;

  return (
    <div className="flex justify-center items-center gap-x-4 h-12.5 w-32.5 px-4 border border-(--border-color) rounded-[7px]">
      <button
        className="flex items-center justify-center transition delay-75 rounded-[50%] w-6.25 h-6.25 text-base text-(--text-color) bg-(--back-color-alt) disabled:text-(--border-color-alt) disabled:bg-(--back-color) hover:text-(--border-color) hover:bg-(--back-color)"
        disabled={isUpdating}
        onClick={() => {
          const updateQuantity = item.quantity + 1;
          updateCart({
            totalPrice: item.price * updateQuantity,
            totalOffPrice: item.offPrice * updateQuantity,
            quantity: updateQuantity,
            id: item.id,
          });
        }}
      >
        +
      </button>

      <p className="text-center text-base transition delay-20 w-2.5">
        {isUpdating ? "..." : faDigitsNum(item.quantity)}
      </p>

      <button
        className="flex items-center justify-center transition delay-75 rounded-[50%] w-6.25 h-6.25 text-base text-(--text-color) bg-(--back-color-alt) disabled:text-(--border-color-alt) disabled:bg-(--back-color) hover:text-(--border-color) hover:bg-(--back-color)"
        disabled={loading}
        onClick={() => {
          if (item.quantity === 1) {
            mutate(item.id);
            return;
          }

          const updateQuantity = item.quantity - 1;
          updateCart({
            totalPrice: item.price * updateQuantity,
            totalOffPrice: item.offPrice * updateQuantity,
            quantity: updateQuantity,
            id: item.id,
          });
        }}
      >
        {item.quantity === 1 ? <HiOutlineTrash /> : "-"}
      </button>
    </div>
  );
}

export default Quantity;
