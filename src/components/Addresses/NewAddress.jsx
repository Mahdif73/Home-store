import { useForm } from "react-hook-form";
import { useUser } from "../Authentication/useUser";
import { useCreateAddress } from "./useCreateAddress";
import { useEditAddress } from "./useEditAddress";
import Button from "../main/Button";

function NewAddress({ onClose, editingAddress = {} }) {
  const { user } = useUser();

  const { createAddress, isPending } = useCreateAddress();
  const { editAddress, isEditing } = useEditAddress();

  const isWorking = isPending || isEditing;
  const { id, ...editValues } = editingAddress ?? {};
  const edit = Boolean(id);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: edit
      ? editValues
      : {
          customerName: user?.user_metadata?.fullName || "",
          phone: user?.user_metadata?.phone || "",
        },
  });

  const { errors } = formState;

  function onSubmit(data) {
    if (edit)
      editAddress(
        { newAddressData: data, id },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        },
      );
    else
      createAddress(
        { ...data, user_id: user?.id },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        },
      );
  }

  function onError() {}

  return (
    <form
      className="bg-(--body-color) p-8"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="pt-2 grid grid-rows-1 justify-center md:grid-rows-2 ">
        <div className="flex justify-center gap-x-12 xs:flex-col md:flex-row">
          <div className="flex flex-col items-start pt-4">
            <label
              className="text-base font-bold pb-3 pr-2 hover:(--text-color)"
              htmlFor="state"
            >
              استان
            </label>
            <input
              className="bg-(--back-color-alt)  text-(--text-color) h-12 w-37.5 px-4"
              type="text"
              id="state"
              disabled={isWorking}
              {...register("state", {
                required: "نام استان رو وارد نمائید",
              })}
            />
            <p className="pt-2 text-sm text-(--text-color-light)">
              {errors?.state?.message}
            </p>
          </div>
          <div className="flex flex-col items-start pt-4">
            <label
              className="text-base font-bold pb-3 pr-2 hover:(--text-color)"
              htmlFor="city"
            >
              شهر
            </label>
            <input
              className="bg-(--back-color-alt)  text-(--text-color) h-12 w-37.5 px-4"
              type="text"
              id="city"
              {...register("city", {
                required: "نام شهر خود را وارد نمائید",
              })}
            />
            <p className="pt-2 text-sm text-(--text-color-light)">
              {errors?.city?.message}
            </p>
          </div>
          <div className="flex flex-col items-start pt-4">
            <label
              className="text-base font-bold pb-3 pr-2 hover:(--text-color)"
              htmlFor="postCode"
            >
              کد پستی
            </label>
            <input
              className="bg-(--back-color-alt)  text-(--text-color) h-12 w-37.5 px-4"
              type="text"
              id="postCode"
              {...register("postCode", {
                required: "کد پستی خود را وارد نمائید",
              })}
            />
            <p className="pt-2 text-sm text-(--text-color-light)">
              {errors?.postCode?.message}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-x-12 xs:flex-col md:flex-row">
          <div className="flex flex-col items-start pt-4">
            <label
              className="text-base font-bold pb-3 pr-2 hover:(--text-color)"
              htmlFor="state"
            >
              نام خریدار
            </label>
            <input
              className="bg-(--back-color-alt) text-(--text-color) h-12 w-37.5 px-4"
              type="text"
              id="customerName"
              disabled={isWorking}
              {...register("customerName", {
                required: "نام خریدار رو وارد نمائید",
              })}
            />
            <p className="pt-2 text-sm text-(--text-color-light)">
              {errors?.customerName?.message}
            </p>
          </div>

          <div className="flex flex-col items-start pt-4">
            <label
              className="text-base font-bold pb-3 pr-2 hover:(--text-color)"
              htmlFor="postCode"
            >
              شماره همراه
            </label>
            <input
              className="bg-(--back-color-alt)  text-(--text-color) h-12 w-37.5 px-4"
              type="tel"
              id="phone"
              {...register("phone", {
                required: "شماره همراه خود را وارد نمائید",
              })}
            />
            <p className="pt-2 text-sm text-(--text-color-light)">
              {errors?.phone?.message}
            </p>
          </div>
        </div>
        <div className="new-description">
          <div className="flex flex-col items-start pt-4">
            <label
              className="text-base font-bold pb-3 pr-2 hover:(--text-color)"
              htmlFor="address"
            >
              آدرس
            </label>
            <input
              className="bg-(--back-color-alt) px-4 xs:h-17.5 xs:w-87.5 sm:w-117.5 md:w-162.5 lg:w-200 xl:w-175"
              type="text"
              id="address"
              {...register("address", {
                required: "آدرس خود را وارد نمائید",
              })}
            />
            <p>{errors?.address?.message}</p>
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-center gap-8">
        <Button type="submit" htmlType="address" disabled={isWorking}>
          ثبت آدرس
        </Button>
        <button
          className="w-37.5 bg-(--text-color) text-(--body-color) text-base p-3 rounded-[7px]"
          type="reset"
          onClick={() => onClose?.()}
        >
          انصراف
        </button>
      </div>
    </form>
  );
}

export default NewAddress;
