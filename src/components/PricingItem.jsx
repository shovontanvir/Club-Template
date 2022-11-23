import React from "react";

const PricingItem = (props) => {
  return (
    <div className="my-5">
      <div className="flex justify-between border-b border-b-black py-2">
        <div>
          <h1 className="font-brand text-3xl">{props.title}</h1>
        </div>
        <div>
          <h1 className="font-brand text-3xl">{props.price}</h1>
        </div>
      </div>
      <div className="py-2">
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default PricingItem;
