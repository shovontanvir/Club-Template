import React from "react";

const ElectionCard = ({ image, name, score }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt="avatar"
        className="aspect-square rounded-full w-1/2 mx-auto"
      />
      <h1 className="font-brand text-3xl my-5 font-light">{name}</h1>
      <div className="border border-brand w-3/4 px-5 py-3 mx-auto  relative after:border-0 after:hover:border after:border-brand after:inset-0 after:hover:-inset-2 after:absolute after:transition-all after:duration-300 group">
        <h1 className="text-5xl text-brand font-brand group-hover:scale-125 transition duration-500">
          {score}
        </h1>
      </div>
    </div>
  );
};

export default ElectionCard;
