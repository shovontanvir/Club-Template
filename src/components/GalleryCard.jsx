import React from "react";

const GalleryCard = (props) => {
  return <div className="overflow-hidden relative">{props.children}</div>;
};

export default GalleryCard;
