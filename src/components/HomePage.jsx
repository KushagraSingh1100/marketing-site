import { useEffect, useState } from "react";
import "./HomePage.css";
import Carousel1 from "../assets/marketing1.jpg";
import Carousel2 from "../assets/marketing2.jpg";
import Carousel3 from "../assets/marketing3.jpg";

function HomePage() {
  const [activeTab, setActiveTab] = useState(1);

  const carouselTabs = [
    {
      id: 1,
      title: "Listen to Your Customers",
      image: Carousel1,
    },
    {
      id: 2,
      title: "Custom Metrics for Smarter Decisions",
      image: Carousel2,
    },
    {
      id: 3,
      title: "Actionable Recommendations",
      image: Carousel3,
    },
  ];

  const length = carouselTabs.length;

  const handleNextTab = (tabId) => {
    if (tabId === length) {
      setActiveTab(1);
    } else {
      setActiveTab(tabId + 1);
    }
  };

  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      handleNextTab(activeTab);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeTab]);

  const activeItem =
    carouselTabs.find((item) => item.id === activeTab) || carouselTabs[0];

  return (
    <div className="home-page">
      <div className="home-carousel">
        <div className="carousel-image-wrapper">
          <img
            key={activeItem.id}
            src={activeItem.image}
            alt=""
            className="carousel-image"
          />
        </div>
        <div className="home-text">
          <h3>Meet your next digital agency</h3>
          <h1>
            Move Forward<span>.</span>
          </h1>
          <h1>
            Move Faster<span>.</span>
          </h1>
          <button>
            <h3>Have a project? Let’s talk</h3>
          </button>
        </div>
      </div>
      <div className="vertical-contact">
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default HomePage;
