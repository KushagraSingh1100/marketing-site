import { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router";
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTab(activeTab);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeTab]);

  const activeItem =
    carouselTabs.find((item) => item.id === activeTab) || carouselTabs[0];

  const numbersRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [leads, setLeads] = useState(0);
  const [businesses, setBusinesses] = useState(0);
  const [creatives, setCreatives] = useState(0);
  const [funnels, setFunnels] = useState(0);

  const startAnimations = () => {
    const animateValue = (start, end, setter, duration) => {
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setter(value);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    animateValue(0, 500, setLeads, 1000);
    animateValue(0, 10, setBusinesses, 1000);
    animateValue(0, 40, setCreatives, 1000);
    animateValue(0, 15, setFunnels, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // Trigger animation when entering
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimations();
        }

        // Reset animation when scrolled away (optional)
        if (!entry.isIntersecting && hasAnimated) {
          setHasAnimated(false); // Allow it to re-trigger next time
        }
      },
      { threshold: 0.4 }
    );

    const currentRef = numbersRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

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
          <h3>Wish Your Brand Was the First Choice, Every Time?</h3>
          <h1>
            We craft digital strategies that make you impossible to ignore
            <span>.</span>
          </h1>
          <h1>
            Take the shortcut to market domination
            <span>.</span>
          </h1>
          <button>
            <Link to="https://forms.gle/G7T94PEeJ1Vj6Mxg8">
              <h3>Book Your Free Consultation</h3>
            </Link>
          </button>
        </div>

        <div className="numbers" ref={numbersRef}>
          <div className="number">
            <div className="num">
              <h1>{leads}+</h1>
              <p>Leads Generated for Local Businesses</p>
            </div>
            <div className="num">
              <h1>{businesses}+</h1>
              <p>Businesses Grown Across Niches</p>
            </div>
            <div className="num">
              <h1>{creatives}+</h1>
              <p>Event Creatives & Posters Delivered</p>
            </div>
            <div className="num">
              <h1>{funnels}+</h1>
              <p>Funnels & Automation Systems Deployed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
