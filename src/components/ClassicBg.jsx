import React from "react";
import MovingText from "react-moving-text";

const ClassicBg = (props) => {
  return (
    <div
      className={`${props.bgClass} h-[50vh] flex items-center justify-center`}
    >
      <MovingText
        type="unfold"
        duration="1200ms"
        delay="0s"
        direction="normal"
        timing="ease-in-out"
        iteration="1"
        fillMode="none"
      >
        <h1
          id="funny"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-7xl font-brand text-subBrand font-extralight uppercase"
        >
          {props.headline}
        </h1>
      </MovingText>
    </div>
  );
};

export default ClassicBg;
