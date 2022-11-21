import React from "react";
import ClassicBg from "../components/ClassicBg";
import ElectionSingle from "../components/ElectionSingle";
import vs from "../images/vs.png";
import ec1 from "../images/ec1.png";
import ec2 from "../images/ec2.png";

const ElectionLive = () => {
  return (
    <div>
      <ClassicBg headline="Election Live" bgClass="bg-classic" />
      <div className="py-5">
        <div className="flex flex-wrap items-center justify-around px-64 py-16 bg-[#F1EBE2]">
          <div className="basis-1/3 flex justify-center">
            <ElectionSingle name="Mahedi Mosharraf" image={ec1} score="46" />
          </div>
          <div className="basis-1/3 flex justify-center">
            <img src={vs} alt="vs" className="w-1/4" />
          </div>
          <div className="basis-1/3 flex justify-center">
            <ElectionSingle name="Md Rashedul Niloy" image={ec2} score="48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionLive;
