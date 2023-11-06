import React from "react";

const FeatureDetailsItem = ({ heading, children, className }) => {
  return (
    <div
      className={`flex flex-col md:flex-row px-5 py-10 justify-between border-b border-dashed border-black my-3 ${className}`}
    >
      <div className="md:w-1/6">
        <h1 className="font-brand text-brand text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {heading}
        </h1>
      </div>
      <div className="md:w-3/4 md:pr-5">{children}</div>
    </div>
  );
};

export default FeatureDetailsItem;
