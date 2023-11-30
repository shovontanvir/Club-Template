import React from "react";
import calender from "../assets/images/globals/calender.png";

const ScheduleItem = ({ slot }) => {
  return (
    <span className="flex items-center">
      <span>
        <img src={calender} alt="calender icon" className="w-8 mr-3" />
      </span>
      <span>{slot}</span>
    </span>
  );
};

export default ScheduleItem;
