import React from "react";

const Affiliation = (props) => {
  return (
    <div className="h-3/4">
      <div className="bg-white p-5 mb-5 h-full flex items-center">
        <img src={props.image} alt={props.name} className="mx-auto" />
      </div>
      <h1 className="font-brand text-black">{props.name}</h1>
    </div>
  );
};

export default Affiliation;
