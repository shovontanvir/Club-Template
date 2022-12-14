import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { menuItems } from "./router/Paths";
import EventDetails from "./pages/EventDetails";
import FeatureDetails from "./pages/FeatureDetails";
import NewsDetails from "./pages/NewsDetails";



function App() {
  return(
    <Router>
      <Navbar />

      <Routes>
            {
              menuItems.map((item, index) => (
                <Route path={item.path} element={item.element} key={index.toString()} />
              ))
            }
            {
              menuItems.map((item) => (
                item.childMenu ? item.childMenu.map((cItems, index) => (
                  <Route path={cItems.path} element={cItems.element} key={index.toString()} />
                )): null
              ))
            }
            <Route path="/event-details" element={<EventDetails />} />
            <Route path="/feature-details" element={<FeatureDetails />} />
            <Route path="/news-details" element={<NewsDetails />} />
      </Routes>


      <Footer />
    </Router>
  )
}

export default App;
