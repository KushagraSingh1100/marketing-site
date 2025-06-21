import "./ServicePage.css";

function MarketingService() {
  return (
    <div className="service-page">
      <div className="service-page-top">
        <h1>
          Web <br />
          Development
        </h1>
        <p>
          Our web development expertise spans industries and business goals.
          From sleek portfolios to robust enterprise platforms, we deliver
          tailored solutions that blend innovative design with flawless
          functionality—helping your brand stand out and succeed online.
        </p>
      </div>
      <div className="service-page-bottom">
        <h1>End-to-End Solutions for Every Business</h1>
        <h4>
          At Ignite Digitals, we don’t just build websites—we create digital
          experiences that captivate your audience and turn visitors into loyal
          customers.
        </h4>
        <div className="service-page-bottom-points">
          <div className="point">
            <h3>Responsive WordPress Website Development</h3>
            <p>
              Build a Website That Works Everywhere We create responsive
              WordPress websites that look stunning and perform flawlessly on
              every device.
            </p>
            <h4>Your site will be:</h4>
            <ul>
              <li>• Fast, secure, and SEO-friendly</li>
              <li>• Easy to update as your business grows</li>
              <li>• Custom-designed to match your brand</li>
            </ul>
            <p>
              Whether you need a corporate site, portfolio, or blog, we deliver
              a solution that’s built to impress and built to last.
            </p>
          </div>
          <div className="point">
            <h3>Custom Programming</h3>
            <p>
              Solutions as Unique as Your Business. When templates can’t
              deliver, our custom programming brings your vision to life.{" "}
            </p>
            <h4>You get:</h4>
            <ul>
              <li>• Bespoke web applications and features</li>
              <li>• Seamless integration with your existing systems</li>
              <li>• Secure, scalable, and reliable code</li>
            </ul>
            <p>
              We make sure your website works exactly the way you want—no
              compromises.
            </p>
          </div>
          <div className="point">
            <h3>Shopify Websites</h3>
            <p>
              Grow Your Online Store with Confidence We design Shopify stores
              that are easy to manage and built to convert.
            </p>
            <h4>Expect:</h4>
            <ul>
              <li>• Visually compelling, branded storefronts</li>
              <li>• Fast, smooth shopping experiences</li>
              <li>• Optimized checkouts for maximum sales</li>
            </ul>
            <p>
              Your store will attract visitors—and turn them into loyal
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingService;
