import { useEffect } from "react";
import { created } from "../../hooks/created";
import { faDigitsNum, formatCurrency, formatPhone } from "../../utils/helpers";

function OrderInformation({ order }) {
  const {
    address,
    totalDiscount,
    created_at,
    customer,
    customerNumber,
    shippingCost,
    totalPrice,
    order_code,
  } = order;

  useEffect(
    function () {
      if (!order_code) return;
      document.title = ` ${order_code} جزئیات سفارش`;

      return () => {
        document.title = "فروشگاه هوم استور";
      };
    },
    [order_code],
  );

  return (
    <div className="py-5 px-4 xs:text-sm md:text-base">
      <div className="flex gap-6 my-4 pb-4 border-b border-(--border-color)">
        <p>
          کد سفارش : <span className="font-medium">{order_code} </span>
        </p>
        <p>
          تاریخ ثبت سفارش :{" "}
          <span className="font-medium">
            {faDigitsNum(created(created_at))}{" "}
          </span>
        </p>
      </div>
      <div className="flex gap-4">
        <p>
          تحویل گیرنده : <span className="font-medium">{customer} </span>
        </p>
        <p>
          شماره :{" "}
          <span className="font-medium">{formatPhone(customerNumber)} </span>
        </p>
      </div>
      <div className="my-4 border-b border-(--border-color) pb-4">
        <p>
          آدرس :<span className="font-medium"> {address} </span>
        </p>
      </div>
      <div className="flex flex-wrap gap-6 pb-2">
        <p>
          مبلغ :{" "}
          <span className="font-medium">{formatCurrency(totalPrice)} </span>
        </p>
        <p>
          هزینه ارسال :{" "}
          <span className="font-medium">{formatCurrency(shippingCost)} </span>
        </p>
        <p>
          سود شما از خرید :{" "}
          <span className="font-medium">{formatCurrency(totalDiscount)} </span>
        </p>
      </div>
    </div>
  );
}

export default OrderInformation;
