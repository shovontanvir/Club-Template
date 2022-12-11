import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import sign from "../images/sign.png";

const MessageFrom = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState();
  const [message, setMessage] = useState();
  const [designation, setDesignation] = useState();
  const [name, setName] = useState();
  const [sign, setSign] = useState();

  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await axios.get(props.url);
      const data = await res.data.data;
      setDetails(data.advisor);
      setIsLoading(false);
      setDesignation(
        `${
          details.advisorType.charAt(0).toUpperCase() +
          details.advisorType.slice(1)
        } Advisor`
      );
      setName(details.name);
      setAvatar(details.image);
      setMessage(details.message);
      setSign(details.signature);
    };

    fetchMessage();
  }, [isLoading]);

  return (
    <div className="flex flex-col sm:flex-row px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-28 relative ">
      <div className="basis-1/4">
        <div className="after:absolute after:h-full relative after:left-4 after:border-2 after:-top-4 after:border-brand after:opacity-50 after:w-1/2 sm:after:w-full">
          <img src={avatar} alt="person avatar" className="w-1/2 sm:w-full" />
        </div>
      </div>
      <div className="basis-3/4 sm:pl-16 mt-5 sm:mt-0 flex flex-col justify-between">
        <div>
          <h1 className="text-subBrand font-brand text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
            Message From The <br /> {designation}
          </h1>
          <p className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base">
            {message}
          </p>
        </div>
        <div className="mt-7 text-right">
          <h1 className="font-brand sm:text-lg md:text-xl xl:text-3xl font-light">
            {name}
          </h1>
          <p className="font-poppins font-extralight leading-5 text-sm md:text-base">
            {designation}
          </p>
          <FontAwesomeIcon icon={faLinkedin} />
          <img src={sign} alt="signature" className="ml-auto mt-2 w-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default MessageFrom;
