import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BtnReadMore = () => {
  return (
    <div className="group">
      <button className="mt-2">
        <span className="font-brand font-light hidden group-hover:inline-block">
          Read More
        </span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="ml-2 font-thin group-hover:scale-125"
        />
      </button>
    </div>
  );
};

export default BtnReadMore;
