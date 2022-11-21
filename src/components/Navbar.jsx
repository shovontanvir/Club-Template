import React from "react";
import Button from "./Button";
import logo from "../images/logo.png";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [menuIsOn, setMenuIsOn] = useState(false);

  const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const enableScroll = () => {
    window.onscroll = function () {};
  };

  const openMenu = () => {
    setMenuIsOn(true);
    disableScroll();
  };
  const closeMenu = () => {
    setMenuIsOn(false);
    enableScroll();
  };

  return (
    <>
      <div className="md:absolute z-50 top-0 w-full bg-bgHome border-b border-gray-500 md:border-b-0 md:bg-transparent">
        <div className="flex items-center justify-between px-4 sm:px-16 md:px-32 py-2 sm:py-5 md:py-6 lg:py-8 xl:py-11">
          <img src={logo} className="w-[4.5625rem]" alt="logo" />
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Button name="Member Login" />
            </div>
            <div
              className="w-10 h-6 relative ml-3 group cursor-pointer"
              onClick={() => openMenu()}
            >
              <span className="w-1/2 h-[0.25rem] absolute top-0 bg-brand group-hover:w-full duration-500"></span>
              <span className="w-full h-[0.25rem] absolute top-1/2 bg-brand"></span>
              <span className="w-1/2 h-[0.25rem] absolute top-full right-0 bg-brand group-hover:w-full duration-500"></span>
            </div>
          </div>
        </div>
      </div>

      {menuIsOn && <Menu onClick={() => closeMenu()} isOn={menuIsOn} />}
    </>
  );
};

export default Navbar;
