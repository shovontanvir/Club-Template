import Home from "../pages/Home";
import EcMembersPage from "../pages/EcMembersPage";
import Facilities from "../pages/facilities/Facilities";
import CommitteePage from "../pages/CommitteePage";
import NewsPage from "../pages/NewsPage";
import PersonsMessage from "../pages/PersonsMessage";
import ElectionLive from "../pages/ElectionLive";
import AffiliatedClubs from "../pages/AffiliatedClubs";
import FoodnBeveragesPage from "../pages/FoodnBeveragesPage";
import EventPage from "../pages/EventPage";
import Sports from "../pages/Sports";
import { foodnbev } from "../dummydata/Food&Beverages";
import halls from "../dummydata/Halls";
import healthnfitness from "../dummydata/HealthFitness";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";

export const menuItems = [
  {
    id: 0,
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    id: 1,
    name: "The Club",
    path: "/club",
    // element: <ClubHistory />,
    childMenu: [
      {
        name: "Club History",
        path: "/club-history",
        // element:
      },
      {
        name: "Founder Members",
        path: "/founder-members",
        element: (
          <EcMembersPage
            headline="Present Executive Committee"
            bgClass="bg-classic"
          />
        ),
      },
      {
        name: "Founder Presidents Message",
        path: "/founder-president-message",
        element: (
          <PersonsMessage
            headline="Founder President Message"
            designation="President"
            message="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. I was deeply touched and honored. I assure you that I shall make all endeavors to the best of my ability. 
            I would like to Congratulations to all the elected members of the Executive Committee 2019-2020."
            name="Rafiuzzaman Sifat"
          />
        ),
      },
      {
        name: "Founder Advisors Message",
        path: "/founder-advisor-message",
        element: (
          <PersonsMessage
            headline="Founder Advisor Message"
            designation="Advisor"
            message="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. I was deeply touched and honored. I assure you that I shall make all endeavors to the best of my ability. 
            I would like to Congratulations to all the elected members of the Executive Committee 2019-2020."
            name="Rafiuzzaman Sifat"
          />
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
    element: <CommitteePage headline="Present Committee" />,
    childMenu: [
      {
        name: "Founder Presidents Message",
        path: "/founder-president-message",
        element: (
          <PersonsMessage
            headline="Founder President Message"
            designation="President"
            message="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. I was deeply touched and honored. I assure you that I shall make all endeavors to the best of my ability. 
            I would like to Congratulations to all the elected members of the Executive Committee 2019-2020."
            name="Rafiuzzaman Sifat"
          />
        ),
      },
      {
        name: "Present Executive Committee",
        path: "/present-ec",
        element: <CommitteePage headline="Present Executive Committee" />,
      },
      {
        name: "Former Executive Committee",
        path: "/former-ec",
        element: <CommitteePage headline="Former Executive Committee" />,
      },
      {
        name: "Past Presidents",
        path: "/past-presidents",
        element: <CommitteePage headline="Past Presidents" />,
      },
      {
        name: "Present Sub Committee",
        path: "/present-sub-committee",
        element: <CommitteePage headline="Present Sub Committee" />,
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
    element: <Facilities headline="Facilities" bgClass="bg-classic" />,
    childMenu: [
      {
        name: "Food & Beverage",
        path: "/food-beverages",
        element: (
          <FoodnBeveragesPage
            headline="Food & Beverages"
            bgClass="bg-fnb"
            dummy={foodnbev}
          />
        ),
      },
      {
        name: "Halls",
        path: "/halls",
        element: (
          <FoodnBeveragesPage headline="Halls" bgClass="bg-fnb" dummy={halls} />
        ),
      },
      {
        name: "Club Residence",
        path: "/club-residence",
        // element: < />
      },
      {
        name: "Health & Fitness",
        path: "/health-fitness",
        element: (
          <FoodnBeveragesPage
            headline="Health & Fitness"
            bgClass="bg-fnb"
            dummy={healthnfitness}
          />
        ),
      },
      {
        name: "Personal Care & Salon",
        path: "/personal-care",
        element: (
          <FoodnBeveragesPage
            headline="Personal Care"
            bgClass="bg-fnb"
            dummy={foodnbev}
          />
        ),
      },
      {
        name: "Laundry",
        path: "/laundry",
        // element: < />
      },
      {
        name: "Prayer Room",
        path: "/prayer-room",
        // element: < />
      },
      {
        name: "Lobby Lounge",
        path: "/lobby-lounge",
        // element: < />
      },
      {
        name: "Sports",
        path: "/sports",
        element: <Sports />,
        gChildMenu: [
          {
            name: "Indoor Games",
            path: "sports",
            element: <Sports />,
          },
          {
            name: "Outdoor Games",
            path: "sports",
            element: <Sports />,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "News",
    path: "/news",
    element: <NewsPage />,
  },
  {
    id: 6,
    name: "Event Calender",
    path: "/eventcalender",
    element: <EventPage />,
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
    element: <GalleryPage />,
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
    element: <ContactPage />,
  },
  {
    id: 11,
    name: "Login",
    path: "/login",
  },
];

export default menuItems;
