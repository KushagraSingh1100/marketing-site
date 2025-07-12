import React, { useEffect, useState } from "react";
import "./As.css";

const As = () => {
  const images = ["/aos1.png", "/aos2.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out
      setFade(true);

      // Wait for fade-out before changing image
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setFade(false); // fade-in
      }, 500); // half of transition duration
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="As-main">
      <div className="As-Upper">
        <div className="aos">
          <img src="/webdev.png" alt="Web Development" />
          <p>Web Development</p>
        </div>
        <div className="aos">
          <img src="/ecom.png" alt="Web Development" />
          <p>Branding Work</p>
        </div>
        <div className="aos">
          <img src="/mobapp.png" alt="Web Development" />
          <p>Social Media Management</p>
        </div>
        <div className="aos">
          <img src="/softdev.png" alt="Web Development" />
          <p>Graphic Work</p>
        </div>
        <div className="aos">
          <img src="/shopify.png" alt="Web Development" />
          <p>Ads Management</p>
        </div>
        <div className="aos">
          <img src="/seoagency.png" alt="Web Development" />
          <p>Search Engine Optimization</p>
        </div>
      </div>
      <div className="As-Lower">
        <div className="As-Text">
          <h1>About Ignite Digitals</h1>
          <h3>We don’t just run campaigns—we build brands that win.</h3>
          <p>
            Ignite Digitals began with two friends, a laptop, and a fire to help
            businesses stop playing small. What started as side projects and
            late-night strategy sessions soon grew into something bigger—a
            full-fledged digital marketing agency with one simple belief:{" "}
            <br /><span>👉 Your success isn’t luck. It’s strategy.</span>
          </p>
          <p>
            We’ve seen too many great businesses get buried under bad marketing.
            That’s why we’re here—to bring clarity, creativity, and conversion
            power to your online presence.
          </p>
          <p>
            From sleek websites that sell, to scroll-stopping ads and SEO that
            ranks, we turn noise into results. Our design team adds the visual
            punch to keep your brand unforgettable.
          </p>
          <p>
            Whether you're a startup looking to launch or an established brand
            ready to scale — <span>we're your growth partners.</span>
          </p>
          <h3>Let’s ignite your next big win.</h3>
        </div>
        <div className="As-Image">
          <img
            src={images[currentImageIndex]}
            alt="Digital Kangaroos Office Environment"
            className={fade ? "fade-out" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default As;
