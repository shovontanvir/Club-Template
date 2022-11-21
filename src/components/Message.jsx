import React from "react";
import ClassicBg from "./ClassicBg";
import MessageFrom from "./MessageFrom";
import president from "../images/avatar1.png";

const Message = () => {
  return (
    <div>
      <ClassicBg headline="Founder Advisor Message" />

      <MessageFrom
        avatar={president}
        designation="President"
        messageBody={`I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. I was deeply touched and honored. I assure you that I shall make all endeavors to the best of my ability. 

        I would like to Congratulations to all the elected members of the Executive Committee 2019-2020.`}
        name="Rafiuzzaman Sifat"
      />
    </div>
  );
};

export default Message;
