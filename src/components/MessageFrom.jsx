import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import GetData from "../services/GetData";
// import sign from "../images/sign.png";

const MessageFrom = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [details, setDetails] = useState({});
  const [avatar, setAvatar] = useState();
  const [message, setMessage] = useState();
  const [designation, setDesignation] = useState();
  const [name, setName] = useState();
  const [sign, setSign] = useState();

  const setPerson = (details) => {
    const person = "advisor" in details ? details.advisor : details.president;
    "advisorType" in person
      ? setDesignation(
          `${
            person.advisorType.charAt(0).toUpperCase() +
            person.advisorType.slice(1)
          } Advisor`
        )
      : setDesignation(
          `${
            person.presidentType.charAt(0).toUpperCase() +
            person.presidentType.slice(1)
          } President`
        );
    setName(person.name);
    setAvatar(`${process.env.REACT_APP_IMAGE_BASE_URL}` + person.image);
    setMessage(person.message);
    setSign(`${process.env.REACT_APP_IMAGE_BASE_URL}` + person.signature);
  };

  useEffect(() => {
    const fetchMessage = async () => {
      console.log(props.url);
      const res = await GetData(props.url);
      const data = await res.data.data;
      // console.log(data);
      setIsLoading(false);

      !isLoading && (await setPerson(data));
      console.log("changed");
    };

    fetchMessage();
  }, [props.url, isLoading]);

  return (
    <div className="flex flex-col sm:flex-row px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-28 relative ">
      <div className="basis-1/4">
        <div className="after:absolute after:h-full relative after:left-4 after:border-2 after:-top-4 after:border-brand after:opacity-50 after:w-1/2 sm:after:w-full">
          <img src={avatar} alt="person avatar" className="w-1/2 sm:w-full" />
        </div>
      </div>
      <div className="basis-3/4 sm:pl-16 mt-5 sm:mt-0 flex flex-col justify-between">
        <div>
          <h1 className="text-subBrand font-brand text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
            Message From The <br /> {designation}
          </h1>
          <p className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base">
            {message}
          </p>
        </div>
        <div className="mt-7 text-right">
          <h1 className="font-brand sm:text-lg md:text-xl xl:text-3xl font-light">
            {name}
          </h1>
          <p className="font-poppins font-extralight leading-5 text-sm md:text-base">
            {designation}
          </p>
          <FontAwesomeIcon icon={faLinkedin} />
          <img src={sign} alt="signature" className="ml-auto mt-2 w-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default MessageFrom;
