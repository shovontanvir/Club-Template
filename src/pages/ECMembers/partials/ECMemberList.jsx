import React from "react";

const ECMemberList = ({ image, name, role, details }) => {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row border border-brand rounded-xl w-full my-10">
      <div className="overflow-hidden lg:basis-1/4 p-3 lg:p-5 xl:p-10">
        <img src={image} alt="member avatar" className="rounded-xl mx-auto" />
      </div>
      <div className="px-3 lg:px-5 py-5 xl:px-10 xl:py-16 lg:basis-3/4 text-center lg:text-start">
        <h1 className="font-brand text-3xl">{name}</h1>
        <h1 className="font-poppins tracking-[0.25rem] text-xs font-extraligh">
          {role}
        </h1>
        <p className="font-poppins text-md font-extralight text-[#6A6E71] mt-3">
          {details}
        </p>
      </div>
    </div>
  );
};

export default ECMemberList;
