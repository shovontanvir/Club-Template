import AffiliatedClubs from "../pages/AffiliatedClubs/AffiliatedClubs";
import ClubHistory from "../pages/ClubHistory/ClubHistory";
import Commitee from "../pages/Commitee/Commitee";
import Contact from "../pages/Contact/Contact";
import DescriptionPage from "../pages/DescriptionPage/DescriptionPage";

import ECMembers from "../pages/ECMembers/ECMembers";
import ElectionLive from "../pages/ElelctionLive/ElectionLive";
import ElectionBoard from "../pages/ElelctionLive/partials/ElectionBoard";
import ElectionCandidates from "../pages/ElelctionLive/partials/ElectionCandidates";
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
        element: (
          <ECMembers
            headline="Founder Members"
            url="ec-member-list?page=1&searchKey=&size=10"
          />
        ),
      },
      {
        name: "Founder President Message",
        path: "/founder-president-message",
        element: (
          <MessageFrom
            messagePerson="Founder President"
            url="club/message/get?messageFrom=Founder President Message"
          />
        ),
      },
      {
        name: "Founder Advisor Message",
        path: "/founder-advisor-message",
        element: (
          <MessageFrom
            messagePerson="Founder Advisor"
            url="club/message/get?messageFrom=Founder Advisor Message"
          />
        ),
      },
      {
        name: "Guest Rules",
        path: "/guest-rules",
        element: <DescriptionPage headline="Guest Rules" />,
      },
      {
        name: "Dress Code",
        path: "/dress-code",
        element: <DescriptionPage headline="Guest Rules" />,
      },
      {
        name: "Timing",
        path: "/timing",
        element: <DescriptionPage headline="Guest Rules" />,
      },
    ],
  },
  {
    id: 2,
    name: "Committee",
    path: "/committee",
    element: <Commitee messagePerson="Present Committee" url="committee" />,
    childMenu: [
      {
        name: "President Message",
        path: "/current-president-message",
        element: (
          <MessageFrom
            messagePerson="President"
            url="club/message/get?messageFrom=President Message"
          />
        ),
      },
      {
        name: "Present Executive Committee",
        path: "/present-ec",
        element: (
          <ECMembers
            headline="Present Executive Committee"
            url="ec-member-list?page=1&searchKey=&size=10"
          />
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
      <Facilities
        headline="Facilities"
        bgClass="bg-classic"
        url="club/facilities/list"
      />
    ),
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
    childMenu: [
      {
        name: "Election Board",
        path: "/election-board",
        element: (
          <ElectionBoard url="election/board/list?boardType=Election Appeal Board" />
        ),
      },
      {
        name: "Election Appeal Board",
        path: "/election-appeal-board",
        element: (
          <ElectionBoard url="election/board/list?boardType=Election Board" />
        ),
      },
      {
        name: "President Candidate List",
        path: "/president-candidate-list",
        element: (
          <ElectionCandidates
            headline="Presidential Candidate"
            url="election/candidate/list?candidateType=President"
          />
        ),
      },
      {
        name: "EC Candidate List",
        path: "/ec-candidate-list",
        element: (
          <ElectionCandidates
            headline="Executive Committee Candidate"
            url="election/candidate/list?candidateType=Executive Committee"
          />
        ),
      },
    ],
  },
  {
    id: 10,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   id: 11,
  //   name: "Login",
  //   path: "/login",
  //   element: <LoginLayout />,
  // },
];

export default menuItems;
