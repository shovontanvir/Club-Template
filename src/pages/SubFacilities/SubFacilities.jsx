import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import SubFacilitiesItem from "./partials/SubFacilitiesItem";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const SubFacilities = ({ headline, bgClass, url }) => {
  const navigate = useNavigate();
  const getSubFacilitiesList = () => {
    return getApiData(url);
  };

  const { isLoading, isError, error, data } = useQuery(
    [url],
    getSubFacilitiesList
  );

  if (isLoading) return "Loading data...";
  if (isError) return error.message;

  const subFacilities = data;
  // console.log(subFacilities);
  return (
    <>
      <ClassicHeader headline={headline} bgClass={bgClass} />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-8 md:py-16">
        {subFacilities.map((item) => (
          <div className="group p-5" key={item.name}>
            <SubFacilitiesItem image={item.image} name={item.name}>
              <div className="flex justify-center sm:justify-end">
                {!item.name.includes("Bar") && url === "food-beverages" && (
                  <Button name="Menu" className="m-2 bg-brand" />
                )}
                {url === "food-beverages" ? (
                  <Button name="Order" className="m-2" />
                ) : (
                  <Button name="View Details" className="m-2" />
                )}
              </div>
            </SubFacilitiesItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubFacilities;
