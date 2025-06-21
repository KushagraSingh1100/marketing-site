import { Link } from "react-router";
import "./Services.css";

function Services() {
  return (
    <div id="services" className="services">
      <h1>Our Services</h1>
      <div className="list-services">
        <div className="service">
          <h2>Web Development</h2>
          <p>
            <span>Still Stuck With a Website That Doesn’t Convert?</span>{" "}
            Discover how a smart redesign can turn visitors into loyal
            customers—fast. See the difference a pro-built site makes.
          </p>
          <Link to="/web">
            <button>Learn More ▶</button>
          </Link>
        </div>
        <div className="service">
          <h2>Social-Media Management</h2>
          <p>
            <span>Wish Your Social Media Actually Delivered Results?</span> Stop
            guessing. Start seeing measurable growth, more leads, and real
            conversations. Let’s make your brand the talk of the timeline.
          </p>
          <Link to="/social-media">
            <button>Learn More ▶</button>
          </Link>
        </div>
        <div className="service">
          <h2>Search Engine Optimization</h2>
          <p>
            <span>Wish Your Website Attracted More Than Just Clicks?</span> We
            turn search visibility into real growth and lasting authority. Let’s
            make your brand stand out on every results page.
          </p>
          <Link to="/seo">
            <button>Learn More ▶</button>
          </Link>
        </div>
        <div className="service">
          <h2>Graphic Work</h2>
          <p>
            <span>Want Every Design to Tell Your Story?</span> We blend
            creativity and strategy for visuals that truly connect. Make your
            brand message impossible to ignore.
          </p>
          <Link to="/graphic">
            <button>Learn More ▶</button>
          </Link>
        </div>
        <div className="service">
          <h2>Ads Management</h2>
          <p>
            <span>Wish Your Ads Delivered More Than Just Clicks?</span> Unlock
            smarter strategies that turn impressions into loyal customers. Let’s
            make every dollar count.
          </p>
          <Link to="/ads">
            <button>Learn More ▶</button>
          </Link>
        </div>
        <div className="service">
          <h2>Branding Work</h2>
          <p>
            <span>Ready to Tell Your Brand’s Story with Confidence?</span> Our
            team crafts thoughtful branding that reflects your values and
            vision—so you can make a lasting impression. See how a clear
            identity can elevate your business.
          </p>
          <Link to="/brand">
            <button>Learn More ▶</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
