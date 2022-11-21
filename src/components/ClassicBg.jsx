import React from "react";

const ClassicBg = (props) => {
  return (
    <div
      className={`${props.bgClass} h-[50vh] flex items-center justify-center`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-7xl font-brand text-subBrand font-extralight uppercase">
        {props.headline}
      </h1>
    </div>
  );
};

export default ClassicBg;
