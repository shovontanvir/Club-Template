import React from "react";
import banani from "../../../assets/images/globals/Banani.png";
import Cards from "./Cards";

const TheClub = () => {
  return (
    <div className="mt-20">
      <div className="px-20 md:px-28 xl:px-32 mb-5">
        <div className="relative w-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-brand text-subBrand">
            The Club
          </h1>
          <img
            src={banani}
            alt="banani"
            className="absolute top-[37%] left-[5%] -translate-y-1/2 w-1/5"
          />
        </div>
      </div>
      <div className="px-16 md:px-24 xl:px-28 flex flex-col lg:flex-row">
        <div>
          <Cards
            designation="Members"
            message="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of"
          />
        </div>
        <div className="mt-4 lg:mt-14">
          <Cards
            designation="President Mesaage"
            message="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of"
          />
        </div>
        <div className="mt-4 lg:mt-28">
          <Cards
            designation="Advisor Message"
            message="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of"
          />
        </div>
      </div>
    </div>
  );
};

export default TheClub;
