import { aboutWallpaper } from "../Services/apiWallpaper";

function About() {
  return (
    <div>
      <section className="container text-center my-8">
        فروشگاه اینترنتی هوم استور از سال ۱۳۹۸ با هدف ارائه تجربه‌ای متفاوت در
        خرید آنلاین کالای دیجیتال، لوازم آرایشی و بهداشتی و سرگرمی راه‌اندازی
        شد. ما اینجا هستیم تا شما بدون دغدغه، محصولی اورجینال و باکیفیت را
        به‌سادگی انتخاب و خریداری کنید. تحویل سریع، ضمانت اصالت کالا، بازگشت وجه
        بی‌قید و شرط و پشتیبانی چندبعدی تنها بخشی از تعهد ما به مشتریان عزیز
        است. سادگی، کیفیت و اعتماد، همه در یک خرید!
      </section>
      <div className="xs:max-w-145 xs:h-38.75 sm:max-w-3xl h-57.5 md:max-w-248 md:h-74.25 lg:max-w-300 lg:h-90 xl:max-w-362.5 xl:h-108.75 2xl:h-150 2xl:max-w-500">
        {
          <img
            src={aboutWallpaper[0]}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        }
      </div>
      <section className="container text-center my-12">
        ما تلاش می‌کنیم محصولاتی باکیفیت و متنوع را با قیمت مناسب در اختیار شما
        قرار دهیم و تجربه‌ای ساده و مطمئن از خرید اینترنتی فراهم کنیم. هدف ما
        این است که با ارائه اطلاعات کامل درباره محصولات و ارسال مناسب در کوتاه
        ترین زمان ممکن، خریدی راحت و رضایت‌بخش برای مشتریان ایجاد کنیم.
      </section>
      <div className="container xs:max-w-145 xs:h-38.75 sm:max-w-3xl h-57.5 md:max-w-248 md:h-74.25 lg:max-w-300 lg:h-90 xl:max-w-362.5 xl:h-108.75 2xl:h-150 2xl:max-w-500">
        {
          <img
            src={aboutWallpaper[1]}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        }
      </div>
    </div>
  );
}

export default About;
