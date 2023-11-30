import React from "react";
import FacilitiesItem from "../../components/FacilitiesItem";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import ClassicHeader from "../../components/ClassicHeader";
import { useLocation, useNavigate } from "react-router-dom";

const Sports = () => {
  const id = useLocation().pathname.split("/").pop();
  const getSportsDetails = () => {
    return getApiData(`club/facilities/details/${id}`);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["sports"],
    getSportsDetails
  );

  if (isLoading) return "Loading data...";
  if (isError) return error.message;

  //   console.log(data);
  const sportsList = data.data.facility.items;
  const mediaPath = data.data.mediaPath;

  return (
    <>
      <ClassicHeader headline="sports" bgClass="bg-sports" />
      <div className="flex flex-wrap px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16">
        {sportsList.map((item) => (
          <div className="basis-1/3 p-3 aspect-square" key={item.name}>
            <FacilitiesItem
              name={item.name}
              // title={item.title}
              image={mediaPath + item.coverImage}
              navigateTo={`/facility-details/${id}/${item._id}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Sports;
