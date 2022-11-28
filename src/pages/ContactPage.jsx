import React from "react";
import phone from "../images/phone.png";
import email from "../images/email.png";
import mapmarker from "../images/mapmarker.png";
import ClassicBg from "../components/ClassicBg";
import Button from "../components/Button";

const ContactPage = () => {
  return (
    <>
      <ClassicBg headline="Contact Us" bgClass="bg-classic" />
      <div className="bg-container bg-repeat bg-contain py-32 px-64">
        <div className="bg-[#F1EBE2] px-16 py-24">
          <div className="flex flex-wrap border border-brand">
            <div className="flex basis-1/3 p-10">
              <div className="px-3 basis-1/3">
                <img src={phone} alt="phone" className="w-1/2" />
              </div>
              <div className="basis-2/3">
                <h1 className="font-poppins text-brand tracking-widest font-light">
                  Phone
                </h1>
                <h1 className="font-brand text-xl mt-3">+880.2.222270377</h1>
              </div>
            </div>
            <div className="flex basis-1/3 p-10 border-x border-brand">
              <div className="px-3 basis-1/3">
                <img src={email} alt="email" className="w-1/2" />
              </div>
              <div className="basis-2/3">
                <h1 className="font-poppins text-brand tracking-widest font-light">
                  Email
                </h1>
                <h1 className="font-brand text-xl mt-3">
                  info@bananiclube.com
                </h1>
              </div>
            </div>
            <div className="flex basis-1/3 p-10">
              <div className="px-3 basis-1/3">
                <img src={mapmarker} alt="mapmarker" className="w-1/2" />
              </div>
              <div className="basis-2/3">
                <h1 className="font-poppins text-brand tracking-widest font-light">
                  Address
                </h1>
                <h1 className="font-brand text-xl mt-3">
                  105 & 109, Road -1, Block-F, Dhaka - 1213.
                </h1>
              </div>
            </div>
          </div>

          <div className="flex py-10">
            <div className="basis-1/2 pr-8">
              <form action="submit">
                <input
                  type="text"
                  placeholder="Email"
                  className="placeholder:font-brand placeholder:text-black px-5 py-3 bg-white w-full my-3 focus-visible:!outline-brand focus-visible:shadow-custom"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="placeholder:font-brand placeholder:text-black px-5 py-3 bg-white w-full my-3 focus-visible:!outline-brand focus-visible:shadow-custom"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="placeholder:font-brand placeholder:text-black px-5 py-3 bg-white w-full my-3 focus-visible:!outline-brand focus-visible:shadow-custom"
                />
                <textarea
                  name="Message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  className="placeholder:font-brand placeholder:text-black px-5 py-3 bg-white w-full my-3 focus-visible:!outline-brand focus-visible:shadow-custom"
                ></textarea>
                <Button name="Submit" class="!text-black uppercase w-full" />
              </form>
            </div>
            <div className="basis-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
