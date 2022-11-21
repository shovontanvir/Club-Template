import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";

import facilities1 from "../images/facilities1.png";
import facilities2 from "../images/facilities2.png";
import facilities3 from "../images/facilities3.png";
import facilities4 from "../images/facilities4.png";
import facilities5 from "../images/facilities5.png";
import facilities6 from "../images/facilities6.png";
import facilities7 from "../images/facilities7.png";
import facilities8 from "../images/facilities8.png";
import facilities9 from "../images/facilities9.png";
import prev from "../images/prev.png";
import next from "../images/next.png";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import FacilitiesItem from "./FacilitiesItem";

const Facilities = () => {
  const swiperRef = useRef();
  const facilities = [
    {
      name: "Restaurent",
      title: "Title Goes Here",
      image: facilities1,
    },
    {
      name: "Bakery & Cafe",
      title: "Title Goes Here",
      image: facilities2,
    },
    {
      name: "Personal Care",
      title: "Title Goes Here",
      image: facilities3,
    },
    {
      name: "Laundry",
      title: "Title Goes Here",
      image: facilities4,
    },
    {
      name: "Health & Fitness",
      title: "Title Goes Here",
      image: facilities5,
    },
    {
      name: "Bar",
      title: "Title Goes Here",
      image: facilities6,
    },
    {
      name: "Prayer Room",
      title: "Title Goes Here",
      image: facilities7,
    },
    {
      name: "Lobby Lounge",
      title: "Title Goes Here",
      image: facilities8,
    },
    {
      name: "Sports",
      title: "Title Goes Here",
      image: facilities9,
    },
  ];

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
            {facilities.map((item, index) => (
              <SwiperSlide>
                <FacilitiesItem
                  key={index.toString()}
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
