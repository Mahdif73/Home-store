import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
import { useUpdateCart } from "../Cart/useUpdateCart";
import Button from "../main/Button";
import { faDigitsNum, formatCurrency } from "../../utils/helpers";
import { useCart } from "../Cart/useCart";
import { useDeleteCart } from "../Cart/useDeleteCart";
import Quantity from "../main/Quantity";

function CartPanel() {
  const { cart, isLoading } = useCart();
  const { isUpdating } = useUpdateCart();
  const { mutate, isDeleting } = useDeleteCart();
  const loading = isDeleting || isUpdating || isLoading;

  const handleDelete = (id) => mutate(id);

  return (
    <div className="opacity-0 invisible absolute z-999 top-[90%] left-0 max-h-150 bg-(--border-color-alt) rounded-b-2xl rounded-t-2xl border border-(--border-color) overflow-y-scroll group-hover:visible group-hover:opacity-100">
      <section className="min-w-112.5">
        {!cart?.length && (
          <h3 className="py-8 mr-8 xl:mr-8">سبد خرید شما خالی است</h3>
        )}
        {cart &&
          cart.map((item) => (
            <div key={item.id}>
              <div className="grid grid-rows-[150px] items-center border-b border-b-(--border-color) sm:px-2 sm:py-4 sm:grid-cols-[160px_250px]">
                <Link
                  className="flex justify-center"
                  to={`/products/details/${item.product_id}`}
                >
                  <img
                    className="w-25 hover:shadow-(--shadow-lg) "
                    src={item.image}
                    alt=""
                  />
                </Link>
                <p className="text-base">{item.title}</p>

                <div className="flex justify-center">
                  <Quantity disabled={loading} item={item} />
                </div>
                <div className="flex items-end xs:justify-around xs:flex-col xs:items-start xs:mb-4 xs:gap-4 xs:pr-8 md:flex-row md:items-end md:justify-start md:mb-0 md:gap-8 md:pr-0">
                  <div className="min-w-30">
                    <div className="flex justify-between min-h-5">
                      <p className="text-(--text-color-light) text-base line-through">
                        {item.totalOffPrice
                          ? formatCurrency(item.totalPrice)
                          : "\u200B"}
                      </p>
                      <span className="pr-3">
                        <p>
                          {item.discount > 0 ? faDigitsNum(item.discount) : ""}
                          {item.discount ? "%" : " "}
                        </p>
                      </span>
                    </div>
                    <div className="flex gap-8 text-(--first-color) font-bold">
                      {!item.totalOffPrice
                        ? formatCurrency(item.totalPrice)
                        : formatCurrency(item.totalOffPrice)}{" "}
                    </div>
                  </div>

                  <div className="mr-4">
                    <Button
                      disabled={isDeleting}
                      onClick={() => handleDelete(item.id)}
                    >
                      <HiOutlineTrash className="text-2xl" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default CartPanel;
