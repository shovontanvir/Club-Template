import React from "react";
import EcMember from "./EcMember";
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

const PresentEcMembers = () => {
  const members = [
    {
      image: ec1,
      name: "Abul Kalam Azad",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec2,
      name: "Mohammad Masud Rana",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec3,
      name: "Mahedi Mosharrof",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec4,
      name: "Md. Rashedul Niloy",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec5,
      name: "Safayet Abdullah",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec6,
      name: "Sharmin Shilpy",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec7,
      name: "Rafiuzzamam Sifat",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec8,
      name: "Ummae Hamida",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec9,
      name: "Tanvir Anjum",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
    {
      image: ec10,
      name: "Forhad Naim Mithun",
      role: "Member Administration",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
    },
  ];

  return (
    <div>
      {members.map((member) => (
        <EcMember
          name={member.name}
          image={member.image}
          role={member.role}
          details={member.details}
        />
      ))}
    </div>
  );
};

export default PresentEcMembers;
