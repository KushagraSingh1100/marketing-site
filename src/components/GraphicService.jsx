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
          Our graphic design services transform ideas into eye-catching visuals
          that capture attention, communicate your message, and inspire action.
          From logos to marketing collateral, every design is crafted with
          intention and creativity to strengthen your brand’s impact.
        </p>
      </div>
      <div className="service-page-bottom">
        <h1>Versatile Solutions for a Cohesive Brand Identity</h1>
        <h4>
          At Ignite Digitals, we deliver graphic design solutions tailored to
          showcase your brand consistently across every platform. Our core
          services include:
        </h4>
        <div className="service-page-bottom-points">
          <div className="point">
            <h3>Logo & Brand Identity Design</h3>
            <p>
              Build a Brand That Inspires Confidence We design distinctive logos
              and cohesive brand kits that reflect your vision and set you
              apart.
            </p>
            <h4>You get:</h4>
            <ul>
              <li>• Unique, memorable logo design</li>
              <li>• Consistent color palettes and typography</li>
              <li>• A unified look across all brand touchpoints</li>
            </ul>
            <p>Make your brand instantly recognizable and trusted.</p>
          </div>
          <div className="point">
            <h3>Social Media & Marketing Collateral</h3>
            <p>
              Enhance Your Presence with Purposeful Design We create engaging
              social media graphics, banners, and marketing materials tailored
              to your brand.
            </p>
            <h4>You get:</h4>
            <ul>
              <li>• Scroll-stopping visuals for every platform</li>
              <li>• Promotional graphics aligned with your messaging</li>
              <li>• Creative assets that boost engagement and reach</li>
            </ul>
            <p>Connect with your audience and drive real results.</p>
          </div>
          <div className="point">
            <h3>Print Design & Promotional Materials</h3>
            <p>
              Bring Your Brand to Life—Anywhere From business cards to
              packaging, we deliver print-ready designs that impress in any
              setting.
            </p>
            <h4>You get:</h4>
            <ul>
              <li>• High-impact brochures, posters, and event materials</li>
              <li>• Partnerships and guest posting to expand your reach</li>
              <li>• High-resolution, production-ready files</li>
            </ul>
            <p>Communicate your brand effectively—online and offline.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicService;
