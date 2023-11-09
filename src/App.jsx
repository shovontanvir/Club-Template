import { useEffect } from "react";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { menuItems } from "./router/Paths";
import FeatureDetails from "./pages/FeatureDetails/FeatureDetails";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import Navbar from "./components/Navbar";
import EventDetails from "./pages/EventDetails/EventDetails";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
