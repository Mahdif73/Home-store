import { useEffect } from "react";
import OrderComplete from "../components/Cart/OrderComplete";
import CartItems from "../components/Cart/CartItems";

function Cart() {
  useEffect(function () {
    document.title = "سبد خرید";

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);
  return (
    <>
      <main>
        <div className="container mt-10 gap-x-6 xs:block lg:grid lg:grid-cols-[650px_340px] lg:justify-center xl:grid-cols-[auto_340px] 2xl:grid-cols-[auto_500px]">
          <CartItems />
          <OrderComplete />
        </div>
      </main>
    </>
  );
}

export default Cart;
