import React from "react";
import user from "../../../assets/images/globals/user.png";

const NoticeListCard = ({ date, month, noticeText, name }) => {
  return (
    <div className="p-6 bg-[#F7F8F2] flex items-center my-8 rounded-lg">
      <div className="basis-1/5 aspect-square font-brand text-6xl text-brand text-center bg-about flex flex-col justify-center items-center">
        <h1>{date}</h1>
        <h1>{month}</h1>
      </div>
      <div className="basis-4/5 px-3">
        <h1 className="font-brand text-xl">{noticeText}</h1>
        <p className="mt-4 flex items-center">
          <img src={user} alt="user" className="w-4" />
          <span className="text-[#B1B1B1] ml-3 capitalize font-light">
            {name}
          </span>
        </p>
      </div>
    </div>
  );
};

export default NoticeListCard;
