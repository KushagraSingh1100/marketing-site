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
            Web Development Services: Our web development services combine
            creativity and functionality to craft websites that resonate with
            your audience and drive conversions.
          </p>
          <Link to="/web">
            <button>
              Learn More <span>▶</span>
            </button>
          </Link>
        </div>
        <div className="service">
          <h2>Social-Media Management</h2>
          <p>
            Social Media Management: We create and manage engaging social media
            strategies that build brand awareness, foster community, and boost
            customer engagement across all major platforms.
          </p>
          <Link to="/social-media">
            <button>
              Learn More <span>▶</span>
            </button>
          </Link>
        </div>
        <div className="service">
          <h2>Search Engine Optimization</h2>
          <p>
            SEO Services: Enhance your online visibility and organic growth with
            our comprehensive SEO strategies, propelling your website to the top
            of search engine rankings.
          </p>
          <Link to="/seo">
            <button>
              Learn More <span>▶</span>
            </button>
          </Link>
        </div>
        <div className="service">
          <h2>Graphic Work</h2>
          <p>
            Graphic Design Services: From logos to promotional content, we
            deliver visually stunning designs that reflect your brand identity
            and captivate your target audience.
          </p>
          <Link to="/graphic">
            <button>
              Learn More <span>▶</span>
            </button>
          </Link>
        </div>
        <div className="service">
          <h2>Ads Management</h2>
          <p>
            Ads Management: Maximize ROI with expertly crafted and data-driven
            advertising campaigns across Google, Meta, and other platforms to
            reach the right audience at the right time.
          </p>
          <Link to="/ads">
            <button>
              Learn More <span>▶</span>
            </button>
          </Link>
        </div>
        <div className="service">
          <h2>Branding Work</h2>
          <p>
            Branding Services: We help shape your brand’s voice, vision, and
            visual identity, ensuring consistency and impact across all customer
            touchpoints.
          </p>
          <Link to="/brand">
            <button>
              Learn More <span>▶</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
