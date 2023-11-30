import { useForm } from "react-hook-form";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { loginFunc, postApiData } from "../../Services/apiFunctions";
import { useMutation } from "@tanstack/react-query";

const ResetPassword = () => {
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

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

  // initialize login handler

  const postNewPassword = (data) => {
    return postApiData("profile/set/password", data);
  };

  const { mutate } = useMutation(postNewPassword, {
    onSuccess: (response) => {
      //   console.log(response);
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    },
    onError: (err) => {
      //   console.log(err.response.data.message);

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
        <div className="flex flex-col items-start w-full">
          <label htmlFor="password">
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
        <div className="flex flex-col items-start w-full">
          <label htmlFor="confirmPassword">
            {errors.confirmPassword &&
              errors.confirmPassword.type === "required" && (
                <span className="text-subBrand text-xs">
                  (**Retype Password again)
                </span>
              )}
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="px-5 py-4 w-full my-2 focus-within:outline-none focus:border focus:border-brand placeholder:font-brand placeholder:text-[#222]"
            {...register("confirmPassword", { required: true })}
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full px-20 py-4 tracking-[3.2px] font-brand text-[#222] uppercase border-2 border-brand my-5 hover:bg-brand hover:text-white transition-all duration-700"
          >
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
