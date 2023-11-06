import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import MessageComponent from "../../components/MessageComponent";

const MessageFrom = ({ messagePerson, url }) => {
  return (
    <>
      <ClassicHeader
        headline={`${messagePerson}'s Message`}
        bgClass="bg-classic"
      />
      <MessageComponent url={url} />
    </>
  );
};

export default MessageFrom;
