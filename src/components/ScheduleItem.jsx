import React from "react";
import calender from "../assets/images/globals/calender.png";

const ScheduleItem = ({ startDate, startTime, endDate, endTime }) => {
  return (
    <h1 className="flex items-center">
      <span>
        <img src={calender} alt="calender icon" className="w-8 mr-3" />
      </span>
      <span>
        {startDate + " - " + endDate + ": " + startTime + " - " + endTime}
      </span>
    </h1>
  );
};

export default ScheduleItem;
