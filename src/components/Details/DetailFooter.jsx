import { useNavigate } from "react-router-dom";
import { faDigitsNum, formatCurrency } from "../../utils/helpers";
import { useUser } from "../Authentication/useUser";
import Button from "../main/Button";
import Quantity from "../main/Quantity";
import toast from "react-hot-toast";

function DetailFooter({ product, selectItem, handleAddToCart, isDetail }) {
  const { price, offPrice, discount } = product;
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  return (
    <div className="border-t border-t-(--border-color-alt) z-98 fixed bottom-20 left-0 w-full h-25 flex justify-between items-center  bg-(--body-color) xs:px-4 sm:px-8 md:px-16 lg:hidden">
      <div className="sm:min-w-45 ">
        <div className="flex justify-between pb-2 min-h-5">
          <p className="text-(--text-color-light) text-sm line-through sm:text-base">
            {offPrice ? formatCurrency(price) : "\u200B"}{" "}
          </p>
          <span className="text-(--back-color) font-semibold text-base  sm:text-base">
            {discount > 0 ? faDigitsNum(discount) : ""}
            {discount ? "%" : " "}
          </span>
        </div>
        <p className="text-base font-bold text-(--back-color) sm:text-lg">
          {!offPrice ? formatCurrency(price) : formatCurrency(offPrice)}{" "}
        </p>
      </div>

      <>
        <div>
          {selectItem && <Quantity item={selectItem} isUpdating={isDetail} />}
        </div>
        {selectItem ? (
          <Button
            htmlType="details"
            disabled={isDetail}
            onClick={() => navigate("/cart")}
          >
            رفتن به سبد خرید
          </Button>
        ) : (
          <Button
            htmlType="details"
            onClick={() => {
              if (!isAuthenticated) {
                toast.error(
                  "برای افزودن به سبد خرید ابتدا وارد حساب کاربری خود شوید",
                );
                navigate("/login");
              } else {
                handleAddToCart();
              }
            }}
            disabled={isDetail}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </>
    </div>
  );
}

export default DetailFooter;
