import { useEffect } from "react";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { menuItems } from "./router/Paths";
import FeatureDetails from "./pages/FeatureDetails/FeatureDetails";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import Navbar from "./components/Navbar";
import EventDetails from "./pages/EventDetails/EventDetails";
import LoginLayout from "./pages/Login/LoginLayout";
import Notice from "./pages/Notice/Notice";
import protectedMenuItems from "./router/ProtectedPaths";
import SubFacilities from "./pages/SubFacilities/SubFacilities";

import Sports from "./pages/Sports/Sports";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      <Navbar />

      <Routes>
        {menuItems.map((item, index) => (
          <Route
            path={item.path}
            element={item.element}
            key={index.toString()}
          />
        ))}
        {menuItems.map((item) =>
          item.childMenu
            ? item.childMenu.map((cItems, index) => (
                <Route
                  path={cItems.path}
                  element={cItems.element}
                  key={index.toString()}
                />
              ))
            : null
        )}
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/feature-details" element={<FeatureDetails />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/forgot-password" element={<LoginLayout />} />
        <Route path="/submit-otp" element={<LoginLayout />} />
        <Route path="/reset-password" element={<LoginLayout />} />
        <Route path="/notice" element={<Notice />} />
        <Route
          path="/facility-details/:facility-name"
          element={<FeatureDetails />}
        />
        <Route path="/food-beverages/:id" element={<SubFacilities />} />
        <Route path="/sports/:id" element={<Sports />} />
        <Route
          path="/facility-details/:parentId/:childId"
          element={<FeatureDetails />}
        />

        {isLoggedIn
          ? protectedMenuItems.map((item) => (
              <Route path={item.path} element={item.element} key={item.name} />
            ))
          : null}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
