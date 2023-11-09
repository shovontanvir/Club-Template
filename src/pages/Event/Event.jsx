import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./partials/EventCard";

const Event = () => {
  const getEvents = () => {
    return getApiData("events");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["events-list"],
    getEvents
  );

  if (isLoading) return "Loading... ... ...";
  if (isError) return error.message;

  const events = data;
  console.log(events);
  return (
    <>
      <ClassicHeader headline="Event" bgClass="bg-events" />

      <div className="px-32 py-16">
        {events.map((item, index) => (
          <EventCard
            name={item.name}
            details={item.details.slice(1, 200)}
            schedule={item.schedule}
            image={item.image}
            order={index % 2 !== 0 ? "order-2" : null}
          />
        ))}
      </div>
    </>
  );
};

export default Event;
