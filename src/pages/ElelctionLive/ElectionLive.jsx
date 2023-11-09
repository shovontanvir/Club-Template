import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import ec1 from "../../assets/images/ec members/ec1.png";
import ec2 from "../../assets/images/ec members/ec2.png";
import ElectionCard from "./partials/ElectionCard";
import vs from "../../assets/images/globals/vs.png";
const ElectionLive = () => {
  return (
    <>
      <ClassicHeader headline="Election Live" bgClass="bg-classic" />
      <div className="py-5">
        <div className="flex flex-wrap items-center justify-around px-64 py-16 bg-[#F1EBE2]">
          <div className="basis-1/3 flex justify-center">
            <ElectionCard name="Mahedi Mosharraf" image={ec1} score="46" />
          </div>
          <div className="basis-1/3 flex justify-center">
            <img src={vs} alt="vs" className="w-1/4" />
          </div>
          <div className="basis-1/3 flex justify-center">
            <ElectionCard name="Md Rashedul Niloy" image={ec2} score="48" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectionLive;
