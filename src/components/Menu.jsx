import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/globals/logo.png";
import { menuItems } from "../router/Paths";
import SubMenu from "./SubMenu";
import protectedMenuItems from "../router/ProtectedPaths";
const Menu = ({ onClick, isOn }) => {
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
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  const authHandler = () => {
    !isLoggedIn
      ? (() => {
          navigate("/login");
          // onClick();
        })()
      : (() => {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("access_token");
          navigate("/");
          onClick();
        })();
  };

  return (
    <div
      className={`h-screen w-screen overflow-y-scroll bg-menu fixed inset-0 z-[1000] flex items-center pt-0 sm:pt-80 md:pt-0 sm:px-16 md:px-32 transition duration-1000 ease-in-out ${
        isOn ? "block" : "hidden"
      }`}
    >
      <div className="absolute right-0 top-2  px-8 sm:px-16 md:px-32 py-12 justify-end z-[101] flex items-center hover:text-brand transition duration-500 group">
        <h1
          className="font-brand text-sm md:text-base lg:text-lg xl:text-xl mt-1 text-[#7F8A8D] cursor-pointer group-hover:text-subBrand"
          onClick={onClick}
        >
          Close
        </h1>
        <FontAwesomeIcon
          icon={faTimes}
          className="text-white text-3xl pl-3 group-hover:text-brand group-hover:scale-125 transition duration-300 cursor-pointer"
          onClick={onClick}
        />
      </div>
      <div className="w-full lg:w-1/2 lg:border-r lg:border-gray-600 py-10">
        <ul className="text-white p-5 sm:p-10">
          {menuItems.map((item, index) => (
            <li
              className="my-4 cursor-pointer flex justify-between relative"
              key={item.name}
            >
              {!item.childMenu ? (
                <Link to={item.path} onClick={onClick} className="relative">
                  <h1 className="font-brand text-base sm:text-lg md:text-xl lg:text-3xl hover:text-brand hover:scale-110 transition duration-300">
                    <span className="pr-4 font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-[#5C5C5C]">
                      {index + 1 < 10
                        ? "0" + (index + 1) + "."
                        : index + 1 + "."}
                    </span>
                    {item.name}
                  </h1>
                </Link>
              ) : (
                <h1 className="font-brand text-base sm:text-lg md:text-xl lg:text-3xl hover:text-brand hover:scale-110 transition duration-300">
                  <span className="pr-4 font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-[#5C5C5C]">
                    {index + 1 < 10 ? "0" + (index + 1) + "." : index + 1 + "."}
                  </span>
                  {item.name}
                </h1>
              )}

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
                      onClick={onClick}
                      isOpen={subMenuIsOn}
                    />
                  )}
                </div>
              ) : null}
            </li>
          ))}
          {isLoggedIn &&
            protectedMenuItems.map((item, index) => (
              <li
                className="my-4 cursor-pointer flex justify-between relative"
                key={item.name}
              >
                <Link to={item.path} onClick={onClick} className="relative">
                  <h1 className="font-brand text-base sm:text-lg md:text-xl lg:text-3xl hover:text-brand hover:scale-110 transition duration-300">
                    <span className="pr-4 font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-[#5C5C5C]">
                      {menuItems.length + index + 1}
                    </span>
                    {item.name}
                  </h1>
                </Link>
              </li>
            ))}
          <li onClick={authHandler} className="cursor-pointer">
            <h1 className="font-brand text-base sm:text-lg md:text-xl lg:text-3xl hover:text-brand hover:scale-110 transition duration-300">
              <span className="pr-4 font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-[#5C5C5C]">
                {menuItems.length + protectedMenuItems.length + 1}
              </span>
              {!isLoggedIn ? "Login" : "Log Out"}
            </h1>
          </li>
        </ul>
      </div>
      <div className="w-1/2 hidden lg:flex flex-col justify-center">
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
            <h1 className="font-poppins text-[#A5A6A7]">info#bananiclub.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
