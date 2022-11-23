import React from "react";
import { Link } from "react-router-dom";
import facilities from "../dummydata/Facilities";
import FacilitiesItem from "./FacilitiesItem";

const FacilitiesMain = () => {
  return (
    <div className="flex flex-wrap px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16">
      {facilities.map((item) => (
        <Link to={item.to} className="basis-full sm:basis-1/2 lg:basis-1/3">
          <div className="p-3 aspect-square">
            <FacilitiesItem
              name={item.name}
              title={item.title}
              image={item.image}
              navigate={item.navigate}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FacilitiesMain;
