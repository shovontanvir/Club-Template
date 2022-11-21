import React from "react";
import ClassicBg from "../components/ClassicBg";
import MessageFrom from "../components/MessageFrom";

import president from "../images/avatar1.png";

const PersonsMessage = (props) => {
  return (
    <div>
      <ClassicBg headline={props.headline} bgClass="bg-classic" />
      <MessageFrom
        avatar={president}
        designation={props.designation}
        messageBody={props.message}
        name={props.name}
      />
    </div>
  );
};

export default PersonsMessage;
