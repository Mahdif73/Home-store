import { faDigitsNum, formatCurrency } from "../../utils/helpers";
import Quantity from "../main/Quantity";
import { useCart } from "./useCart";
import { useDeleteCart } from "./useDeleteCart";
import { Link } from "react-router-dom";
import Button from "../main/Button";
import { HiOutlineTrash } from "react-icons/hi2";
import { colorShow } from "../../utils/constants";
import CartItemsSkeleton from "../Loading/CartItemsSkeleton";

function CartItems() {
  const { cart, cartLoader } = useCart();

  if (cartLoader) return <CartItemsSkeleton />;

  return (
    <section className="h-175 overflow-y-scroll xs:mb-12 xl:min-w-175 xl:h-125 2xl:w-242.5">
      {!cart?.length && (
        <h2 className="mr-8 mt-8 text-lg">سبد خرید شما خالی است</h2>
      )}
      {cart && cart.map((item) => <Cart key={item.id} item={item} />)}
    </section>
  );
}

export default CartItems;

export function Cart({ item }) {
  const { mutate, isDeleting } = useDeleteCart();

  return (
    <div key={item.id}>
      <div className="grid items-center border-b border-(--border-color) xs:grid-cols-[150px_1fr] xs:grid-rows-[130px] sm:grid-cols-[160px_1fr] sm:py-4 sm:pl-8 sm:pr-3 md:items-end md:grid-cols-[210px_1fr] lg:grid-cols-[180px_1fr] xl:grid-cols-[240px_1fr] xl:grid-rows-[170px_1fr]">
        <Link
          className="flex justify-center pb-4"
          to={`/products/details/${item.product_id}`}
        >
          <img
            className="w-25 hover:shadow-(--shadow-lg) xl:w-35"
            src={item.image}
            alt=""
          />
        </Link>
        <p className="xs:text-sm sm:text-base md:pb-12">{item.title} </p>

        <div className="flex justify-center ">
          <Quantity item={item} />
        </div>
        <div className="flex items-end mb-3 xs:justify-around xs:flex-col xs:items-start xs:gap-4 xs:pr-8 md:flex-row md:items-end md:justify-start md:mb-0 md:gap-8 md:pr-0">
          <div className="min-w-30">
            <div className="flex justify-between min-h-5">
              <p className="text-(--text-color-light) text-base line-through">
                {item.totalOffPrice
                  ? formatCurrency(item.totalPrice)
                  : "\u200B"}
              </p>
              <span>
                <p className="pr-4">
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
          <div className="flex justify-between items-center gap-8  md:pr-4 xl:pr-8">
            {item.color && (
              <p className=" pt-1 text-sm leading-none">{item.color}</p>
            )}
            {item.color && (
              <span
                className="hidden border border-(--border-color) w-7.5 h-7.5 rounded-[50%] lg:block"
                style={{ backgroundColor: colorShow[item.color] }}
              ></span>
            )}
            {item.size && (
              <p className="block bg-(--back-color) text-(--back-color-alt) pt-1 px-1 rounded-sm leading-none">
                {item.size}
              </p>
            )}
            <Button
              disabled={isDeleting}
              htmlType="trash"
              onClick={() => mutate(item.id)}
            >
              <HiOutlineTrash />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
