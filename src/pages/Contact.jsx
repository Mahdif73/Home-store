import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  PiInstagramLogo,
  PiTelegramLogo,
  PiWhatsappLogo,
} from "react-icons/pi";
import { useSendContact } from "../components/Contact/useSendContact";
import Button from "../components/main/Button";

function Contact() {
  useEffect(function () {
    document.title = `تماس با ما `;

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);
  const { mutate, isPending } = useSendContact();

  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ fullName, phone, email, subject, message }) {
    mutate({ fullName, phone, email, subject, message }, { onSettled: reset });
  }

  return (
    <section className="container mt-8 border border-(--border-color-alt) rounded-2xl bg-(--body-color)">
      <div className="flex justify-center gap-8 my-8 pr-8 xs:flex-col md:flex-row md:items-start md:gap-4 md:px-8 lg:gap-12">
        <form
          className="w-90 text-sm xl:w-105"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-base mr-4 mb-4">تماس با ما</h3>
          <div>
            <input
              className="h-13.75 w-[320px] px-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) lg:w-90 xl:w-100"
              type="text"
              id="fullName"
              label="نام و نام خانوادگی"
              placeholder="نام و نام خانوادگی"
              disabled={isPending}
              {...register("fullName", {
                required: "نام و نام خانوادگی الزامی است",
              })}
            />
            <p className="text-(--back-color) mb-4 pr-1.5 pt-1.5">
              {errors?.fullName?.message}
            </p>
          </div>

          <div>
            <input
              className="h-13.75 w-[320px] px-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) lg:w-90 xl:w-100"
              type="tel"
              id="phone"
              placeholder="تلفن همراه"
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
            <p className="text-(--back-color) mb-4 pr-1.5 pt-1.5">
              {errors?.phone?.message}
            </p>
          </div>
          <div>
            <input
              className="h-13.75 w-[320px] px-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) lg:w-90 xl:w-100"
              type="email"
              placeholder=" ایمیل"
              id="email"
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
            <p className="text-(--back-color) mb-4 pr-1.5 pt-1.5">
              {errors?.email?.message}
            </p>
          </div>

          <div>
            <input
              className="h-13.75 w-[320px] px-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) lg:w-90 xl:w-100"
              type="text"
              placeholder="موضوع "
              id="subject"
              label="نام و نام خانوادگی"
              disabled={isPending}
              {...register("subject", {
                required: "موضوع الزامی است",
              })}
            />
            <p className="text-(--back-color) mb-4 pr-1.5 pt-1.5">
              {errors?.subject?.message}
            </p>
          </div>

          <div>
            <textarea
              className="resize-none h-50 w-[320px] p-4 rounded-2xl text-(--text-color) bg-(--back-color-alt) lg:w-90 xl:w-100"
              id="message"
              name="message"
              {...register("message", {
                required: "پیام الزامی است",
              })}
            ></textarea>
            <p className="text-(--back-color) mb-4 pr-1.5 pt-1.5">
              {errors?.message?.message}
            </p>
          </div>

          <Button type="submit" htmlType="contact" disabled={isPending}>
            ثبت پیام
          </Button>
        </form>
        <div className="bg-(--border-color-alt) border border-(--border-color) h-fit rounded-2xl pt-4 px-4 mt-4 xs:w-[320px] sm:w-100 md:mt-12 xl:w-112.5">
          <div className="pt-3 pb-2 flex justify-between items-center border-b border-(--back-color-alt)">
            <p>تلفن :</p>
            <p>09399194933</p>
          </div>
          <div className="pt-3 pb-2 flex justify-between items-center border-b border-(--back-color-alt)">
            <p>ایمیل :</p>
            <p>tfbseddiq@gmail.com</p>
          </div>
          <div className="pt-3 pb-2 flex justify-between items-center border-b border-(--back-color-alt)">
            <p>سوشال مدیا :</p>
            <div className="text-(--back-color) cursor-pointer flex justify-between w-30 text-2xl">
              <a
                href="https://wa.me/989399194933"
                target="_blank"
                rel="noreferrer"
              >
                <PiWhatsappLogo />
              </a>
              <a href="https://t.me/Sedd_iq" target="_blank" rel="noreferrer">
                <PiTelegramLogo />
              </a>
              <a
                href="https://instagram.com/_mahdi73_"
                target="_blank"
                rel="noreferrer"
              >
                <PiInstagramLogo />
              </a>
            </div>
          </div>
          <div className="pt-3 pb-2 flex justify-between items-center border-b border-(--back-color-alt) last:justify-center last:border-b-0 last:mt-4 last:text-sm">
            <p>جمعه و روزهای تعطیل : تعطیل میباشد</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
