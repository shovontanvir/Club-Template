import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import SubFacilitiesItem from "./partials/SubFacilitiesItem";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

const SubFacilities = () => {
  const navigate = useNavigate();
  const id = useLocation().pathname.split("/").pop();

  const getFacilitiesDetailsData = () => {
    return getApiData(`club/facilities/details/${id}`);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["facilities-details"],
    getFacilitiesDetailsData
  );

  if (isLoading) return "Loading data...";
  if (isError) return error.message;

  const facilities = data.data.facility.items;
  const mediaPath = data.data.mediaPath;
  // console.log(data.data);
  return (
    <>
      <ClassicHeader headline={data.data.facility.name} bgClass="bg-classic" />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-8 md:py-16">
        {facilities.map((item) => (
          <div className="group p-5" key={item.name}>
            <SubFacilitiesItem
              image={mediaPath + item.coverImage}
              name={item.name}
            >
              <div className="flex justify-center sm:justify-end">
                {!item.name.includes("Bar") && (
                  <Button name="Menu" className="m-2 bg-brand" />
                )}
                <Button name="Order" className="m-2" />
              </div>
            </SubFacilitiesItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubFacilities;
