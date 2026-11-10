import { Link } from "react-router-dom";
import { useUser } from "../Authentication/useUser";
import { HiOutlineUser } from "react-icons/hi2";
import Loader from "../Loading/Loader";
import ProfilePanel from "../Header/ProfilePanel";
import PanelLog from "./PanelLog";

function HeaderUser() {
  const { isAuthenticated, userLoading } = useUser();

  if (userLoading) return <Loader />;

  return isAuthenticated && !userLoading ? (
    <div className="relative group">
      <Link to="/profile" className="relative">
        <HiOutlineUser className="text-3xl text-(--text-color) hover:text-(--text-color-light)" />
      </Link>
      <ProfilePanel />
    </div>
  ) : (
    <PanelLog />
  );
}

export default HeaderUser;
