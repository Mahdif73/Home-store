import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { faDigitsNum, formatCurrency } from "../../utils/helpers";
import { useDiscount } from "./useDiscount";
import { Link } from "react-router-dom";

function DiscountSlider() {
  const { products } = useDiscount();
  return (
    <div className="px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        navigation={{
          nextEl: ".discount-button-next",
          prevEl: ".discount-button-prev",
        }}
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" bg-(--body-color) border border-solid border-(--border-color) rounded-2xl flex flex-col hover:border-(--border-color-alt) xs:h-125 sm:h-175 md:h-125 lg:h-107.5 xl:h-92.5 2xl:h-100">
                <Link
                  className="p-1 cursor-pointer"
                  to={`/products/details/${product.id}`}
                >
                  <img
                    src={product.image}
                    className="block overflow-hidden rounded-[1.25rem]"
                    alt=""
                  />
                </Link>
                <div className="px-5 pt-0 pb-2 flex flex-col grow ">
                  <div className="mt-1 mb-2">
                    <h4 className="text-sm line-clamp-2 mt-2 font-medium">
                      {product.title}
                    </h4>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] justify-between pt-2 mt-auto">
                    <span className="text-base text-(--back-color) font-semibold">
                      {formatCurrency(product.offPrice)}
                    </span>
                    <p className="text-(--text-color)">
                      {faDigitsNum(product.discount)}%
                    </p>
                    <span
                      className="text-(--text-color-light) text-base line-through
 "
                    >
                      {formatCurrency(product.price)}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        <div className="swiper-button-prev discount-button-prev"></div>
        <div className="swiper-button-next discount-button-next"></div>
      </Swiper>
    </div>
  );
}

export default DiscountSlider;
