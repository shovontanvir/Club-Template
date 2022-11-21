import React from "react";
import ec1 from "../images/ec1.png";
import ec2 from "../images/ec2.png";
import ec3 from "../images/ec3.png";
import ec4 from "../images/ec4.png";
import ec5 from "../images/ec5.png";
import ec6 from "../images/ec6.png";
import ec7 from "../images/ec7.png";
import ec8 from "../images/ec8.png";
import ec9 from "../images/ec9.png";
import ec10 from "../images/ec10.png";
import MemberItem from "./MemberItem";

const Committee = (props) => {
  const members = [
    {
      image: ec1,
      name: "Abul Kalam Azad",
      role: "Member Administration",
    },
    {
      image: ec2,
      name: "Mohammad Masud Rana",
      role: "Member Administration",
    },
    {
      image: ec3,
      name: "Mahedi Mosharrof",
      role: "Member Administration",
    },
    {
      image: ec4,
      name: "Md. Rashedul Niloy",
      role: "Member Administration",
    },
    {
      image: ec5,
      name: "Safayet Abdullah",
      role: "Member Administration",
    },
    {
      image: ec6,
      name: "Sharmin Shilpy",
      role: "Member Administration",
    },
    {
      image: ec7,
      name: "Rafiuzzamam Sifat",
      role: "Member Administration",
    },
    {
      image: ec8,
      name: "Ummae Hamida",
      role: "Member Administration",
    },
    {
      image: ec9,
      name: "Tanvir Anjum",
      role: "Member Administration",
    },
    {
      image: ec10,
      name: "Forhad Naim Mithun",
      role: "Member Administration",
    },
  ];

  return (
    <div>
      <h1 className="font-brand text-subBrand text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-32">
        {props.heading}
      </h1>
      <div className="flex flex-wrap my-3 sm:my-5 lg:my-10 p-1 justify-center">
        {members.map((member, index) => (
          <div className="overflow-hidden relative group basis-1/3 sm:basis-1/4 md:basis-1/5 p-1">
            <MemberItem
              key={index.toString()}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
