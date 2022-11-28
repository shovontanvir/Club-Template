import React from "react";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
  return (
    <ul
      className={`absolute top-0 left-1/2 pr-10 ${
        props.isopen ? "z-[1001]" : "-z-[1001]"
      }`}
    >
      {props.item.map((cItem, index) => (
        <li className="my-4 cursor-pointer" key={index}>
          <Link to={cItem.path} onClick={props.onClick}>
            <h1 className="font-brand text-lg text-[#5C5C5C] hover:text-brand  transition duration-300">
              {cItem.name}
            </h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
