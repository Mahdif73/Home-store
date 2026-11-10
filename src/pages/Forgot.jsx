import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRecovery } from "../components/Authentication/useRecovery";
import Button from "../components/main/Button";

function Forgot() {
  const [email, setEmail] = useState("kir@gmail.com");
  const { recovery, isPending } = useRecovery();

  useEffect(function () {
    document.title = `   فراموشی رمز عبور `;

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email)
      return toast.error("ایمیل خود را جهت بازیابی رمز عبور وارد نمائید");
    recovery({ email });
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
        <h3 className="mr-4 mb-4">ایمیل خود را وارد نمایید</h3>
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

          <Button type="submit" htmlType="login">
            {!isPending ? "ارسال " : "..."}
          </Button>
          <p className="login-paragraph"></p>
        </div>
      </form>
    </section>
  );
}

export default Forgot;
