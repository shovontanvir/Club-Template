import React from "react";

const EventDetailsItem = ({ heading, children }) => {
  const headline = heading.split(" ");
  return (
    <div className="flex flex-col md:flex-row p-5 justify-between items-center border-b border-dashed border-black my-3">
      <div className="md:w-1/6">
        <h1 className="font-brand text-brand text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {headline[0]} <br className="hidden md:block" /> {headline[1]}
        </h1>
      </div>
      <div className="md:w-3/4 md:pr-5">{children}</div>
    </div>
  );
};

export default EventDetailsItem;
