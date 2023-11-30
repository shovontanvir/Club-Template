import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import phone from "../../assets/images/globals/phone.png";
import email from "../../assets/images/globals/email.png";
import mapmarker from "../../assets/images/globals/mapmarker.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <ClassicHeader headline="Contact Us" bgClass="bg-classic" />
      <div className="bg-container bg-repeat bg-contain md:py-32 md:px-32">
        <div className="bg-[#F1EBE2] px-8 md:px-16 py-12 md:py-24">
          <div className="flex flex-wrap md:border border-brand">
            <div className="flex basis-full md:basis-1/3 p-4 md:p-10 border border-brand md:border-0 my-3 md:my-0">
              <div className="px-3 basis-1/3">
                <img src={phone} alt="phone" className="w-1/2" />
              </div>
              <div className="basis-2/3">
                <h1 className="font-poppins text-brand tracking-widest font-light">
                  Phone
                </h1>
                <h1 className="font-brand text-lg mt-3">+880.2.222270377</h1>
              </div>
            </div>
            <div className="flex basis-full md:basis-1/3 p-4 md:p-10 md:border-x  border border-brand my-3 md:my-0">
              <div className="px-3 basis-1/3">
                <img src={email} alt="email" className="w-1/2" />
              </div>
              <div className="basis-2/3">
                <h1 className="font-poppins text-brand tracking-widest font-light">
                  Email
                </h1>
                <h1 className="font-brand text-lg mt-3">
                  info@bananiclube.com
                </h1>
              </div>
            </div>
            <div className="flex basis-full md:basis-1/3 p-4 md:p-10 border border-brand md:border-0 my-3 md:my-0">
              <div className="px-3 basis-1/3">
                <img src={mapmarker} alt="mapmarker" className="w-1/2" />
              </div>
              <div className="basis-2/3">
                <h1 className="font-poppins text-brand tracking-widest font-light">
                  Address
                </h1>
                <h1 className="font-brand text-lg mt-3">
                  105 & 109, Road -1, Block-F, Dhaka - 1213.
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap py-10">
            <div className="basis-full md:basis-1/2 md:pr-8">
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

                <button
                  className="text-sm  font-brand border border-brand px-5 py-3 hover:bg-brand duration-500 relative after:border-0 after:hover:border after:border-brand after:inset-0 after:hover:-inset-2 after:absolute after:transition-all after:duration-500 !text-black uppercase w-full"
                  onClick={() => navigate("/")}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="basis-full md:basis-1/2 mt-10 md:mt-0">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8639833601605!2d90.40051071543193!3d23.78785739326025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c712a2fdeb4d%3A0xb2c1d7fcd3ef3458!2sBanani%20Club!5e0!3m2!1sen!2sbd!4v1670914703487!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
