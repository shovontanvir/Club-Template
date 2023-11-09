import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ name, image, details, schedule, order }) => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="flex items-center border border-brand">
        <div className={`h-full ${order}`}>
          <img src={image} alt={name} className="h-full aspect-square" />
        </div>
        <div className="flex flex-col py-5 pr-12">
          <div className="flex mb-3">
            <div className="text-right font-brand text-brand w-1/4 pr-5 text-xl">
              <h1>Event Name:</h1>
            </div>
            <div className="text-brand w-3/4">
              <h1 className="font-poppins text-black">{name}</h1>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="text-right font-brand text-brand w-1/4 pr-5 text-xl">
              <h1>Details:</h1>
            </div>
            <div className="text-brand w-3/4">
              <h1 className="font-poppins text-black">{details}</h1>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="text-right font-brand text-brand w-1/4 pr-5 text-xl">
              <h1>Schedule:</h1>
            </div>
            <div className="text-brand w-3/4">
              <h1 className="font-poppins text-black">{schedule}</h1>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4"></div>
            <div onClick={() => navigate("/event-details")}>
              <button
                className={`text-sm font-brand border border-brand px-16 py-2 text-black hover:bg-brand duration-500 relative after:border-0 after:hover:border after:border-brand after:inset-0 after:hover:-inset-2 after:absolute after:transition-all after:duration-500`}
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
