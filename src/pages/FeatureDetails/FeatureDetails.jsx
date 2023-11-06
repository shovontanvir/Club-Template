import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import FeatureDetailsItem from "./partials/FeatureDetailsItem";
import PricingItem from "./partials/PricingItem";
import ScheduleItem from "./partials/ScheduleItem";

const FeatureDetails = ({ url }) => {
  const getFeatureDetails = () => {
    return getApiData("feature-details");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["feature-details"],
    getFeatureDetails
  );

  if (isLoading) return "Loading... ... ...";
  if (isError) return error.message;

  const { title, feature, pricing, timing, rules } = data;

  return (
    <>
      <ClassicHeader headline={title} bgClass="bg-feature" />
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-8 md:py-16">
        <FeatureDetailsItem heading="Features">
          <p>{feature}</p>
        </FeatureDetailsItem>
        <FeatureDetailsItem heading="Pricing">
          {pricing.map((price) => (
            <PricingItem
              title={price.title}
              price={price.price}
              details={price.details}
              key={price.title}
            />
          ))}
        </FeatureDetailsItem>
        <FeatureDetailsItem heading="Timing">
          {timing.map((time) => (
            <PricingItem
              key={time.title}
              title={time.title}
              price={
                <ScheduleItem
                  startDate={time.startDate}
                  startTime={time.startTime}
                  endDate={time.endDate}
                  endTime={time.endTime}
                />
              }
              details={time.details}
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
