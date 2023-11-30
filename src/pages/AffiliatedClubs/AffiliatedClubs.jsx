import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import AffiliationCard from "./partials/AffiliationCard";

const AffiliatedClubs = () => {
  const getAffiliatedClubs = () => {
    return getApiData("affiliated-club/list");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["affiliated-clubs"],
    getAffiliatedClubs
  );

  if (isLoading) return "Loading... ... ...";
  if (isError) return error.message;

  const affiliatedClubs = data.data.affiliatedClub;
  const mediaPath = data.data.mediaPath;
  const domesticClubs = affiliatedClubs.domestic;
  const internationalClubs = affiliatedClubs.international;
  return (
    <>
      <ClassicHeader headline="Affiliated Clubs" bgClass="bg-classic" />
      <div className="my-5 bg-[#F1EBE2] py-8 lg:py-16 px-8 md:px-16 lg:px-24 xl:px-32 text-center">
        <h1 className="font-brand text-subBrand text-3xl md:text-5xl">
          Domestic Clubs
        </h1>
        <div className="flex flex-wrap items-stretch mt-5 justify-center">
          {domesticClubs?.map((club) => (
            <div
              className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-5"
              key={club.name}
            >
              <AffiliationCard name={club.name} image={mediaPath + club.logo} />
            </div>
          ))}
        </div>
      </div>

      <div className="my-5 bg-[#F1EBE2] py-8 lg:py-16 px-8 md:px-16 lg:px-24 xl:px-32 text-center">
        <h1 className="font-brand text-subBrand text-3xl md:text-5xl">
          International Clubs
        </h1>
        <div className="flex flex-wrap items-stretch mt-5 justify-center">
          {internationalClubs?.map((club) => (
            <div
              className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-5"
              key={club.name}
            >
              <AffiliationCard name={club.name} image={mediaPath + club.logo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AffiliatedClubs;
