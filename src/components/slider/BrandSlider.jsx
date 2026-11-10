import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useBrands } from "../Brand/useBrands";
import { Link } from "react-router-dom";

function BrandSlider() {
  const { brands } = useBrands();
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={{
        400: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        576: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
      className="brand-wrapper"
    >
      {brands &&
        brands.map((brand) => (
          <SwiperSlide className="border-l border-(--border-color)">
            <Link to={`/brands/${brand.title}`}>
              <img className="w-25 cursor-pointer" src={brand.logo} alt="" />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default BrandSlider;
