import React from "react";
import SliderHeader from "./partials/SliderHeader";
import About from "./partials/About";
import TheClub from "./partials/TheClub";
import MessageComponent from "../../components/MessageComponent";
import Committe from "./partials/Committe";
import Facilities from "./partials/Facilities";

const Landing = () => {
  return (
    <>
      <SliderHeader />
      <div className="bg-about py-8 md:py-16">
        <About />
        <TheClub />
      </div>
      <MessageComponent url="club/message/get?messageFrom=Founder President Message" />
      <Committe
        url="ec-member-list?page=1&searchKey=&size=10"
        heading="Executive Committee - 2022"
      />
      <Facilities />
    </>
  );
};

export default Landing;
