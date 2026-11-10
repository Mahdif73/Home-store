import { useEffect, useState } from "react";
import OrderComplete from "../components/Cart/OrderComplete";
import CompleteCheckout from "../components/Cart/CompleteCheckout";

function Checkout() {
  const [selectPay, setSelectPay] = useState("پرداخت درب منزل");

  useEffect(function () {
    document.title = "تکمیل خرید";

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  return (
    <main>
      <div className="container mt-10 grid-cols-2 xl:gap-x-4 text-(--text-color) xs:block lg:grid lg:grid-cols-[650px_340px] xl:grid-cols-[auto_340px] 2xl:grid-cols-[auto_auto] 2xl:justify-center">
        <CompleteCheckout selectPay={selectPay} setSelectPay={setSelectPay} />
        <OrderComplete selectPay={selectPay} />
      </div>
    </main>
  );
}

export default Checkout;
