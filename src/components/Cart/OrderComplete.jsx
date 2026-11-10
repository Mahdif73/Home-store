import { useState } from "react";
import { useUser } from "../Authentication/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./useCart";
import { getCreateOrderCode } from "../../Services/apiCode";
import { formatCurrency } from "../../utils/helpers";
import Button from "../main/Button";
import { useOrderCode } from "./useOrderCode";
import { useAddress } from "../Addresses/useAddress";
import { useCreateOrder } from "../Order/useCreateOrder";
import { shippingCost } from "../../utils/constants";
import toast from "react-hot-toast";
import ModalPay from "../main/ModalPay";
import OrderCompleteSkeleton from "../Loading/OrderCompleteSkeleton";

function OrderComplete({ selectPay }) {
  const [showPay, setShowPay] = useState(false);
  const { user } = useUser();
  const { code } = useOrderCode(user?.id);

  const { address } = useAddress();
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, cartLoader } = useCart();
  const { createOrder, isLoading } = useCreateOrder(user?.id);
  const isCartPage = location.pathname === "/cart";
  const isCheckoutPage = location.pathname === "/checkout";
  const isAddress =  address?.find((addr) => addr.isTitle);

  const totalCartPrice = cart?.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalDiscount = cart?.reduce(
    (sum, item) => sum + ((item.price * item.discount) / 100) * item.quantity,
    0,
  );
  const totalPay = totalCartPrice + shippingCost - totalDiscount;

  const items = cart?.map((item) => ({
    id: item.product_id,
    name: item.title,
    image: item.image,
    color: item.color,
    size: item.size,
    discount: item.discount,
    price: item.price,
    offPrice: item.offPrice,
    quantity: item.quantity,
  }));

  async function handleAddToOrder() {
    const session = await getCreateOrderCode(user.id);
    const cartItem = {
      items,
      totalPrice: Math.ceil(totalPay),
      totalDiscount: Math.ceil(totalDiscount),
      shippingCost,
      address: isAddress?.address,
      customer: isAddress?.customerName,
      customerNumber: isAddress?.phone,
      payWay: selectPay,
      payStatus:
        selectPay === "پرداخت آنلاین" ? "پرداخت شد" : "در انتظار پرداخت",
      orderStatus: "در انتظار تحویل",
      user_id: user?.id,
      order_code: session?.orderCode,
    };
    createOrder(cartItem);
  }

  if (cartLoader) return <OrderCompleteSkeleton />;

  return (
    <section className="bg-(--border-color-alt) border border-(--border-color) rounded-2xl gap-4 h-150 sm:w-100 sm:mx-auto lg:w-77.5 lg:m-0 xl:w-85">
      <h3 className="flex justify-center mt-8 mb-0 text-(--text-color) sm:text-start sm:pt-0 sm:pb-8">
        خلاصه سفارش کد : {code?.orderCode || "..."}
      </h3>
      <div className="text-(--text-color) pt-6 flex justify-between border-b border-(--body-color) pb-3 mx-12 lg:mx-8 2xl:gap-x-16">
        <p>مبلغ</p>
        <p>{formatCurrency(totalCartPrice)} </p>
      </div>

      <div className="text-(--text-color) pt-12 flex justify-between border-b border-(--body-color) pb-3 mx-12 lg:mx-8 2xl:gap-x-16">
        <p>سود شما </p>
        <p>{formatCurrency(totalDiscount)} </p>
      </div>
      <div className="text-(--text-color) pt-12 flex justify-between border-b border-(--body-color) pb-3 mx-12 lg:mx-8 2xl:gap-x-16">
        <p>هزینه ارسال</p>
        <p>{formatCurrency(shippingCost)} </p>
      </div>
      <div className="text-(--text-color) pt-12 flex justify-between border-b border-(--body-color) pb-3 mx-12 lg:mx-8 2xl:gap-x-16">
        <p>مبلغ پرداختی</p>
        <p>{formatCurrency(Math.ceil(totalPay))} </p>
      </div>
      {showPay && (
        <ModalPay
          code={code?.orderCode}
          totalPay={totalPay}
          onClose={() => setShowPay(false)}
          onConfirm={() => {
            handleAddToOrder();
            setShowPay(false);
          }}
        />
      )}

      <div className="flex justify-center mt-12 mb-0">
        {isCartPage && !isCheckoutPage && cart?.length > 0 && (
          <Button htmlType="order" onClick={() => navigate("/checkout")}>
            تکمیل سفارش
          </Button>
        )}
        {isCheckoutPage && cart?.length > 0 && (
          <Button
            htmlType="order"
            onClick={() => {
              if (!isAddress) {
                toast.error("آدرسی را جهت ارسال مرسوله انتخاب کنید");
                return;
              }

              if (selectPay === "پرداخت آنلاین") {
                setShowPay(true);
                return;
              }

              handleAddToOrder();
            }}
            disabled={isLoading}
          >
            {isLoading ? "در حال پرداخت..." : "پرداخت"}
          </Button>
        )}
      </div>
    </section>
  );
}

export default OrderComplete;
