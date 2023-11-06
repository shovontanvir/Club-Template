import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MemberItem = ({ name, role, image }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="w-full h-full overflow-hidden bg-black z-30 absolute opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out p-10 text-white"></div>
      <div className="w-full z-50 absolute bottom-2 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out p-2 text-white">
        <div className="flex justify-between items-end px-3 w-full">
          <div>
            <div className="font-brand text-lg md:text-xl lg:text-3xl">
              {name}
            </div>

            <div className="font-poppins tracking-[0.25rem] text-xs font-extralight">
              {role}
            </div>
          </div>
          <div className="px-10">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <img
        alt="member"
        className=" group-hover:scale-110 transition duration-500 ease-in-out !w-full h-full"
        src={image}
      />
    </div>
  );
};

export default MemberItem;
