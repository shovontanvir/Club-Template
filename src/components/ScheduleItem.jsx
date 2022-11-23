import React from "react";
import calender from "../images/calender.png";

const ScheduleItem = (props) => {
  return (
    <>
      <h1 className="flex items-center">
        <span>
          <img src={calender} alt="calender icon" className="w-1/2" />
        </span>
        <span>
          {props.startDate +
            " - " +
            props.endDate +
            ": " +
            props.startTime +
            " - " +
            props.endTime}
        </span>
      </h1>
    </>
  );
};

export default ScheduleItem;
