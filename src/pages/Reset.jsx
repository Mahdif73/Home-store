import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useResetPassword } from "../components/Authentication/useResetPassword";
import NewsLetter from "../components/main/mainLayout/NewsLetter";
import Footer from "../components/main/mainLayout/Footer";
import Button from "../components/main/Button";
import PasswordInput from "../components/Authentication/PasswordInput";

function Reset() {
  useEffect(function () {
    document.title = ` بازیابی رمز عبور   `;

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  const { register, formState, getValues, handleSubmit, reset } = useForm({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });
  const { errors } = formState;

  const { updatePassword, isPending, error } = useResetPassword();

  useEffect(() => {
    if (
      error?.message ===
      "New password should be different from the old password."
    ) {
      toast.error("رمز جدید باید متفاوت از رمز قبلی باشد");
    }
  }, [error]);

  function onSubmit({ password }) {
    updatePassword(
      { password },
      { onSettled: () => reset(), onError: () => reset() },
    );
  }

  return (
    <>
      <section className="container mt-8 flex flex-col justify-center items-center">
        <form
          className="border border-(--border-color) rounded-2xl p-8 pt-1.5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center">
            <img className="w-25" src="./Home-store.png" alt="" />
          </div>
          <h3 className="mr-4 mb-4 text-lg">به روز رسانی رمز عبور </h3>
          <div>
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

            <div className="mb-4 flex flex-col tex-xs text-(--back-color)">
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
              {isPending ? "در حال ثبت ..." : "ثبت رمز جدید"}
            </Button>
          </div>
        </form>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Reset;
