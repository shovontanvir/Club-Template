import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postApiData } from "../../Services/apiFunctions";
import { useMutation } from "@tanstack/react-query";

const ForgotPassword = () => {
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [mobile, setMobile] = useState();
  const navigate = useNavigate();
  // initialize react hook form
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  // submit handler
  const onSubmit = (data) => {
    // console.log(data);
    setMobile(data.mobile);
    const finalData = {
      ...data,
      hashCode: "#qwerty",
    };
    mutate(finalData);
    reset();
  };

  const postMobileNumber = (data) => {
    return postApiData("login-with-otp", data);
  };

  const { mutate } = useMutation(postMobileNumber, {
    onSuccess: (response) => {
      // console.log(response);
      localStorage.setItem("mobile", mobile);
      navigate("/submit-otp");
    },
    onError: (err) => {
      // console.log(err);
      setMobile();
    },
  });

  return (
    <>
      <form
        action="submit"
        className="w-full flex flex-col justify-between items-center my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-start w-full px-2">
          <label htmlFor="mobile">
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
