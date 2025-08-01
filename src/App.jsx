import "./App.css";
import OurWork from "./components/OurWork.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import Services from "./components/Services.jsx";
import SomeClient from "./components/SomeClient.jsx";
import As from "./components/As.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebdevelopmentService from "./components/WebdevelopmentService.jsx";
import SocialMediaManagement from "./components/SocialMediaManagement.jsx";
import SeoOptimization from "./components/SeoService.jsx";
import BrandManagementService from "./components/BrandManagementService.jsx";
import GraphicService from "./components/GraphicService.jsx";
import AdManagementService from "./components/AdManagementService.jsx";
import Posts from "./pages/Posts.jsx";
import Posters from "./pages/Posters.jsx";
import Banners from "./pages/Banners.jsx";
import Pamphlets from "./pages/Pamphlets.jsx";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <As />
                <Services />
                <OurWork />
                <SomeClient />{" "}
              </>
            }
          />
          <Route path="/web" element={<WebdevelopmentService />} />
          <Route path="/social-media" element={<SocialMediaManagement />} />
          <Route path="/seo" element={<SeoOptimization />} />
          <Route path="/brand" element={<BrandManagementService />} />
          <Route path="/graphic" element={<GraphicService />} />
          <Route path="/ads" element={<AdManagementService />} />
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posters" element={<Posters/>}/>
          <Route path="/banners" element={<Banners/>}/>
          <Route path="/pamphlets" element={<Pamphlets/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
