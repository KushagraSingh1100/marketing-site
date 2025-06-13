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
          <a href="/web"><button>Learn More <span>▶</span></button></a>
        </div>
        <div className="service">
          <h2>Social-Media Management</h2>
          <p>
            Social Media Management: We create and manage engaging social media
            strategies that build brand awareness, foster community, and boost
            customer engagement across all major platforms.
          </p>
          <a href="/social-media"><button>Learn More <span>▶</span></button></a>
        </div>
        <div className="service">
          <h2>Search Engine Optimization</h2>
          <p>
            SEO Services: Enhance your online visibility and organic growth with
            our comprehensive SEO strategies, propelling your website to the top
            of search engine rankings.
          </p>
          <a href="/seo"><button>Learn More <span>▶</span></button></a>
        </div>
        <div className="service">
          <h2>Graphic Work</h2>
          <p>
            Graphic Design Services: From logos to promotional content, we
            deliver visually stunning designs that reflect your brand identity
            and captivate your target audience.
          </p>
          <a href="/graphic"><button>Learn More <span>▶</span></button></a>
        </div>
        <div className="service">
          <h2>Ads Management</h2>
          <p>
            Ads Management: Maximize ROI with expertly crafted and data-driven
            advertising campaigns across Google, Meta, and other platforms to
            reach the right audience at the right time.
          </p>
          <a href="/ads"><button>Learn More <span>▶</span></button></a>
        </div>
        <div className="service">
          <h2>Branding Work</h2>
          <p>
            Branding Services: We help shape your brand’s voice, vision, and
            visual identity, ensuring consistency and impact across all customer
            touchpoints.
          </p>
          <a href="/brand"><button>Learn More <span>▶</span></button></a>
        </div>
      </div>
    </div>
  );
}

export default Services;
