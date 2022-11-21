import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";

const EventItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="flex items-center border border-brand">
        <div className={`h-full ${props.order}`}>
          <img
            src={props.image}
            alt={props.name}
            className="h-full aspect-square"
          />
        </div>
        <div className="flex flex-col py-5 pr-12">
          <div className="flex mb-3">
            <div className="text-right font-brand text-brand w-1/4 pr-5 text-xl">
              <h1>Event Name:</h1>
            </div>
            <div className="text-brand w-3/4">
              <h1 className="font-poppins text-black">{props.name}</h1>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="text-right font-brand text-brand w-1/4 pr-5 text-xl">
              <h1>Details:</h1>
            </div>
            <div className="text-brand w-3/4">
              <h1 className="font-poppins text-black">{props.details}</h1>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="text-right font-brand text-brand w-1/4 pr-5 text-xl">
              <h1>Schedule:</h1>
            </div>
            <div className="text-brand w-3/4">
              <h1 className="font-poppins text-black">{props.schedule}</h1>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4"></div>
            <div onClick={() => navigate("/event-details")}>
              <Button name="More" class="!text-black !px-16 !py-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
