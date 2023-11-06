import React from "react";
import FacilitiesItem from "../../components/FacilitiesItem";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import ClassicHeader from "../../components/ClassicHeader";

const Facilities = ({ url }) => {
  const getFacilitiesData = () => {
    return getApiData(url);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["facilities"],
    getFacilitiesData
  );

  if (isLoading) return "Loading data...";
  if (isError) return error.message;

  //   console.log(data);
  const facilities = data;

  return (
    <>
      <ClassicHeader headline="Facilities" bgClass="bg-fnb" />
      <div className="flex flex-wrap px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16">
        {facilities.map((item) => (
          <div className="basis-1/3 p-3 aspect-square" key={item.name}>
            <FacilitiesItem
              name={item.name}
              title={item.title}
              image={item.image}
              // navigateTo={item.navigate}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Facilities;
