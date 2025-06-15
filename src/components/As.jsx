import React, { useEffect, useState } from 'react';
import './As.css' 



const As = () => {
  const images = ['/aos1.png', '/aos2.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out
      setFade(true);

      // Wait for fade-out before changing image
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
        setFade(false); // fade-in
      }, 500); // half of transition duration
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='As-main'>
      <div className='As-Upper'>
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
      <div className='As-Lower'>
        <div className='As-Text'>
          <h1>About Our Story</h1>
          <p>
            Our journey began as a humble web development agency, driven by a vision to create captivating online experiences. Over the years, fueled by innovation and an unwavering commitment to excellence, we have evolved into a dynamic Web Development and Software Company that serves clients across the global market.
          </p>
          <p>
            Digital Kangaroos is more than just a web development and software company. We're your strategic partner in navigating the ever-evolving landscape of technology. With a passion for innovation and a commitment to excellence, we provide cutting-edge solutions that empower businesses to thrive in the digital age.
          </p>
          <button className='As-Button'>
            Learn More →
          </button>
        </div>
        <div className='As-Image'>
          <img 
          src={images[currentImageIndex]} 
          alt="Digital Kangaroos Office Environment" 
          className={fade ? 'fade-out' : ''}
          />
        </div>
      </div>
    </div>
  )
}

export default As