import React from "react";
import ClassicBg from "../components/ClassicBg";
import MessageFrom from "../components/MessageFrom";

// import president from "../images/avatar1.png";

const PersonsMessage = (props) => {
  return (
    <div>
      <ClassicBg headline={props.headline} bgClass="bg-classic" />
      <MessageFrom url={props.url} />
    </div>
  );
};

export default PersonsMessage;
