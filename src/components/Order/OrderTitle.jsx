import { Link } from "react-router-dom";
import { created } from "../../hooks/created";
import { faDigitsNum, formatCurrency } from "../../utils/helpers";

function OrderTitle({ order }) {
  const { payWay, totalPrice, created_at, order_code, orderStatus, payStatus } =
    order;
  const payStatusStyles = {
    "پرداخت شد": "bg-(--back-color) text-(--back-color-alt)",
    "در انتظار پرداخت": "bg-(--back-color-alt) text-(--back-color)",
  };
  const orderStatusStyles = {
    "تحویل داده شد": "bg-(--border-color) text-(--body-color)",
    "در انتظار تحویل": "bg-(--body-color) text-(--border-color)",
  };
  const badgeClass =
    "w-fit rounded-2xl px-[0.6rem] py-[0.1rem] text-sm font-medium";

  return (
    <div className="mt-5 mr-6 md:mr-8">
      <h3>نحوه پرداخت : {payWay} </h3>
      <div className="py-8 flex flex-col flex-wrap gap-x-8 gap-y-3 sm:flex-row">
        <div className="flex flex-col gap-x-8 gap-y-3 sm:flex-row">
          <p className="sm:text-base">{faDigitsNum(created(created_at))}</p>
          <p className="sm:text-base">
            کد سفارش : <span className="font-bold">{order_code}</span>
          </p>
          <p className="sm:text-base">
            مبلغ :{" "}
            <span className="font-bold">{formatCurrency(totalPrice)} </span>
          </p>
        </div>

        <div className="flex flex-col gap-x-8 gap-y-3 sm:flex-row">
          <p className="sm:text-base">
            وضعیت پرداخت :{" "}
            <span className={`${badgeClass} ${payStatusStyles[payStatus]}`}>
              {payStatus}
            </span>
          </p>
          <p className="sm:text-base">
            وضعیت سفارش :{" "}
            <span className={`${badgeClass} ${orderStatusStyles[orderStatus]}`}>
              {orderStatus}
            </span>
          </p>
        </div>

        <Link
          to={`/order/${order.id}`}
          className="text-sm text-(--back-color) ml-2 md:pr-8"
        >
          جزییات سفارش
        </Link>
      </div>
    </div>
  );
}

export default OrderTitle;
