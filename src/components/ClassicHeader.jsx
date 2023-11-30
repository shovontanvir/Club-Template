import React from "react";

const ClassicHeader = ({ bgClass, headline }) => {
  return (
    <div
      className={`${bgClass} h-[30vh] sm:h-[60vh] flex items-center justify-center relative text-center px-20`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-7xl font-brand text-subBrand font-extralight uppercase relative">
        {headline}
      </h1>
    </div>
  );
};

export default ClassicHeader;
