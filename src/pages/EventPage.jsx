import React from "react";
import ClassicBg from "../components/ClassicBg";
import EventItem from "../components/EventItem";
import events from "../dummydata/Events";

const EventPage = () => {
  return (
    <div>
      <ClassicBg headline="Event" bgClass="bg-events" />

      <div className="px-32 py-16">
        {events.map((item, index) => (
          <EventItem
            name={item.name}
            details={item.details.slice(1, 200)}
            schedule={item.schedule}
            image={item.image}
            order={index % 2 !== 0 ? "order-2" : null}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
