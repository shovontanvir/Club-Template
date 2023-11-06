import React from "react";
import logo from "../assets/images/globals/logo.png";
import menuItems from "../router/Paths";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-8 md:px-12 lg:px-16 bg-footer-bg bg-cover text-white">
      <div className="flex border-b border-brand py-16 lg:py-32 xl:px-32 justify-center">
        <div className="basis-1/3 flex items-center justify-center">
          <img src={logo} alt="banani club logo" />
        </div>
        <div className="sm:flex flex-wrap basis-2/3 flex-col items-center hidden">
          <div className="flex flex-wrap">
            <div className=" px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 basis-1/2">
              <ul>
                {menuItems.slice(0, 6).map((item, index) => (
                  <li className="mb-2" key={index.toString()}>
                    <Link to={item.path}>
                      <h1 className="font-brand text-base sm:text-lg md:text-xl lg:text-2xl">
                        {item.name}
                      </h1>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 basis-1/2">
              <ul>
                {menuItems.slice(6, 12).map((item, index) => (
                  <li className="mb-2" key={index.toString()}>
                    <Link to={item.path}>
                      <h1 className="font-brand text-base sm:text-lg md:text-xl lg:text-2xl">
                        {item.name}
                      </h1>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-poppins text-sm px-20 mt-16 hidden lg:block">
              <div>
                <h1 className="text-brand mb-1">Banani Club Limited.</h1>
                <h1>05 & 109, Road-1, Block-F, Dhaka - 1213.</h1>
              </div>
              <div className="mt-5">
                <h1 className="mb-1">
                  <span className="text-brand pr-2">Mobile:</span>
                  <span>+880121-354354</span>
                </h1>
                <h1 className="mb-1">
                  <span className="text-brand pr-2">Tel:</span>
                  <span>+8801.2.987.2108-9</span>
                </h1>
                <h1 className="mb-1">
                  <span className="text-brand pr-2">Fax:</span>
                  <span>+8801.2.987.0713</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 w-full flex justify-center">
        <h1 className="tracking-[0.15rem] sm:tracking-[0.25rem] text-xs font-poppins text-center leading-8 sm:leading-none">
          <span className="uppercase">banani club ltd.</span>
          <span className="px-5">&#169;</span>
          <span>2022</span>
          <span className="px-5 hidden sm:inline">|</span>
          <br className="block sm:hidden" />
          <span className="text-brand">privacy policy</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
