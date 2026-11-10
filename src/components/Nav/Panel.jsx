import { useState } from "react";
import { Link } from "react-router-dom";
import { useMenus } from "./useMenus";

function Panel({ mobileMode = false }) {
  const { menus } = useMenus();

  const [activeMenu, setActiveMenu] = useState(menus?.[0]?.key);

  if (!menus) return null;
  const active = menus.find((menu) => menu.key === activeMenu);
  return (
    <div
      className={` ${mobileMode ? "relative opacity-100 visible w-105!" : "absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible h-92.5"} text-(--text-color) bg-(--border-color-alt) flex justify-between rounded-[1.25rem_0_1.25rem_1.25rem]  `}
    >
      <div className={`${mobileMode ? "w-50 h-175" : "w-37.5"} text-center `}>
        <ul>
          {menus.map((menu) => (
            <li
              key={menu.key}
              onMouseEnter={() => setActiveMenu(menu.key)}
              className={` ${mobileMode ? "border-0 rounded-none" : "border last:rounded-[0_0_1rem_0]"} px-4 py-6 border-(--border-color) text-(--text-color-light) transition delay-25 hover:border hover:border-(--border-color) hover:text-(--back-color) `}
            >
              {menu.title}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={` ${mobileMode ? "h-175 xs:w-57.5 sm:w-[320px] md:w-120 overflow-y-auto" : "w-175 overflow-x-auto overflow-y-hidden"} `}
      >
        {active && (
          <ul
            className={` ${mobileMode ? "py-5 px-4" : "h-full columns-[160px] gap-0 [column-fill:auto] py-5 px-4"} first-of-type:[&>li:first-child>a]:font-semibold first-of-type:[&>li:first-child>a]:text-(--text-color) `}
          >
            {active.items.map((item, index) => (
              <li
                key={index}
                className=" break-inside-avoid pb-4 text-(--text-color-light) text-[.95rem] font-normal hover:text-(--text-color) hover:font-medium "
              >
                <Link className="flex justify-center py-2" to={item.route}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Panel;
