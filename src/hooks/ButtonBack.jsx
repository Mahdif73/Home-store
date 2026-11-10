import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function ButtonBack() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="flex items-center mb-2 hover:text-(--border-color)"
    >
      <BsArrowRight className="text-lg text-(--text-color) m-2 hover:text-(--border-color)" />
      <p className="text-sm pr-2 ">بازگشت به صفحه ی قبل</p>
    </div>
  );
}
