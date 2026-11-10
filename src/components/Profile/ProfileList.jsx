import { FaAddressCard, FaUser } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiOrderPlayFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useLogout } from "../Authentication/useLogout";
import { MdFavorite, MdRateReview } from "react-icons/md";
import Modal from "../main/Modal";
import Button from "../main/Button";
import { BiExit } from "react-icons/bi";
import ModalQuestion from "../main/ModalQuestion";
import { useUser } from "../Authentication/useUser";

const tabClass = ({ isActive }) =>
  `border-b border-(--border-color) text-base min-w-50 py-4 px-8 flex items-center cursor-pointer gap-8  hover:bg-(--back-color-alt)  ${isActive ? "bg-(--border-color) text-(--back-color)" : ""}`;
function ProfileList() {
  const { user } = useUser();

  const { logout, isPending } = useLogout();

  // if (isPending) return <ProfileSkeleton />;

  const email = user?.email;
  return (
    <ul className="account-tabs text-(--text-color)">
      <li className="border-b border-(--border-color) text-base min-w-50 py-4 px-8 flex items-center cursor-pointer gap-8 hover:rounded-t-4xl hover:bg-(--back-color-alt) hover:(--text-color)">
        <FaUser className="text-base" />
        <p> {email} </p>
      </li>
      <li>
        <NavLink
          to="/profile/dashboard"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${isActive ? "bg-(--border-color) text-(--back-color)" : ""} hover:bg-(--back-color-alt)`
          }
        >
          <ImProfile />
          <p>مشخصات پروفایل</p>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/profile/orders"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${isActive ? "bg-(--border-color) text-(--back-color)" : ""} hover:bg-(--back-color-alt)`
          }
        >
          <RiOrderPlayFill />
          <p>سفارشات</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/addresses"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${isActive ? "bg-(--border-color) text-(--back-color)" : ""} hover:bg-(--back-color-alt)`
          }
        >
          <FaAddressCard />
          <p>آدرس ها</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/favorites"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${isActive ? "bg-(--border-color) text-(--back-color)" : ""} hover:bg-(--back-color-alt)`
          }
        >
          <MdFavorite />
          <p> لیست علاقه مندی ها </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/comments"
          className={({ isActive }) =>
            `${tabClass({ isActive })} ${isActive ? "bg-(--border-color) text-(--back-color)" : ""} hover:bg-(--back-color-alt)`
          }
        >
          <MdRateReview />
          <p> نظرات کاربر </p>
        </NavLink>
      </li>

      <li>
        <div className="border-(--border-color) text-(--text-color) text-base min-w-50 py-4 px-8 flex items-center cursor-pointer gap-8 hover:rounded-b-4xl hover:bg-(--back-color-alt) hover:(--text-color) border-b-0">
          <Modal>
            <Modal.Open>
              <Button htmlType="account">
                <BiExit />
                {isPending ? "در حال خروج..." : "خروج از حساب کاربری"}
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

export default ProfileList;
