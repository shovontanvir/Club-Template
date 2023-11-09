import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const NewsCard = ({ venue, date, newsHeadline, image }) => {
  const navigate = useNavigate();

  return (
    <div className="basis-full md:basis-1/2 xl:basis-1/3 p-5 group">
      <div className=" bg-[#F1EBE2] py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 md:mb-10 px-5">
          <h1 className="font-poppins text-base sm:text-lg md:text-xl">
            {venue}
          </h1>
          <h1 className="text-[#767676]  md:ml-5 font-poppins">{"." + date}</h1>
        </div>
        <h1 className="font-brand text-xl sm:text-2xl md:text-3xl lg:text-4xl text-subBrand px-5">
          {newsHeadline}
        </h1>
        <div className="relative">
          <div className="absolute w-full h-full bg-black opacity-30 z-50"></div>
          <img src={image} alt="news thumb" className="my-10 w-full" />
        </div>
        <div className="px-10" onClick={() => navigate("/news-details")}>
          <button className="mt-2 group">
            <span className="font-brand font-light hidden group-hover:inline-block">
              Read More
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 font-thin group-hover:scale-125"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
