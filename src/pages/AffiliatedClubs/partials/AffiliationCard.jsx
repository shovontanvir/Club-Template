import React from "react";

const AffiliationCard = ({ image, name }) => {
  return (
    <div className="h-3/4">
      <div className="bg-white p-5 mb-5 h-full flex items-center">
        <img src={image} alt={name} className="mx-auto" />
      </div>
      <h1 className="font-brand text-black">{name}</h1>
    </div>
  );
};

export default AffiliationCard;
