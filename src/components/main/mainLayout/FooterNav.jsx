import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { PiBrandy } from "react-icons/pi";
import { Link } from "react-router-dom";
import { faDigitsNum } from "../../../utils/helpers";
import { useCount } from "../../../hooks/useCount";
import Modal from "../Modal";
import { BiCategory } from "react-icons/bi";
import Panel from "../../Nav/Panel";
function FooterNav() {
  const { getTotalCartQuantity, cartLoader } = useCount();
  return (
    <>
      <div className=" border-t border-t-(--border-color) fixed bottom-0 left-0 w-full h-20 z-99 bg-(--body-color) lg:hidden">
        <ul className="pt-4 flex justify-center gap-12 sm:gap-15 md:gap-26">
          <Link to={"/"}>
            <li className="relative flex flex-col items-center gap-y-1 text-base text-(--text-color) cursor-pointer hover:text-(--border-color)">
              <HiOutlineHome className="text-xl" />

              <p>خانه </p>
            </li>
          </Link>
          <li className="relative flex flex-col items-center gap-y-1 text-base text-(--text-color) cursor-pointer hover:text-(--border-color)">
            <Modal>
              <Modal.Open opens="category-modal">
                <div className="flex flex-col items-center">
                  <BiCategory className="text-xl" />
                  <p className="pt-1">دسته بندی ها</p>
                </div>
              </Modal.Open>
              <Modal.Window name="category-modal">
                <Panel mobileMode={true} />
              </Modal.Window>
            </Modal>
          </li>

          <Link to={"/brands"}>
            <li className="relative flex flex-col items-center gap-y-1 text-base text-(--text-color) cursor-pointer hover:text-(--border-color)">
              <PiBrandy className="text-xl" />
              <p>برند ها</p>
            </li>
          </Link>
          <Link to={"/cart"}>
            <li className="relative flex flex-col items-center gap-y-1 text-base text-(--text-color) cursor-pointer hover:text-(--border-color)">
              <HiOutlineShoppingCart className="text-xl" />
              {cartLoader && (
                <span className="absolute -top-1 right-1.25 bg-(--back-color) text-(--body-color) h-5 w-5 leading-3.75 rounded-[50%] text-center pt-1.25 text-sm">
                  ...
                </span>
              )}
              {getTotalCartQuantity && (
                <span className="absolute -top-1 right-1.25 bg-(--back-color) text-(--body-color) h-5 w-5 leading-3.75 rounded-[50%] text-center pt-1.25 text-sm">
                  {faDigitsNum(getTotalCartQuantity)}
                </span>
              )}
              <p>سبد خرید </p>
            </li>
          </Link>
          <Link to={"/profile"}>
            <li className="relative flex flex-col items-center gap-y-1 text-base text-(--text-color) cursor-pointer hover:text-(--border-color)">
              <HiOutlineUser className="text-xl" />
              <p> پروفایل </p>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default FooterNav;
