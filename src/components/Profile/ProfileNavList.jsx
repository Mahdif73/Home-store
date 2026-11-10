import { NavLink } from "react-router-dom";
import Modal from "../main/Modal";
import Button from "../main/Button";
import { useLogout } from "../Authentication/useLogout";
import ModalQuestion from "../main/ModalQuestion";

const tabClass = ({ isActive }) =>
  `text-(--text-color) h-13.5 py-4 text-xs flex justify-center items-center sm:text-sm sm:h-16 md:text-base  ${
    isActive ? "bg-(--border-color) text-(--back-color)" : ""
  }`;

function ProfileNavList() {
  const { logout, isPending } = useLogout();
  return (
    <ul className="mt-8 bg-(--border-color-alt) grid grid-cols-[1fr_0.5fr_0.5fr_1fr_0.5fr_0.5fr] border border-(--border-color) mb-4 h-13.5 text-center rounded-t-2xl sm:h-16 lg:hidden">
      <li>
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${
              isActive ? "rounded-tr-2xl" : ""
            } hover:bg-(--back-color-alt) hover:rounded-tr-2xl`
          }
        >
          <p>مشخصات پروفایل</p>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="orders"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${
              isActive ? "bg-(--border-color) text-(--back-color)" : ""
            } hover:bg-(--back-color-alt)`
          }
        >
          <p>سفارشات</p>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="addresses"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${
              isActive ? "bg-(--border-color) text-(--back-color)" : ""
            } hover:bg-(--back-color-alt)`
          }
        >
          <p>آدرس ها</p>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="favorites"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${
              isActive ? "bg-(--border-color) text-(--back-color)" : ""
            } hover:bg-(--back-color-alt)`
          }
        >
          <p>لیست علاقه مندی ها</p>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="comments"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${
              isActive ? "bg-(--border-color) text-(--back-color)" : ""
            } hover:bg-(--back-color-alt)`
          }
        >
          <p>نظرات کاربر</p>
        </NavLink>
      </li>
      <li>
        <div className="flex h-13.5 py-4 items-center justify-center  text-(--text-color) sm:h-16 hover:bg-(--back-color-alt) hover:rounded-tl-2xl">
          <Modal>
            <Modal.Open>
              <Button
                disabled={isPending}
                onClick={logout}
                htmlType="nav_account"
              >
                خروج
              </Button>
            </Modal.Open>
            <Modal.Window>
              <ModalQuestion
                name="خروج از حساب کاربری"
                disabled={isPending}
                button="خروج"
                onConfirm={logout}
              />
            </Modal.Window>
          </Modal>
        </div>
      </li>
    </ul>
  );
}

export default ProfileNavList;
