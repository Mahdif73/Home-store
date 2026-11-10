import { useForm } from "react-hook-form";
import { useUser } from "../components/Authentication/useUser";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Button from "../components/main/Button";
import { useSignup } from "../components/Authentication/useSignup";
import PasswordInput from "../components/Authentication/PasswordInput";

function SignUp() {
  const { user } = useUser();
  const { signup, isPending, error } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  useEffect(function () {
    document.title = `ثبت نام حساب کاربری `;

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  useEffect(() => {
    if (error?.message === "User already registered") {
      toast.error("قبلا ثبت نام کرده اید");
    }
  }, [error]);

  if (user) {
    return <Navigate to="/" replace />;
  }

  function onSubmit({ fullName, email, phone, password }) {
    signup({ fullName, email, phone, password }, { onSettled: reset });
  }
  return (
    <section className="container mt-8 flex flex-col justify-center items-center">
      <form
        className="border border-(--border-color) rounded-2xl p-8 pt-1.5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center">
          <img className="w-25" src="./Home-store.png" alt="" />
        </div>
        <h3 className="mr-4 mb-4 text-lg">ثبت نام</h3>
        <div>
          <div className="signup-name mb-6 flex flex-col tex-xs text-(--back-color)">
            <input
              className="h-13.75 w-87.5 px-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) text-base"
              type="text"
              id="fullName"
              placeholder="نام و نام خانوادگی"
              label="نام و نام خانوادگی"
              disabled={isPending}
              {...register("fullName", {
                required: "نام و نام خانوادگی الزامی است",
              })}
            />
            <p className="pt-1.5 pr-4 text-xs">{errors?.fullName?.message}</p>
          </div>

          <div className="signup-email mb-6 flex flex-col tex-xs text-(--back-color)">
            <input
              className="h-13.75 w-87.5 px-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) text-base"
              type="email"
              id="email"
              placeholder="ایمیل"
              label="ایمیل"
              disabled={isPending}
              {...register("email", {
                required: "ایمیل الزامی است",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "ایمیل معتبر نیست",
                },
              })}
            />
            <p className="pt-1.5 pr-4 text-xs">{errors?.email?.message}</p>
          </div>

          <div className="signup-number mb-6 flex flex-col tex-xs text-(--back-color)">
            <input
              className="h-13.75 w-87.5 px-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) text-base"
              type="tel"
              id="phone"
              placeholder="شماره همراه"
              label="شماره همراه"
              disabled={isPending}
              {...register("phone", {
                required: "شماره همراه الزامی است",
                pattern: {
                  value: /^09[0-9]{9}$/,
                  message: "شماره همراه معتبر نیست",
                },
              })}
            />
            <p className="pt-1.5 pr-4 text-xs">{errors?.phone?.message}</p>
          </div>

          <div className=" mb-6 flex flex-col tex-xs text-(--back-color)">
            <PasswordInput
              register={register}
              name="password"
              id="password"
              inputClassName="h-13.75 w-87.5 px-4 border-0 outline-0 rounded-2xl text-(--text-color) bg-(--back-color-alt) text-base"
              errors={errors}
              errorNames={["password", "passwordConfirm"]}
              placeholder="رمز عبور"
              disabled={isPending}
              autoComplete="new-password"
              rules={{
                required: "رمز عبور الزامی است",
                minLength: {
                  value: 6,
                  message: "رمز عبور باید حداقل 6 کاراکتر باشد",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
                  message:
                    "رمز عبور باید شامل حروف بزرگ، حروف کوچک، عدد و کاراکتر خاص باشد",
                },
              }}
            />
          </div>

          <div className="mb-6 flex flex-col tex-xs text-(--back-color)">
            <PasswordInput
              register={register}
              name="passwordConfirm"
              id="passwordConfirm"
              inputClassName="h-13.75 w-87.5 px-4 border-0 outline-0 rounded-2xl text-(--text-color) bg-(--back-color-alt) text-base"
              errors={errors}
              errorNames={["password", "passwordConfirm"]}
              placeholder="تکرار رمز عبور"
              disabled={isPending}
              autoComplete="new-password"
              rules={{
                required: "تکرار رمز عبور الزامی است",
                validate: (value) =>
                  value === getValues().password ||
                  "رمز عبور با تکرار آن مطابقت ندارد",
              }}
            />
          </div>

          <Button htmlType="login" disabled={isPending} type="submit">
            {isPending ? "در حال ثبت نام..." : "ثبت نام"}
          </Button>
          <p className="text-center text-base">
            حساب کاربری دارید؟{" "}
            <Link className="text-(--back-color) font-bold" to="/login">
              ورود
            </Link>{" "}
            کنید.
          </p>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
