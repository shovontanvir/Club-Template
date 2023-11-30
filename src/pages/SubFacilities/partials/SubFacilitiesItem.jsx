import React from "react";

const SubFacilitiesItem = ({ image, name, children }) => {
  return (
    <div>
      <div className="overflow-hidden relative">
        <img
          alt={name}
          className="group-hover:scale-110 transition duration-500 absolute inset-0 w-full h-full ease-in-out"
          src={image}
        />
        <div className="bg-black/60 inset-0 absolute"></div>
        <div className="relative flex flex-col items-center justify-center hover:scale-90 transition duration-500 ease-in-out p-2 after:border-x after:border-subBrand after:absolute after:w-11/12 after:h-3/4 hover:after:h-0 after:transition-all after:duration-500 before:border-y before:border-subBrand before:absolute before:w-11/12 before:h-3/4 hover:before:w-0 before:transition-all before:duration-500">
          <div className="py-16 md:py-32 flex flex-col sm:flex-row sm:items-center justify-between w-11/12 px-8">
            <div>
              <h1 className="font-brand z-50 text-3xl uppercase text-subBrand text-center sm:text-left">
                {name}
              </h1>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFacilitiesItem;
