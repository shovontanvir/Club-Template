import React from "react";
import news from "../images/news.png";
import BtnReadMore from "./BtnReadMore";
import { useNavigate } from "react-router-dom";

const NewsThumb = (props) => {
  const navigate = useNavigate();

  return (
    <div className="basis-full md:basis-1/2 xl:basis-1/3 p-5 group">
      <div className=" bg-[#F1EBE2] py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 md:mb-10 px-10">
          <h1 className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl">
            {props.venue}
          </h1>
          <h1 className="text-[#767676]  md:ml-5 font-poppins">
            {"." + props.date}
          </h1>
        </div>
        <h1 className="font-brand text-xl sm:text-2xl md:text-3xl lg:text-4xl text-subBrand px-10">
          {props.newsHeadline}
        </h1>
        <div className="relative">
          <div className="absolute w-full h-full bg-black opacity-30 z-50"></div>
          <img src={news} alt="news thumb" className="my-10 w-full" />
        </div>
        <div className="px-10" onClick={() => navigate("/news-details")}>
          <BtnReadMore />
        </div>
      </div>
    </div>
  );
};

export default NewsThumb;
