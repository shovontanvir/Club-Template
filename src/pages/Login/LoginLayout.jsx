import React from "react";
import logo from "../../assets/images/globals/logo.png";
import ClassicHeader from "../../components/ClassicHeader";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

const LoginLayout = ({ children, heading }) => {
  const path = useLocation().pathname;

  return (
    <>
      <ClassicHeader
        headline={path === "/login" ? "Member Login" : "Forgot Password"}
        bgClass="bg-classic"
      />
      <div className="w-screen flex justify-center items-center p-28">
        <div className="w-2/3 py-20 flex justify-center items-center bg-about relative">
          <div className="bg-bgHome rounded-full p-5 aspect-square flex justify-center items-center border-8 border-[#F7F8F2] absolute -top-[12%]">
            <img src={logo} alt="logo" />
          </div>
          <div className="px-36 w-full pt-10">
            <h1
              className={`font-brand ${
                path === "/login"
                  ? "text-4xl text-center"
                  : "text-lg text-start"
              }`}
            >
              {path === "/login" ? "Login" : "Enter OTP"}
            </h1>
            <div className="w-full">
              {path === "/login" ? <Login /> : <ForgotPassword />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
