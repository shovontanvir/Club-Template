import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import prev from "../../../assets/images/globals/prev.png";
import next from "../../../assets/images/globals/next.png";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import FacilitiesItem from "../../../components/FacilitiesItem";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";

const liveImageUrl = import.meta.env.VITE_REACT_APP_IMAGE_API_LIVE_URL;

const Facilities = () => {
  const swiperRef = useRef();

  //   query data
  const getFacilitiesData = () => {
    return getApiData("facilities");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["facility-list"],
    getFacilitiesData
  );

  if (isLoading) return "Loading Data... ... ...";
  if (isError) return error.meassage;

  const facilities = data;
  // console.log(facilities);

  return (
    <div className="relative">
      <div className="bg-[#191919] pl-8 sm:pl-12 md:pl-16 lg:pl-32 pr-0 py-16">
        <h1 className="font-brand text-subBrand text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Facilities <br /> Overview
        </h1>
        <div className="mt-10">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            scrollbar={{
              hide: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper text-white text-center"
            onInit={(swiper) => (swiperRef.current = swiper)}
          >
            {facilities?.map((item) => (
              <SwiperSlide key={item.name}>
                <FacilitiesItem
                  name={item.name}
                  title={item.title}
                  image={item.image}
                />
              </SwiperSlide>
            ))}

            <div className="flex justify-between pr-20 items-center translate-y-1/2">
              <button
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              >
                <img src={prev} alt="prev" />
              </button>
              <button
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
              >
                <img src={next} alt="next" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
