import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import axios from "axios";
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
    return getApiData("club/facilities/list");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["facility-list"],
    getFacilitiesData
  );

  if (isLoading) return "Loading Data... ... ...";
  if (isError) return error.meassage;

  const facilities = data?.data?.facilities;
  // console.log(facilities);
  const mediaPath = data?.data?.mediaPath;

  const navigationHandler = (type, id, childId) => {
    switch (type) {
      case "Restaurant":
        return `/food-beverages/${id}`;
      case "Sports":
        return `/sports/${id}`;
      case "Booking":
        return "/booking";
      default:
        return `/facility-details/${id}/${childId}`;
    }
  };

  return (
    <div className="relative">
      <div className="bg-[#191919] pl-8 sm:pl-12 md:pl-16 lg:pl-32 pr-0 py-16">
        <h1 className="font-brand text-subBrand text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Facilities <br /> Overview
        </h1>
        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
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
                  // title={item.name}
                  image={mediaPath + item.coverImage}
                  navigateTo={
                    !item.type === "Others"
                      ? navigationHandler(item.type, item._id)
                      : item.type === "Others" && item.items.length === 0
                      ? null
                      : navigationHandler(
                          item.type,
                          item._id,
                          item.items[0]?._id
                        )
                  }
                />
              </SwiperSlide>
            ))}

            <div className="flex justify-between md:pr-20 items-center translate-y-1/2">
              <button
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              >
                <img src={prev} alt="prev" className="w-16" />
              </button>
              <button
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
              >
                <img src={next} alt="next" className="w-16" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
