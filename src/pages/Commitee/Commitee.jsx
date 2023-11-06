import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import CommiteePage from "./partials/CommiteePage";

const Commitee = ({ headline, url }) => {
  return (
    <>
      <ClassicHeader headline={headline} bgClass="bg-classic" />
      <CommiteePage url={url} />
    </>
  );
};

export default Commitee;
