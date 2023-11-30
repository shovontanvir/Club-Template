import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import FeatureDetailsItem from "./partials/FeatureDetailsItem";
import PricingItem from "./partials/PricingItem";
import ScheduleItem from "../../components/ScheduleItem";
import { useLocation } from "react-router-dom";

const FeatureDetails = () => {
  const path = useLocation().pathname.split("/");
  const childId = path.pop();
  const parentId = path.pop();

  const getFeatureDetails = () => {
    return getApiData(`club/facilities/details/${parentId}`);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["feature-details"],
    getFeatureDetails
  );

  if (isLoading) return "Loading... ... ...";
  if (isError) return error.message;

  const facility = data?.data.facility.items.filter(
    (item) => item._id === childId
  )[0];

  const facilityDetails = facility?.details;

  const { feature, price, timing, rules } = facilityDetails;

  const mediaPath = data?.data.mediaPath;

  return (
    <>
      <ClassicHeader headline={facility?.name} bgClass="bg-classic" />
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-8 md:py-16">
        <FeatureDetailsItem heading="Features">
          <p>{feature}</p>
        </FeatureDetailsItem>
        <FeatureDetailsItem heading="Pricing">
          {price?.map((price) => (
            <PricingItem
              title={price.title}
              price={price.amount}
              details={price.description}
              key={price.title}
            />
          ))}
        </FeatureDetailsItem>
        <FeatureDetailsItem heading="Timing">
          {timing?.map((time) => (
            <PricingItem
              key={time.title}
              title={time.title}
              price={<ScheduleItem slot={time.slot} />}
              details={time.description}
            />
          ))}
        </FeatureDetailsItem>
        <FeatureDetailsItem heading="Rules" className="!border-0">
          <p>{rules}</p>
        </FeatureDetailsItem>
      </div>
    </>
  );
};

export default FeatureDetails;
