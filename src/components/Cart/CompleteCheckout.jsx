import { ButtonBack } from "../../hooks/ButtonBack";
import { useAddress } from "../Addresses/useAddress";
import { Link } from "react-router-dom";
import ShowAddress from "./ShowAddress";
import CompleteCheckoutSkeleton from "../Loading/CompleteCheckoutSkeleton";

function CompleteCheckout({ selectPay, setSelectPay }) {
  const { address, isLoading } = useAddress();

  function handlePay(pay) {
    setSelectPay(pay);
  }

  if (isLoading) return <CompleteCheckoutSkeleton />;

  return (
    <div className="xs:w-97.5 xs:mb-10 sm:w-137.5 md:w-182.5 lg:w-155 xl:w-195 xl:mb-0">
      <section className="bg-(--border-color-alt) rounded-2xl p-8">
        <div className="flex justify-between items-start ">
          <h3 className="py-0 px-6">مشخصات گیرنده</h3>
          <ButtonBack />
        </div>

        <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2">
          {address &&
            address.map((add) => <ShowAddress key={add.id} address={add} />)}

          <div className="bg-(--body-color) text-(--text-color) rounded-2xl min-w-20 p-4 text-base flex justify-center items-center">
            <Link to="/profile/addresses">مدیریت آدرس ها</Link>
          </div>
        </div>
      </section>

      <section className="bg-(--border-color-alt) rounded-2xl p-8 mt-8">
        <h3 className="pt-0 px-8 mb-6">نوع پرداخت</h3>

        <div className="flex pr-4 gap-8">
          <div className="relative cursor-pointer pl-8">
            <label className="relative cursor-pointer group " htmlFor="pay1">
              پرداخت درب منزل
              <input
                className="absolute opacity-0 peer "
                type="radio"
                name="sender"
                id="pay1"
                value="پرداخت درب منزل"
                checked={selectPay === "پرداخت درب منزل"}
                onChange={(e) => handlePay(e.target.value)}
              />
              <span className="border border-(--border-color) mr-8 absolute right-[70%] top-[50%] translate-x-[-50%] translate-y-[-50%]  h-6.25 w-6.25 bg-(--body-color) rounded-[50%] peer-checked:bg-(--text-color) group-hover:bg-(--text-color-light)"></span>
            </label>
          </div>
          <div className="relative cursor-pointer pl-8">
            <label className="relative cursor-pointer group" htmlFor="pay2">
              پرداخت آنلاین
              <input
                className="absolute opacity-0 peer "
                type="radio"
                name="sender"
                id="pay2"
                value="پرداخت آنلاین"
                checked={selectPay === "پرداخت آنلاین"}
                onChange={(e) => handlePay(e.target.value)}
              />
              <span className="border border-(--border-color) mr-8 absolute right-[70%] top-[50%] translate-x-[-50%] translate-y-[-50%]  h-6.25 w-6.25 bg-(--body-color) rounded-[50%] peer-checked:bg-(--text-color) group-hover:bg-(--text-color-light)"></span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompleteCheckout;
