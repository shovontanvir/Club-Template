import React from "react";
import PresentEcMembers from "../components/PresentEcMembers";
import ClassicBg from "../components/ClassicBg";

const EcMembersPage = (props) => {
  return (
    <div>
      <ClassicBg headline={props.headline} bgClass={props.bgClass} />

      <div className="bg-[#F5F5F5] p-8 md:p-16 lg:p-24 xl:p-32">
        <PresentEcMembers />
      </div>
    </div>
  );
};

export default EcMembersPage;
