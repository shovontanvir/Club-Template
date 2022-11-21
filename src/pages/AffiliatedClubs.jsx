import React from "react";
import { domestic, international } from "../dummydata/AffiliatedClubs";
import ClassicBg from "../components/ClassicBg";
import Affiliation from "../components/Affiliation";

const AffiliatedClubs = () => {
  return (
    <div>
      <ClassicBg headline="Affiliated Clubs" bgClass="bg-classic" />
      <div className="my-5 bg-[#F1EBE2] py-8 lg:py-16 px-8 md:px-16 lg:px-24 xl:px-32 text-center">
        <h1 className="font-brand text-subBrand text-3xl md:text-5xl">
          Domestic
        </h1>
        <div className="flex flex-wrap items-stretch mt-5 justify-center">
          {domestic.map((item) => (
            <div className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-5">
              <Affiliation image={item.image} name={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="my-5 bg-[#F1EBE2] py-8 lg:py-16 px-8 md:px-16 lg:px-24 xl:px-32 text-center">
        <h1 className="font-brand text-subBrand text-3xl md:text-5xl">
          International
        </h1>
        <div className="flex flex-wrap items-stretch mt-5 justify-center">
          {domestic.map((item) => (
            <div className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-5">
              <Affiliation image={item.image} name={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliatedClubs;
