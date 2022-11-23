import React from "react";

import indoor1 from "../images/indoor1.png";
import indoor2 from "../images/indoor2.png";
import indoor3 from "../images/indoor3.png";
import indoor4 from "../images/indoor4.png";
import indoor5 from "../images/indoor5.png";
import indoor6 from "../images/indoor6.png";
import FacilitiesItem from "./FacilitiesItem";

const SportsMain = () => {
  const indoorSports = [
    {
      name: "Indoor Golf",
      title: "Title Goes Here",
      image: indoor1,
      navigate: "/feature-details",
    },
    {
      name: "Table Tennis",
      title: "Title Goes Here",
      image: indoor2,
      navigate: "/feature-details",
    },
    {
      name: "Billiard & Snookers",
      title: "Title Goes Here",
      image: indoor3,
      navigate: "/feature-details",
    },
    {
      name: "Foosball",
      title: "Title Goes Here",
      image: indoor4,
      navigate: "/feature-details",
    },
    {
      name: "Dartboard",
      title: "Title Goes Here",
      image: indoor5,
      navigate: "/feature-details",
    },
    {
      name: "Chess",
      title: "Title Goes Here",
      image: indoor6,
      navigate: "/feature-details",
    },
  ];
  const outdoorSports = [
    {
      name: "Indoor Golf",
      title: "Title Goes Here",
      image: indoor1,
      navigate: "/feature-details",
    },
    {
      name: "Table Tennis",
      title: "Title Goes Here",
      image: indoor2,
      navigate: "/feature-details",
    },
    {
      name: "Billiard & Snookers",
      title: "Title Goes Here",
      image: indoor3,
      navigate: "/feature-details",
    },
    {
      name: "Foosball",
      title: "Title Goes Here",
      image: indoor4,
      navigate: "/feature-details",
    },
    {
      name: "Dartboard",
      title: "Title Goes Here",
      image: indoor5,
      navigate: "/feature-details",
    },
    {
      name: "Chess",
      title: "Title Goes Here",
      image: indoor6,
      navigate: "/feature-details",
    },
  ];
  return (
    <div>
      <div className="px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 text-center">
        <h1 className="text-brand font-brand text-3xl md:text-5xl mb-10">
          Indoor Sports
        </h1>
        <div className="flex flex-wrap">
          {indoorSports.map((item) => (
            <div className="basis-full sm:basis-1/2 lg:basis-1/3 p-3">
              <FacilitiesItem
                name={item.name}
                title={item.title}
                image={item.image}
                navigate={item.navigate}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-20 py-16 text-center">
        <h1 className="text-brand font-brand text-5xl mb-10">Outdoor Sports</h1>
        <div className="flex flex-wrap">
          {outdoorSports.map((item) => (
            <div className="basis-1/3 p-3">
              <FacilitiesItem
                name={item.name}
                title={item.title}
                image={item.image}
                navigate={item.navigate}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsMain;
