import "./ServicePage.css";

function GraphicService() {
  return (
    <div className="service-page">
      <div className="service-page-top">
        <h1>
          Graphic <br />
          Design
        </h1>
        <p>
          Graphic Design Services: Our graphic design solutions bring your brand to life with
          visually compelling assets that captivate, communicate, and convert. From logos to
          marketing materials, we craft every design element with purpose and creativity.
        </p>
      </div>
      <div className="service-page-bottom">
        <h1>Our Comprehensive Graphic Design Solutions</h1>
        <h4>
          At Ignite Digitals, we provide versatile graphic design services tailored to elevate your
          brand identity across all platforms. Our core offerings include:
        </h4>
        <div className="service-page-bottom-points">
          <div className="point">
            <h3>• Logo & Brand Identity Design</h3>
            <p>
              A strong brand starts with a powerful visual identity. We design unique, memorable
              logos and brand kits that reflect your brand’s vision and resonate with your
              audience. From color palettes to typography, we ensure consistency across all touchpoints,
              helping you stand out in a competitive market.
            </p>
          </div>
          <div className="point">
            <h3>• Social Media & Marketing Collateral</h3>
            <p>
              We create scroll-stopping social media graphics, banners, and promotional designs to
              enhance your online presence. Whether it's for Instagram, LinkedIn, or email campaigns,
              our visuals are optimized for engagement and aligned with your messaging and branding.
            </p>
          </div>
          <div className="point">
            <h3>• Print Design & Promotional Materials</h3>
            <p>
              Our print design services cover everything from brochures and business cards to event
              posters and packaging. We combine aesthetics with clarity to deliver designs that not
              only look great but also communicate effectively in real-world formats. High-resolution
              outputs and print-ready files ensure seamless production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicService;
