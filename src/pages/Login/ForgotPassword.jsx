import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  // initialize react hook form
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  // submit handler
  const onSubmit = (data) => {
    // console.log(data);
    mutate(data);
    reset();
  };

  return (
    <>
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
              name="otp1"
              id="otp1"
              className=" w-full aspect-video focus-within:outline-none border border-brand text-center"
              onFocus={() => setErrorMessage(false)}
              {...register("otp1", {
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

export default ForgotPassword;
