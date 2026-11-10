import { NavLink } from "react-router-dom";
import Panel from "./Panel";
import { BiCategory } from "react-icons/bi";

function Nav() {
  return (
    <nav className="sticky top-25 z-901 bg-(--body-color) border-b border-b-(--border-color) pt-2 h-10 visible xs:hidden lg:block">
      <ul className="container ml-auto flex items-center font-bold gap-x-4 xs:justify-center lg:justify-start">
        <li className="relative group">
          <div className="flex items-center">
            <span className="text-lg pl-1">
              <BiCategory />
            </span>
            <p> دسته بندی ها</p>
          </div>
          <Panel />
        </li>
        <li>
          <NavLink to={"/brands"} className="opacity-60">
            برندها
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="opacity-60">
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="opacity-60">
            تماس با ما
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
