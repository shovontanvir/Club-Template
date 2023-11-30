import React, { useMemo } from "react";
import { getApiData } from "../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";

const MessageComponent = ({ url }) => {
  // const messageFrom = url.split("/")[0].split("-")[0];
  const path = useLocation().pathname;

  // query
  const getMessage = () => {
    return getApiData(url);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["person-message", path],
    getMessage
  );

  const messageData = data?.data?.message;

  const mediaPath = data?.data?.mediaPath;

  const messageFrom = messageData?.messageFrom?.split(" ");
  messageFrom?.pop();

  const { avatar, messagePerson, messageBody, name, linkedInUrl, signature } = {
    avatar: mediaPath + messageData?.image,
    messagePerson: messageFrom?.join(" "),
    messageBody: messageData?.message,
    name: messageData?.name,
    linkedInUrl: messageData?.linkedinUrl,
    signature: mediaPath + messageData?.signature,
  };

  if (isLoading) return "Loading Data...";
  if (isError) return error.meassage;

  return (
    <div className="flex flex-col sm:flex-row px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 md:py-28 relative ">
      <div className="basis-1/4">
        <div className="after:absolute after:h-full relative after:left-4 after:border-2 after:-top-4 after:border-brand after:opacity-50 after:w-1/2 sm:after:w-full">
          <img src={avatar} alt="person avatar" className="w-1/2 sm:w-full" />
        </div>
      </div>
      <div className="basis-3/4 sm:pl-16 mt-5 sm:mt-0 flex flex-col justify-between">
        <div>
          <h1 className="text-subBrand font-brand text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
            Message From <br />{" "}
            <span className="capitalize">{messagePerson}</span>
          </h1>
          <p
            className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: messageBody }}
          ></p>
        </div>
        <div className="mt-7 text-right">
          <h1 className="font-brand sm:text-lg md:text-xl xl:text-3xl font-light">
            {name}
          </h1>
          <p className="font-poppins font-extralight leading-5 text-sm md:text-base">
            {messagePerson}
          </p>
          <a href={linkedInUrl} target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <img
            src={signature}
            alt="signature"
            className="ml-auto mt-2 w-[20%]"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
