import { useEffect, useState } from "react";
import { useUser } from "../components/Authentication/useUser";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/main/Button";
import { useLogin } from "../components/Authentication/useLogin";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

function Login() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(function () {
    document.title = `ورود به حساب کاربری `;

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  const [email, setEmail] = useState("first@gmail.com");
  const [password, setPassword] = useState("@Ww12345");
  const { login, isPending } = useLogin();
  const [visible, setVisible] = useState(false);

  if (user) {
    return <Navigate to="/" replace />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) return;
    login({ email, password });
  }
  return (
    <section className="container mt-16 flex flex-col justify-center items-center">
      <form
        className="border border-(--border-color) rounded-2xl p-8 pt-1.5"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <img className="w-25" src="./Home-store.png" alt="" />
        </div>
        <h3 className="mr-4 mb-4">ورود</h3>
        <div>
          <div className="mb-6">
            <input
              className="h-13.75 w-87.5 px-4 border-0 outline-0 rounded-2xl text-(--text-color) bg-(--back-color-alt) text-base"
              type="email"
              label="ایمیل"
              value={email}
              disabled={isPending}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-sm flex flex-col text-(--back-color)">
            <div className="relative w-fit">
              <input
                className="h-13.75 w-87.5 px-4 border-0 outline-0 rounded-2xl text-(--text-color) bg-(--back-color-alt) text-base"
                type={visible ? "text" : "password"}
                label="رمز عبور"
                value={password}
                disabled={isPending}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                onClick={() => setVisible((vis) => !vis)}
                htmlType="login_password"
                aria={visible ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
              >
                {visible ? <HiEyeSlash /> : <HiEye />}
              </Button>
              <p
                className="pt-2 pr-2 text-xs cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                رمز خود را فراموش کرده اید؟
              </p>
            </div>
          </div>

          <Button type="submit" htmlType="login">
            {!isPending ? "ورود" : "در حال ورود..."}
          </Button>
          <p className="text-center text-base">
            حساب کاربری ندارید؟
            <Link className="text-(--back-color) font-bold" to="/signup">
              ثبت نام
            </Link>{" "}
            کنید.
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
