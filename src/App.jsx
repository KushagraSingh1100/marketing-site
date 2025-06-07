import "./App.css";
import OurWork from "./components/OurWork.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import Services from "./components/Services.jsx";
import SomeClient from "./components/SomeClient.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Services/>
      <OurWork/>
      <SomeClient/>
      <Footer/>
    </div>
  );
}

export default App;
