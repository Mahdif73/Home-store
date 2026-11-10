function Footer() {
  return (
    <footer>
      <div className="container flex justify-start gap-x-8 xs:flex-wrap xs:justify-center xs:items-start md:flex-nowrap">
        <p className="w-[60%] opacity-70 text-base xs:order-1 xs:flex-[0_0_100%] xs:pb-8 md:flex-[0_0_40%] lg:ml-12 md:text-base">
          فروشگاه اینترنتی هوم استور از سال ۱۳۹۸ با هدف ارائه تجربه‌ای متفاوت در
          خرید آنلاین کالای دیجیتال، لوازم آرایشی و بهداشتی و سرگرمی راه‌اندازی
          شد. ما اینجا هستیم تا شما بدون دغدغه، محصولی اورجینال و باکیفیت را
          به‌سادگی انتخاب و خریداری کنید. تحویل سریع، ضمانت اصالت کالا، بازگشت
          وجه بی‌قید و شرط و پشتیبانی چندبعدی تنها بخشی از تعهد ما به مشتریان
          عزیز است. سادگی، کیفیت و اعتماد، همه در یک خرید!
        </p>
        <div className="lg:w-[15%] xs:w-[25%] xs:order-2">
          <h3 className="mb-6 xs:text-sm md:mb-6 lg:text-base">
            خدمات مشتریان
          </h3>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            پرسش های متداول
          </p>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            دسته بندی ها
          </p>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            گزارش خطا
          </p>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            حریم خصوصی
          </p>
        </div>
        <div className="lg:w-[10%] xs:w-[25%] xs:order-2">
          <h3 className="mb-6 xs:text-sm md:mb-6  lg:text-base">
            دسترسی سریع{" "}
          </h3>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            پروفایل کاربری
          </p>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            سبد خرید
          </p>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            برندها{" "}
          </p>
        </div>
        <div className=" xs:w-[25%] lg:w-[15%] xs:order-2">
          <h3 className="mb-6 xs:text-sm md:mb-6  lg:text-base">
            راهنمای خرید از هوم استور
          </h3>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            نحوه ثبت سفارش
          </p>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            رویه ارسال سفارش
          </p>
          <p className="pb-2  xs:text-xs md:pb-2 md:text-sm hover:txt-(--text-color-light)">
            شیوه های پرداخت
          </p>
        </div>
      </div>
      <p className="mt-12 p-4 text-center border border-(--border-color)">
        تمامی حقوق این سایت متعلق به فروشگاه هوم استور می‌باشد.
      </p>
    </footer>
  );
}

export default Footer;
