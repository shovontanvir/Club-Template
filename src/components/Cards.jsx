import React from "react";
import serviceLogo from "../images/servicelogo.png";
import BtnReadMore from "./BtnReadMore";

const Cards = (props) => {
  return (
    <div className="relative flex flex-col items-center justify-center  after:absolute after:border-x after:w-full after:h-full after:border-brand hover:after:h-0 after:transition-all after:duration-1000 before:absolute before:border-y before:w-full before:h-full before:border-brand hover:before:w-0 before:transition-all before:duration-1000 p-5 m-3 lg:m-5 !basis-2/6 group">
      <div>
        <img src={serviceLogo} alt="serviceLogo" className="w-14 mb-4" />
        <h1 className="text-xl lg:text-2xl font-brand">
          Founder <br /> {props.designation}
        </h1>
        <p className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7">
          {props.message}
        </p>
        <BtnReadMore />
      </div>
    </div>
  );
};

export default Cards;
