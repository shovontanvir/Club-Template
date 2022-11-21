import React from "react";

const FacilitiesItem = (props) => {
  return (
    <div>
      <div className="overflow-hidden relative aspect-square group">
        <img
          alt="member"
          className="group-hover:scale-110 transition duration-500 absolute w-full h-full ease-in-out"
          src={props.image}
        />
        <div className="bg-black/50 inset-0 absolute"></div>
        <div className="relative flex flex-col items-center justify-center transition duration-500 ease-in-out h-full w-full p-2 text-center after:border-x after:border-subBrand after:absolute after:h-3/4 after:w-3/4 hover:after:h-0 after:transition-all after:duration-500 before:border-y before:border-subBrand before:absolute before:h-3/4 before:w-3/4 hover:before:w-0 before:transition-all before:duration-500">
          <div>
            <h1 className="font-poppins px-5 z-50 tracking-[0.25rem] text-xs font-extralight text-subBrand mb-4">
              {props.title}
            </h1>
            <h1 className="font-brand z-50 text-base md:text-xl lg:text-2xl xl:text-3xl uppercase text-white">
              {props.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesItem;
