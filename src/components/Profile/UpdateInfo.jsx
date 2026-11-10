import { useForm } from "react-hook-form";
import { useUser } from "../Authentication/useUser";
import { useEffect } from "react";
import Button from "../main/Button";
import { useUpdateUser } from "../Authentication/useUpdateUser";
import Modal from "../main/Modal";
import ModalQuestion from "../main/ModalQuestion";

function UpdateInfo() {
  const { user } = useUser();

  const { fullName, phone } = user?.user_metadata || {};

  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues: { fullName, phone },
  });
  const { errors } = formState;

  const { updateUser, isPending } = useUpdateUser();

  function onSubmit({ fullName, phone, password }) {
    updateUser({ fullName, phone, password }, { onSettled: () => reset });
  }

  useEffect(
    function () {
      if (!fullName) return;
      document.title = `پروفایل ${fullName} `;

      return () => {
        document.title = "فروشگاه هوم استور";
      };
    },
    [fullName],
  );

  return (
    <div className="border-x border-(--border-color) border-t rounded-t-2xl mb-4">
      <h3 className="bg-(--container-color) border-b border-(--border-color) pt-2 pb-3 pr-4 sx:pr-8">
        اطلاعات حساب
      </h3>
      <div className="border-b border-(--border-color)">
        <form
          className="pt-4 justify-between items-end px-4 pb-4 gap-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="pt-4 pb-8">
            <div className="flex flex-row justify-start items-center mb-8 xs:text-sm sm:text-base">
              <label className="text-sm sm:w-35" htmlFor="">
                نام و نام خانوادگی
              </label>
              <div>
                <input
                  className="px-2 w-62.5 h-11.25 bg-(--body-color) rounded-2xl outline-0 border-0 cursor-pointer font-(--Vazirmatn) xs:w-50 sm:w-62.5 md:flex"
                  type="text"
                  id="fullName"
                  label="نام و نام خانوادگی"
                  disabled={isPending}
                  {...register("fullName", {
                    required: "نام و نام خانوادگی الزامی است",
                  })}
                />
                <p className="text-xs text-(--back-color) pr-0 pt-1.5">
                  {errors?.fullName?.message}
                </p>
              </div>{" "}
            </div>

            <div className="flex flex-row justify-start items-center mb-0 xs:text-sm sm:text-base">
              <label className="text-sm sm:w-35">شماره همراه </label>
              <div>
                <input
                  className="px-2 w-62.5 h-11.25 bg-(--body-color) rounded-2xl outline-0 border-0 cursor-pointer font-(--Vazirmatn) xs:w-50 sm:w-62.5 md:flex"
                  type="tel"
                  id="phone"
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
                <p className="text-xs text-(--back-color) pr-0 pt-1.5">
                  {errors?.phone?.message}
                </p>
              </div>
            </div>
          </div>

          <Modal>
            <Modal.Open>
              <Button htmlType="edit" type="button" disabled={isPending}>
                ذخیره ویرایش
              </Button>
            </Modal.Open>
            <Modal.Window>
              <ModalQuestion
                name="ذخیره تغییرات حساب کاربری"
                disabled={isPending}
                button="ویرایش"
                onConfirm={handleSubmit(onSubmit)}
              />
            </Modal.Window>
          </Modal>
        </form>
      </div>
    </div>
  );
}

export default UpdateInfo;
