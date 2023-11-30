import React from "react";
import Button from "./Button";
import logo from "../assets/images/globals/logo.png";
import { useState } from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuIsOn, setMenuIsOn] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const navBgHandler = () => {
    window.scrollY >= 145 ? setNavBg(true) : setNavBg(false);
  };

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

  window.addEventListener("scroll", navBgHandler);

  const openMenu = () => {
    setMenuIsOn(true);
    disableScroll();
  };
  const closeMenu = () => {
    setMenuIsOn(false);
    enableScroll();
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      <div
        className={`sticky md:fixed z-[999] top-0 w-full bg-bgHome ${
          !menuIsOn && navBg ? "md:bg-bgHome" : "md:bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8 sm:px-16 md:px-32 py-2 sm:py-5 md:py-6">
          <div onClick={() => navigate("/")}>
            <img
              src={logo}
              className="w-[2.5rem] md:w-[4.5625rem]"
              alt="logo"
            />
          </div>
          <div className="flex items-center">
            {!isLoggedIn && (
              <div
                className="hidden sm:block"
                onClick={() => navigate("/login")}
              >
                <Button name="Member Login" />
              </div>
            )}
            <div
              className="w-8 md:w-10 h-4 md:h-6 relative ml-3 group cursor-pointer"
              onClick={() => openMenu()}
            >
              <span className="w-1/2 h-[0.125rem] md:h-[0.25rem] absolute top-0 bg-brand group-hover:w-full duration-500"></span>
              <span className="w-full h-[0.125rem] md:h-[0.25rem] absolute top-1/2 bg-brand"></span>
              <span className="w-1/2 h-[0.125rem] md:h-[0.25rem] absolute top-full right-0 bg-brand group-hover:w-full duration-500"></span>
            </div>
          </div>
        </div>
      </div>

      {menuIsOn && <Menu onClick={() => closeMenu()} isOn={menuIsOn} />}
    </>
  );
};

export default Navbar;
