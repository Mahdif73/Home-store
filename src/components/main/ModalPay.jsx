import { createPortal } from "react-dom";
import { formatCurrency } from "../../utils/helpers";
import Button from "./Button";

function ModalPay({ onClose, onConfirm, totalPay, code }) {
  return createPortal(
    <>
      <div className="pointer-events-auto inset-0 fixed top-0 right-0 w-full h-full z-998 bg-[rgba(0, 0, 0, 0.6)] backdrop-blur-xs"></div>
      <div className="w-87.5 h-fit fixed top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-(--border-color-alt) transition delay-40 z-1000 border border-(--border-color)">
        <h3 className="pt-6 text-center font-semibold text-xl">
          تکمیل پرداخت{" "}
        </h3>
        <div className="gap-8 flex flex-col items-center justify-center text-base mb-4">
          <div className="mt-8 mb-4 2-125 gap-8 flex flex-col justify-center items-center bg-(--back-color-alt) w-70 pt-4 pb-6 px-6 rounded-2xl">
            <p className="text-base">
              کد سفارش :
              <span className="text-(--back-color) font-bold"> {code} </span>
            </p>
            <div className="">
              <p className="text-base text-center pb-4">مبلغ پرداختی :</p>
              <p className="text-xl text-(--back-color) font-bold">
                {formatCurrency(totalPay)}
              </p>
            </div>
          </div>
          <div className="flex gap-7 mb-4">
            <Button onClick={onConfirm} htmlType="pay">
              پرداخت آنلاین
            </Button>
            <Button onClick={onClose} htmlType="pay">
              بستن
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default ModalPay;
