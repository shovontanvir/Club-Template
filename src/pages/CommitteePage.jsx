import React from "react";
import ClassicBg from "../components/ClassicBg";
import CommitteeMain from "../components/CommitteeMain";

const CommitteePage = (props) => {
  return (
    <div>
      <ClassicBg headline={props.headline} bgClass="bg-classic" />
      <div className="p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32">
        <CommitteeMain />
      </div>
    </div>
  );
};

export default CommitteePage;
