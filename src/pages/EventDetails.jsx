import React from "react";
import ClassicBg from "../components/ClassicBg";
import EventDetailsItem from "../components/EventDetailsItem";
import MemberItem from "../components/MemberItem";
import ScheduleItem from "../components/ScheduleItem";
import events from "../dummydata/Events";

const EventDetails = () => {
  const event = events[0];
  return (
    <div>
      <ClassicBg headline={event.name} bgClass="bg-eventdetails" />

      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <EventDetailsItem heading="Event Details">
          <p className="text-sm md:text-base text-center md:text-start">
            {event.details}
          </p>
        </EventDetailsItem>

        <EventDetailsItem heading="Event Scedule">
          <ScheduleItem
            startDate={event.startDate}
            endDate={event.endDate}
            startTime={event.startTime}
            endTime={event.endTime}
          />
        </EventDetailsItem>

        <EventDetailsItem heading="Event Details">
          <h1 className="font-poppins">{event.venue}</h1>
        </EventDetailsItem>

        <div className="md:px-6">
          <h1 className="font-brand text-brand  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4 md:my-12 lg:my-16">
            Event <br className="hidden md:block" /> Guests
          </h1>
          <div className="flex flex-wrap">
            {event.guests.map((guest, index) => (
              <div className="overflow-hidden relative group basis-1/3 p-2 sm:p-3 md:p-4 lg:p-5">
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
        <div className="pb-8 md:pb-16">
          <div className="w-3/4 md:w-1/2 relative mx-auto my-8 md:my-16">
            <div className="">
              <img src={event.eventImage[0]} alt="Event" />
            </div>
            <div className="absolute z-50 -left-[15%] -bottom-[15%] w-1/2 md:w-1/3 aspect-square">
              <img src={event.eventImage[1]} alt="Event" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
