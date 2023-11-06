import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import ClubHistoryCard from "./partials/ClubHistoryCard";

const ClubHistory = () => {
  return (
    <>
      <ClassicHeader headline="Club History" bgClass="bg-classic" />
      <ClubHistoryCard />
    </>
  );
};

export default ClubHistory;
