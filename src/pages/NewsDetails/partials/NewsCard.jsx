import React from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ image, venue, date, newsHeadline }) => {
  const navigate = useNavigate();
  return (
    <div
      className="basis-full md:basis-1/2 py-5 md:px-5 group"
      onClick={() => navigate("/news-details")}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-30 z-50"></div>
        <img src={image} alt="news thumb" className="w-full" />
      </div>
      <div className="bg-[#F1EBE2] py-10 text-start">
        <div className="flex flex-col md:flex-row md:items-center mb-3 md:mb-5 px-5">
          <h1 className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl">
            {venue}
          </h1>
          <h1 className="text-[#767676]  md:ml-10 font-poppins">
            {"." + date}
          </h1>
        </div>
        <h1 className="font-brand text-xl sm:text-2xl md:text-3xl lg:text-4xl text-subBrand px-5">
          {newsHeadline}
        </h1>
      </div>
    </div>
  );
};

export default NewsCard;
