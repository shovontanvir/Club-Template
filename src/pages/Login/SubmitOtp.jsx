import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postApiData } from "../../Services/apiFunctions";

const SubmitOtp = () => {
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  // initialize react hook form
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  // submit handler
  const onSubmit = (data) => {
    const otp = data.otp1 + data.otp2 + data.otp3 + data.otp4;

    const finalData = {
      otp: otp,
      mobile: localStorage.getItem("mobile"),
    };

    mutate(finalData);
    // reset();
  };

  const postOTP = (data) => {
    return postApiData("login-with-otp-confirm", data);
  };

  const { mutate } = useMutation(postOTP, {
    onSuccess: (response) => {
      // console.log(response);
      !response.error
        ? (() => {
            localStorage.setItem("access_token", response.data.accessToken);
            localStorage.removeItem("mobile");
            navigate("/reset-password");
          })()
        : (() => {
            setLoginError(true);
            setErrorMessage(response.message);
            reset();
          })();
    },
    onError: (err) => {
      // console.log(err);
      //   setMobile();
      setLoginError(true);
      setErrorMessage(err.response.data.message);
    },
  });

  return (
    <>
      {loginError && <h1 className="text-subBrand">{errorMessage}</h1>}
      <form
        action="submit"
        className="w-full flex flex-col justify-between items-center my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="w-28 p-2">
            <input
              type="number"
              name="otp1"
              id="otp1"
              className=" w-full aspect-video focus-within:outline-none border border-brand text-center"
              onFocus={() => setErrorMessage(false)}
              {...register("otp1", {
                required: true,
              })}
            />
          </div>
          <div className="w-28 p-2">
            <input
              type="number"
              name="otp2"
              id="otp2"
              className=" w-full aspect-video focus-within:outline-none border border-brand text-center"
              onFocus={() => setErrorMessage(false)}
              {...register("otp2", {
                required: true,
              })}
            />
          </div>
          <div className="w-28 p-2">
            <input
              type="number"
              name="otp3"
              id="otp3"
              className=" w-full aspect-video focus-within:outline-none border border-brand text-center"
              onFocus={() => setErrorMessage(false)}
              {...register("otp3", {
                required: true,
              })}
            />
          </div>
          <div className="w-28 p-2">
            <input
              type="number"
              name="otp4"
              id="otp4"
              className=" w-full aspect-video focus-within:outline-none border border-brand text-center"
              onFocus={() => setErrorMessage(false)}
              {...register("otp4", {
                required: true,
              })}
            />
          </div>
        </div>

        <div className="w-full p-2 text-center">
          <button
            type="submit"
            className="w-full px-20 py-4 tracking-[3.2px] font-brand text-[#222] uppercase border-2 border-brand my-5 hover:bg-brand hover:text-white transition-all duration-700"
          >
            Submit
          </button>
          <h1
            className="font-brand text-[#222] px-5 ml-auto my-3 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </h1>
        </div>
      </form>
    </>
  );
};

export default SubmitOtp;
