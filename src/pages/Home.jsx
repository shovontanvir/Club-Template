import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import TheClub from "../components/TheClub";
import MessageFrom from "../components/MessageFrom";
import president from "../images/avatar1.png";
import Committee from "../components/Committee";
import Facilities from "../components/Facilities";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-about py-8 md:py-16">
        <About />
        <TheClub />
      </div>
      <MessageFrom
        avatar={president}
        designation="President"
        messageBody={`I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. I was deeply touched and honored. I assure you that I shall make all endeavors to the best of my ability. 

        I would like to Congratulations to all the elected members of the Executive Committee 2019-2020.`}
        name="Rafiuzzaman Sifat"
      />

      <Committee heading="Executive Committe - 2022" />

      <Facilities />
    </>
  );
};

export default Home;
