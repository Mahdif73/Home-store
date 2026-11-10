import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { faDigitsNum } from "../../utils/helpers";
import HeaderContainer from "./HeaderContainer";
import Search from "./Search";
import { useCount } from "../../hooks/useCount";
import CartPanel from "./CartPanel";
import HeaderUser from "../Profile/HeaderUser";

function Header() {
  const location = useLocation();
  const { getTotalCartQuantity, cartLoader } = useCount();
  return (
    <header className="sticky top-0 z-902">
      <HeaderContainer />
      <div className="bg-(--body-color) xs:pt-4 lg:pt-0">
        <div className="container flex items-center xs:flex-wrap xs:justify-around xs:gap-x-6 xs:gap-32 md:gap-y-4 md:gap-x-16 lg:justify-between lg:px-2">
          <div className="xs:hidden lg:flex lg:flex-nowrap lg:justify-between lg:items-center lg:my-2">
            <Link to="/">
              <img
                src="/Home-store.png"
                className="cursor-pointer w-21 h-19"
                alt=""
              />
            </Link>
          </div>
          <Search key={location.pathname} />
          <div className="gap-x-6 pt-4 xs:hidden lg:flex lg:order-3">
            <div className="relative group">
              <Link to="/cart" className="relative ">
                <HiOutlineShoppingCart className="text-3xl text-(--text-color) hover:text-(--text-color-light)" />
                {cartLoader && (
                  <span className="absolute -top-3 -right-2.5 bg-(--back-color) text-(--body-color) h-6.25 w-6.25 leading-4.5 rounded-[50%] text-center pt-1.2 text-base">
                    ...
                  </span>
                )}
                {getTotalCartQuantity && (
                  <span className="absolute -top-3 -right-2.5 bg-(--back-color) text-(--body-color) h-6.25 w-6.25 leading-4.5 rounded-[50%] text-center pt-1.25 text-base">
                    {faDigitsNum(getTotalCartQuantity)}
                  </span>
                )}
              </Link>
              <CartPanel />
            </div>
            <HeaderUser />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
