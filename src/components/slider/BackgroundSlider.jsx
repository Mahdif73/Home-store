import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { wallpaper } from "../../Services/apiWallpaper";

function BackgroundSlider() {
  return (
    <div className="home-container swiper">
      <Swiper
        className="swiper-wrapper"
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".background-button-next",
          prevEl: ".background-button-prev",
        }}
        autoplay={{
          delay: 2000,
        }}
      >
        {wallpaper.map((wall, index) => (
          <SwiperSlide key={index}>
            <img
              src={wall}
              className="cursor-pointer w-full h-full object-cover object-center"
              alt=""
            />
          </SwiperSlide>
        ))}

        <div className="swiper-btn">
          <div className="swiper-button-next background-button-next"></div>
          <div className="swiper-button-prev background-button-prev"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default BackgroundSlider;
