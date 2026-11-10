import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function PanelLog() {
  return (
    <div>
      <Link to="/login" className="flex justify-center items-center gap-1.25">
        <BiLogInCircle className="text-" />
        <p className="text-(--text-color) text-base">ورود | ثبت‌ نام</p>
      </Link>
    </div>
  );
}

export default PanelLog;
