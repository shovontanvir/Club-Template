import facilities1 from "../images/facilities1.png";
import facilities2 from "../images/facilities2.png";
import facilities3 from "../images/facilities3.png";
import facilities4 from "../images/facilities4.png";
import facilities5 from "../images/facilities5.png";
import facilities6 from "../images/facilities6.png";
import facilities7 from "../images/facilities7.png";
import facilities8 from "../images/facilities8.png";
import facilities9 from "../images/facilities9.png";
import Sports from "../pages/Sports";

export const facilities = [
  {
    name: "Restaurent",
    title: "Title Goes Here",
    image: facilities1,
  },
  {
    name: "Bakery & Cafe",
    title: "Title Goes Here",
    image: facilities2,
  },
  {
    name: "Personal Care",
    title: "Title Goes Here",
    image: facilities3,
  },
  {
    name: "Laundry",
    title: "Title Goes Here",
    image: facilities4,
  },
  {
    name: "Health & Fitness",
    title: "Title Goes Here",
    image: facilities5,
  },
  {
    name: "Bar",
    title: "Title Goes Here",
    image: facilities6,
  },
  {
    name: "Prayer Room",
    title: "Title Goes Here",
    image: facilities7,
  },
  {
    name: "Lobby Lounge",
    title: "Title Goes Here",
    image: facilities8,
  },
  {
    name: "Sports",
    title: "Title Goes Here",
    image: facilities9,
    to: "/sports",
    element: <Sports />,
  },
];

export default facilities;
