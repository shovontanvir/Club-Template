import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import sign from "../images/sign.png";

const MessageFrom = (props) => {
  return (
    <div className="flex flex-col sm:flex-row px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-28 relative ">
      <div className="basis-1/4">
        <div className="after:absolute after:h-full relative after:left-4 after:border-2 after:-top-4 after:border-brand after:opacity-50 after:w-1/2 sm:after:w-full">
          <img
            src={props.avatar}
            alt="person avatar"
            className="w-1/2 sm:w-full"
          />
        </div>
      </div>
      <div className="basis-3/4 sm:pl-16 mt-5 sm:mt-0 flex flex-col justify-between">
        <div>
          <h1 className="text-subBrand font-brand text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
            Message From The <br /> {props.designation}
          </h1>
          <p className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base">
            {props.messageBody}
          </p>
        </div>
        <div className="mt-7 text-right">
          <h1 className="font-brand sm:text-lg md:text-xl xl:text-3xl font-light">
            {props.name}
          </h1>
          <p className="font-poppins font-extralight leading-5 text-sm md:text-base">
            {props.designation}
          </p>
          <FontAwesomeIcon icon={faLinkedin} />
          <img src={sign} alt="signature" className="ml-auto mt-2 w-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default MessageFrom;
