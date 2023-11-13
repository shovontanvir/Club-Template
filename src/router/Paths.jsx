import AffiliatedClubs from "../pages/AffiliatedClubs/AffiliatedClubs";
import ClubHistory from "../pages/ClubHistory/ClubHistory";
import Commitee from "../pages/Commitee/Commitee";
import Contact from "../pages/Contact/Contact";

import ECMembers from "../pages/ECMembers/ECMembers";
import ElectionLive from "../pages/ElelctionLive/ElectionLive";
import Event from "../pages/Event/Event";
import Facilities from "../pages/Facilities/Facilities";
import FeatureDetails from "../pages/FeatureDetails/FeatureDetails";
import Gallery from "../pages/Gallery/Gallery";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import LoginLayout from "../pages/Login/LoginLayout";
import MessageFrom from "../pages/MessageFrom/MessageFrom";
import News from "../pages/News/News";
import SubFacilities from "../pages/SubFacilities/SubFacilities";

export const menuItems = [
  {
    id: 0,
    name: "Home",
    path: "/",
    element: <Landing />,
  },
  {
    id: 1,
    name: "The Club",
    path: "/club",
    childMenu: [
      {
        name: "Club History",
        path: "/club-history",
        element: <ClubHistory />,
      },
      {
        name: "Founder Members",
        path: "/founder-members",
        element: <ECMembers headline="Founder Members" url="committee" />,
      },
      {
        name: "Current Presidents Message",
        path: "/current-president-message",
        element: (
          <MessageFrom messagePerson="Current President" url="message-from" />
        ),
      },
      {
        name: "Current Advisors Message",
        path: "/current-advisor-message",
        element: (
          <MessageFrom messagePerson="Current Advisor" url="message-from" />
        ),
      },
      {
        name: "Guest Rules",
        path: "/guest-rules",
        // element:
      },
      {
        name: "Dress Code",
        path: "/dress-code",
        // element:
      },
      {
        name: "Timing",
        path: "/timing",
        // element:
      },
    ],
  },
  {
    id: 2,
    name: "Committee",
    path: "/committee",
    element: <Commitee headline="Present Committee" url="committee" />,
    childMenu: [
      {
        name: "Founder Presidents Message",
        path: "/founder-president-message",
        element: (
          <MessageFrom messagePerson="Founder President" url="message-from" />
        ),
      },
      {
        name: "Present Executive Committee",
        path: "/present-ec",
        element: (
          <ECMembers headline="Present Executive Committee" url="committee" />
        ),
      },
      {
        name: "Former Executive Committee",
        path: "/former-ec",
        element: (
          <Commitee headline="Former Executive Committee" url="committee" />
        ),
      },
      {
        name: "Past Presidents",
        path: "/past-presidents",
        element: <Commitee headline="Past Presidents" url="committee" />,
      },
      {
        name: "Present Sub Committee",
        path: "/present-sub-committee",
        element: <ECMembers headline="Present Sub Committee" url="committee" />,
      },
    ],
  },
  {
    id: 3,
    name: "Affiliation",
    path: "/affiliation",
    element: <AffiliatedClubs />,
  },
  {
    id: 4,
    name: "Facilities",
    path: "/facilities",
    element: (
      <Facilities headline="Facilities" bgClass="bg-classic" url="facilities" />
    ),
    childMenu: [
      {
        name: "Food & Beverage",
        path: "/food-beverages",
        element: (
          <SubFacilities
            headline="Food & Beverages"
            bgClass="bg-fnb"
            url="food-beverages"
          />
        ),
      },
      {
        name: "Halls",
        path: "/halls",
        element: (
          <SubFacilities headline="Halls" bgClass="bg-fnb" url="halls" />
        ),
      },
      {
        name: "Club Residence",
        path: "/club-residence",
        element: (
          <SubFacilities
            headline="Club Residence"
            bgClass="bg-fnb"
            url="club-residence"
          />
        ),
      },
      {
        name: "Health & Fitness",
        path: "/health-fitness",
        element: (
          <SubFacilities
            headline="Health & Fitness"
            bgClass="bg-fnb"
            url="health-fitness"
          />
        ),
      },
      {
        name: "Personal Care & Salon",
        path: "/personal-care",
        element: (
          <SubFacilities
            headline="Personal Care & Salon"
            bgClass="bg-fnb"
            url="personal-care"
          />
        ),
      },
      {
        name: "Laundry",
        path: "/laundry",
        element: <FeatureDetails />,
      },
      {
        name: "Prayer Room",
        path: "/prayer-room",
        element: <FeatureDetails />,
      },
      {
        name: "Lobby Lounge",
        path: "/lobby-lounge",
        element: <FeatureDetails />,
      },
      {
        name: "Sports",
        path: "/sports",
        element: (
          <SubFacilities headline="Sports" bgClass="bg-fnb" url="sports" />
        ),
      },
    ],
  },
  {
    id: 5,
    name: "News",
    path: "/news",
    element: <News />,
  },
  {
    id: 6,
    name: "Event Calender",
    path: "/event-calender",
    element: <Event />,
  },
  {
    id: 7,
    name: "Publications",
    path: "/publications",
  },
  {
    id: 8,
    name: "Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    id: 9,
    name: "Election",
    path: "/election",
    element: <ElectionLive />,
  },
  {
    id: 10,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 11,
    name: "Login",
    path: "/login",
    element: <LoginLayout />,
  },
];

export default menuItems;
