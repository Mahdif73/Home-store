import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../main/Button";
import { useResetPassword } from "../Authentication/useResetPassword";
import PasswordInput from "../Authentication/PasswordInput";

function UpdatePassword() {
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
      toast.error("رمز جدید باید از رمز قبلی متفاوت باشد");
    }
  }, [error]);

  function onSubmit({ password }) {
    updatePassword(
      { password },
      { onSettled: () => reset(), onError: () => reset() },
    );
  }
  return (
    <div className="border-x border-(--border-color) border-t rounded-t-2xl mb-4">
      <h3 className="bg-(--container-color) border-b border-(--border-color) pt-2 pb-3 pr-4 sx:pr-8">
        رمز عبور کاربر
      </h3>
      <div className="border-b border-(--border-color)">
        <form
          className="pt-4 justify-between items-end px-4 pb-4 gap-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="pt-4 pb-8">
            <div className="flex flex-row justify-start items-center mb-8 xs:text-sm sm:text-base">
              <label className="text-sm sm:w-35" htmlFor="">
                رمز عبور
              </label>
              <div>
                <PasswordInput
                  register={register}
                  name="password"
                  id="password"
                  errors={errors}
                  inputClassName="px-2 w-62.5 h-11.25 bg-(--body-color) rounded-2xl outline-0 border-0 cursor-pointer font-(--Vazirmatn) xs:w-50 sm:w-62.5 md:flex"
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
            </div>
            <div className="flex flex-row justify-start items-center mb-8 xs:text-sm sm:text-base">
              <label className="text-sm sm:w-35"> تکرار رمز عبور </label>
              <div>
                <PasswordInput
                  register={register}
                  name="passwordConfirm"
                  id="passwordConfirm"
                  errors={errors}
                  inputClassName="px-2 w-62.5 h-11.25 bg-(--body-color) rounded-2xl outline-0 border-0 cursor-pointer font-(--Vazirmatn) xs:w-50 sm:w-62.5 md:flex"
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
            </div>
          </div>
          <Button htmlType="edit" typ="submit" disabled={isPending}>
            ذخیره ویرایش
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;

{
  /* <input
                  className="px-2 w-62.5 h-11.25 bg-(--body-color) rounded-2xl outline-0 border-0 cursor-pointer font-(--Vazirmatn) xs:w-50 sm:w-62.5 md:flex"
                  type="password"
                  id="password"
                  autoComplete="password"
                  disabled={isPending}
                  {...register("password", {
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
                  })}
                />
                <p className="text-xs text-(--back-color) pr-0 pt-1.5">
                  {errors?.password?.message}
                </p> */
}

{
  /* <input
                  className="px-2 w-62.5 h-11.25 bg-(--body-color) rounded-2xl outline-0 border-0 cursor-pointer font-(--Vazirmatn) xs:w-50 sm:w-62.5 md:flex"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  disabled={isPending}
                  {...register("passwordConfirm", {
                    required: "تکرار رمز عبور الزامی است",
                    validate: (value) =>
                      value === getValues().password ||
                      "رمز عبور با تکرار آن مطابقت ندارد",
                  })}
                />
                <p className="text-xs text-(--back-color) pr-0 pt-1.5">
                  {errors?.passwordConfirm?.message}
                </p> */
}
