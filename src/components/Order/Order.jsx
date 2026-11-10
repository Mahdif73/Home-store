import { ButtonBack } from "../../hooks/ButtonBack";
import { useState } from "react";
import OrderSkeleton from "../Loading/OrderSkeleton";
import Button from "../main/Button";
import ModalPay from "../main/ModalPay";
import Modal from "../main/Modal";
import ModalQuestion from "../main/ModalQuestion";
import { useOrder } from "./useOrder";
import { useOnlinePay } from "./useOnlinePay";
import { useDeliver } from "./useDeliver";
import OrderInformation from "./OrderInformation";
import OrderItem from "./OrderItem";

function Order() {
  const [showPay, setShowPay] = useState(false);
  const { order, isLoading } = useOrder();
  const { payOnline } = useOnlinePay();
  const { orderDeliver, isDeliver } = useDeliver();

  if (isLoading) return <OrderSkeleton />;

  return (
    <>
      <section className="container my-20">
        <div className="flex justify-between items-start ">
          <h2 className="pr-10 mb-4 text-2xl font-bold">جزئیات سفارش</h2>
          <ButtonBack />
        </div>

        {order?.payStatus === "در انتظار پرداخت" && (
          <div className="mt-4 flex gap-4 bg-(--border-color-alt) px-4 rounded-2xl w-95">
            <p>آیا مایل به پرداخت آنلاین هستید؟</p>
            <Button htmlType="agree" onClick={() => setShowPay(true)}>
              پرداخت آنلاین
            </Button>
          </div>
        )}
        {showPay && (
          <ModalPay
            code={order?.order_code}
            totalPay={order?.totalPrice}
            onClose={() => setShowPay(false)}
            onConfirm={() => {
              payOnline(order?.id);
              setShowPay(false);
            }}
          />
        )}
        {order?.payStatus === "پرداخت شد" &&
          order?.orderStatus === "در انتظار تحویل" && (
            <div className="mt-4 flex gap-4 bg-(--border-color-alt) px-4 rounded-2xl w-109">
              <p>آیا سفارش خود را تحویل گرفته اید؟</p>
              <Modal>
                <Modal.Open>
                  <Button htmlType="agree"> تایید تحویل گرفتن سفارش </Button>
                </Modal.Open>
                <Modal.Window>
                  <ModalQuestion
                    name="تایید تحویل گرفتن سفارش "
                    disabled={isDeliver}
                    button="تحویل گرفتم"
                    onConfirm={() => orderDeliver(order?.id)}
                  />
                </Modal.Window>
              </Modal>
            </div>
          )}

        <div className="py-5">
          <div className="border border-(--border-color) border-b-0 rounded-t-2xl">
            <OrderInformation order={order} />
            <div className="border-t border-(--border-color)">
              {order?.items?.map((item, index) => (
                <OrderItem item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Order;
