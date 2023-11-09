import React from "react";

const ClassicHeader = ({ bgClass, headline }) => {
  return (
    <div
      className={`${bgClass} h-[50vh] flex items-center justify-center relative`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      {/* <MovingComponent
        type="unfold"
        duration="1200ms"
        delay="0s"
        direction="normal"
        timing="ease-in-out"
        iteration="1"
        fillMode="none"
      > */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-7xl font-brand text-subBrand font-extralight uppercase relative">
        {headline}
      </h1>
      {/* </MovingComponent> */}
    </div>
  );
};

export default ClassicHeader;
