import React from "react";

const PricingItem = ({ title, price, details }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between border-b border-b-black py-2">
        <div>
          <h1 className="font-brand text-3xl">{title}</h1>
        </div>
        <div>
          <h1 className="font-brand text-3xl flex items-center">{price}</h1>
        </div>
      </div>
      <div className="py-2">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default PricingItem;
