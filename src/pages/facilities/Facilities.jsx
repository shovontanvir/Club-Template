import React from "react";
import ClassicBg from "../../components/ClassicBg";
import FacilitiesMain from "../../components/FacilitiesMain";

const Facilities = (props) => {
  return (
    <div>
      <ClassicBg headline={props.headline} bgClass={props.bgClass} />

      <FacilitiesMain />
    </div>
  );
};

export default Facilities;
