import React from "react";
import serviceLogo from "../../../assets/images/globals/servicelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
  return (
    <div className="relative flex flex-col items-center justify-center  after:absolute after:border-x after:w-full after:h-full after:border-brand hover:after:h-0 after:transition-all after:duration-700 before:absolute before:border-y before:w-full before:h-full before:border-brand hover:before:w-0 before:transition-all before:duration-700 p-5 m-3 lg:m-5 !basis-2/6 group cursor-pointer">
      <div>
        <img src={serviceLogo} alt="serviceLogo" className="w-14 mb-4" />
        <h1 className="text-xl lg:text-2xl font-brand">
          Founder <br /> {props.designation}
        </h1>
        <p className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7">
          {props.message}
        </p>
        <div className="group">
          <button className="mt-2">
            <span className="font-brand font-light hidden group-hover:inline-block">
              Read More
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 font-thin group-hover:scale-125"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
