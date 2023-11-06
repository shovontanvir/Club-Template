import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFlip,
  EffectCube,
  EffectFade,
} from "swiper/modules";
import header from "../../../assets/images/backgrounds/header1.jpg";
import club from "../../../assets/images/globals/Club.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";

const SliderHeader = () => {
  return (
    <div className="h-[50vh] md:h-screen w-full bg-bgHome">
      <div className="relative bg-hero-patternk bg-cover h-full">
        <Swiper
          effect={"cube"}
          cubeEffect={{
            shadow: false,
          }}
          pagination={{
            type: "fraction",
            dynamicBullets: true,
            formatFractionCurrent: (currentValue) =>
              currentValue.toString().padStart(2, "0"),
            formatFractionTotal: (total) => total,
            dynamicMainBullets: 5,
          }}
          direction={"vertical"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[
            Pagination,
            Navigation,
            Autoplay,
            EffectFlip,
            EffectCube,
            EffectFade,
          ]}
          className="mySwiper h-full w-full text-white text-center"
        >
          <SwiperSlide>
            <div className="w-full h-full p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32">
              <img src={header} alt="header" className="h-full w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32">
              <img src={header} alt="header" className="h-full w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32">
              <img src={header} alt="header" className="h-full w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32">
              <img src={header} alt="header" className="h-full w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32">
              <img src={header} alt="header" className="h-full w-full" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-50">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-brand text-subBrand">
            <span>The</span>
            <br />
            <span>Banani</span>
          </h1>
        </div>
        <div className="absolute right-[2%] bottom-[20%] z-50 w-1/6">
          <img src={club} alt="club" />
        </div>
      </div>
      <div className="absolute px-32 right-0 bottom-[6%]">
        <h1 className="text-white font-poppins">Scroll Down</h1>
      </div>
    </div>
  );
};

export default SliderHeader;
