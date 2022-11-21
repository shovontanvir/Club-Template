import React from "react";
import ClassicBg from "../components/ClassicBg";
import EventDetailsItem from "../components/EventDetailsItem";
import MemberItem from "../components/MemberItem";
import events from "../dummydata/Events";
import calender from "../images/calender.png";

const EventDetails = () => {
  const event = events[0];
  return (
    <div>
      <ClassicBg headline={event.name} bgClass="bg-eventdetails" />

      <div className="px-32">
        <EventDetailsItem heading="Event Details">
          <h1>{event.details}</h1>
        </EventDetailsItem>

        <EventDetailsItem heading="Event Scedule">
          <h1 className="flex items-center">
            <span>
              <img src={calender} alt="calender icon" className="w-1/2" />
            </span>
            <span>
              {event.startDate +
                " - " +
                event.endDate +
                ": " +
                event.startTime +
                " - " +
                event.endTime}
            </span>
          </h1>
        </EventDetailsItem>

        <EventDetailsItem heading="Event Details">
          <h1 className="font-poppins">{event.venue}</h1>
        </EventDetailsItem>

        <div className="px-6">
          <h1 className="font-brand text-brand text-5xl my-16">
            Event <br className="hidden md:block" /> Guests
          </h1>
          <div className="flex flex-wrap">
            {event.guests.map((guest, index) => (
              <div className="overflow-hidden relative group basis-1/3 p-5">
                <MemberItem
                  key={index.toString()}
                  image={guest.guestImage}
                  name={guest.guestName}
                  role={guest.guestRole}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 relative mx-auto my-16">
          <div className="absolute inset-0">
            <img src={event.eventImage[0]} alt="Event" />
          </div>
          <div>
            <img src={event.eventImage[1]} alt="Event" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
