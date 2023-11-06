import React from "react";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";

const ClubHistoryCard = () => {
  const getHistoryData = () => {
    return getApiData("club-history");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["club-history"],
    getHistoryData
  );
  if (isLoading) return "Loading... ... ...";
  if (isError) return error.message;

  const history = data;
  return (
    <div className="flex flex-col sm:flex-row px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-28 relative ">
      <div className="basis-1/4">
        <div className="after:absolute after:h-full relative after:left-4 after:border-2 after:-top-4 after:border-brand after:opacity-50 after:w-1/2 sm:after:w-full">
          <img
            src={history.image}
            alt="person avatar"
            className="w-1/2 sm:w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>
      <div className="basis-3/4 sm:pl-16 mt-5 sm:mt-0 flex flex-col justify-between">
        <div>
          <p
            className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: history.history }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ClubHistoryCard;
