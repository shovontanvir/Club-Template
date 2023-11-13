import { useForm } from "react-hook-form";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { loginFunc } from "../../Services/apiFunctions";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  // initialize react hook form
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  // submit handler
  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
    // reset();
  };

  // initialize login handler

  const loginHandler = (data) => {
    return loginFunc("login", data);
  };

  const { mutate } = useMutation(loginHandler, {
    onSuccess: (response) => {
      console.log(response);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("access_token", response.data.accessToken);
      localStorage.setItem("user", response.data.user);
      navigate("/");
    },
    onError: (err) => {
      // console.log(err.response.data.message);
      // setLoginError(true);
      // setErrorMessage(err.response.data.message);
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
        <div className="flex flex-col items-start w-full">
          <label htmlFor="email">
            {errors.mobile && errors.mobile.type === "required" ? (
              <span className="text-subBrand text-xs">
                (**Phone is required)
              </span>
            ) : errors.mobile ? (
              <span className="text-subBrand text-xs">
                {`(**${errors.mobile.message})`}
              </span>
            ) : (
              ""
            )}
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="Mobile Number"
            className="px-5 py-4 w-full my-2 focus-within:outline-none focus:border focus:border-brand placeholder:font-brand placeholder:text-[#222]"
            onFocus={() => setErrorMessage(false)}
            {...register("mobile", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="email">
            {errors.password && errors.password.type === "required" && (
              <span className="text-subBrand text-xs">
                (**Password is required)
              </span>
            )}
          </label>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="px-5 py-4 w-full my-2 focus-within:outline-none focus:border focus:border-brand placeholder:font-brand placeholder:text-[#222]"
            {...register("password", { required: true })}
          />
        </div>
        <h1
          className="font-brand text-[#222] px-5 ml-auto my-3 cursor-pointer"
          onClick={() => navigate("/forgot-password")}
        >
          Lost Your Password?
        </h1>
        <div className="w-full">
          <button
            type="submit"
            className="w-full px-20 py-4 tracking-[3.2px] font-brand text-[#222] uppercase border-2 border-brand my-5 hover:bg-brand hover:text-white transition-all duration-700"
          >
            Member Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
