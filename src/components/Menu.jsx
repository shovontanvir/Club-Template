import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/globals/logo.png";
import { menuItems } from "../router/Paths";
import SubMenu from "./SubMenu";
const Menu = (props) => {
  const [subMenuIsOn, setSubMenuIsOn] = useState(false);
  const [menuId, setMenuId] = useState();

  const openSubMenu = () => {
    setSubMenuIsOn(true);
  };

  const closeSubMenu = () => {
    setSubMenuIsOn(false);
  };

  const subMenuHandler = (id) => {
    setMenuId(id);
    if (subMenuIsOn && id !== menuId) {
      closeSubMenu();
      openSubMenu();
    } else if (!subMenuIsOn && id === menuId) {
      openSubMenu();
    } else if (!subMenuIsOn && id !== menuId) {
      openSubMenu();
    } else {
      closeSubMenu();
    }
  };

  return (
    <div>
      <div
        className={`h-screen w-screen bg-menu fixed inset-0 z-[100] flex items-center px-8 sm:px-16 md:px-32 transition duration-1000 ease-in-out ${
          props.isOn ? "block" : "hidden"
        }`}
      >
        <div className="absolute right-0 top-2  px-8 sm:px-16 md:px-32 py-12 justify-end z-[101] flex items-center hover:text-brand transition duration-500 group">
          <h1
            className="font-brand text-sm md:text-base lg:text-lg xl:text-xl mt-1 text-[#7F8A8D] cursor-pointer group-hover:text-subBrand"
            onClick={props.onClick}
          >
            Close
          </h1>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-white text-3xl pl-3 group-hover:text-brand group-hover:scale-125 transition duration-300 cursor-pointer"
            onClick={props.onClick}
          />
        </div>
        <div className="w-full sm:w-1/2 sm:border-r sm:border-gray-600 py-10">
          <ul className="text-white p-10">
            {menuItems.map((item, index) => (
              <li
                className="my-4 cursor-pointer flex justify-between relative"
                key={index}
              >
                <Link
                  to={item.path}
                  onClick={props.onClick}
                  className="relative"
                >
                  <h1 className="font-brand text-base sm:text-lg md:text-xl lg:text-3xl hover:text-brand hover:scale-110 transition duration-300">
                    <span className="pr-4 font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-[#5C5C5C]">
                      {index + 1 < 10
                        ? "0" + (index + 1) + "."
                        : index + 1 + "."}
                    </span>
                    {item.name}
                  </h1>
                </Link>

                {item.childMenu ? (
                  <div className="z-[101]">
                    <div className="w-full text-end">
                      <FontAwesomeIcon
                        key={item.id}
                        icon={
                          !subMenuIsOn
                            ? faPlus
                            : subMenuIsOn && item.id === menuId
                            ? faMinus
                            : faPlus
                        }
                        className="text-base sm:text-lg md:text-xl lg-text-2xl text-[#5C5C5C] hover:text-brand hover:scale-125 transition duration-300 cursor-pointer z-[550]"
                        onClick={() => subMenuHandler(item.id)}
                      />
                    </div>
                    {/* <SubMenu /> */}
                    {subMenuIsOn && item.id === menuId && (
                      <SubMenu
                        item={item.childMenu}
                        onClick={props.onClick}
                        isOpen={subMenuIsOn}
                      />
                    )}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 hidden sm:flex flex-col justify-center">
          <div className="text-center mb-20">
            <img src={logo} alt="logo" className="mx-auto mb-5 w-1/4" />
            {/* <h1 className="lowercase text-white font-poppins tex-xl sm:text-2xl md:text-3xl lg:text-4xl text-5xl font-light">
              Banani Club
            </h1> */}
          </div>
          <div className="hidden lg:flex flex-col justify-center">
            <div className="w-1/2 mx-auto my-5">
              <h1 className="font-brand text-brand text-xl">Address</h1>
              <h1 className="font-poppins text-white text-xl font-extralight">
                105 & 109, Road No. 1, Dhaka 1213
              </h1>
            </div>
            <div className="w-1/2 mx-auto my-5">
              <h1 className="font-brand text-brand text-xl">Contact</h1>
              <h1 className="font-poppins text-white text-xl font-extralight">
                +8801618-855555
              </h1>
              <h1 className="font-poppins text-[#A5A6A7]">
                info#bananiclub.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
