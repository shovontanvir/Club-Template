import React from "react";
import MemberItem from "./MemberItem";
import members from "../dummydata/Members";

const CommitteeMain = () => {
  return (
    <div className="flex flex-wrap flex-row items-center justify-center">
      {members.map((item) => (
        <div className="overflow-hidden relative group basis-1/3 sm:basis-1/4 p-1">
          <MemberItem name={item.name} role={item.role} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default CommitteeMain;
