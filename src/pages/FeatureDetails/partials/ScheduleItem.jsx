import React from "react";
import calender from "../../../assets/images/globals/calender.png";

const ScheduleItem = ({ startDate, startTime, endDate, endTime }) => {
  return (
    <>
      <span>
        <img src={calender} alt="calender icon" className="w-1/2" />
      </span>
      <span>
        {startDate + " - " + endDate + ": " + startTime + " - " + endTime}
      </span>
    </>
  );
};

export default ScheduleItem;
