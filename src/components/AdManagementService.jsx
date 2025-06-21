import "./ServicePage.css";

function AdManagementService() {
  return (
    <div className="service-page">
      <div className="service-page-top">
        <h1>
          Ad <br />
          Management
        </h1>
        <p>
          We plan and execute data-driven advertising campaigns that deliver
          real, trackable results. From initial strategy to ongoing
          optimization, we ensure your brand connects with the right audience at
          the perfect moment across all major digital channels.
        </p>
      </div>
      <div className="service-page-bottom">
        <h1>Our Comprehensive Ad Management Solutions</h1>
        <h4>
          At Ignite Digitals, we offer complete ad campaign management focused
          on maximizing your ROI and driving business growth. Our services
          include:
        </h4>
        <div className="service-page-bottom-points">
          <div className="point">
            <h3>Google & Search Engine Ads</h3>
            <p>
              Connect with Customers When They’re Searching We design
              high-converting search engine ads using strategic keywords and
              compelling copy.
            </p>
            <h4>You get:</h4>
            <ul>
              <li>• Optimized bidding strategies for the lowest CPC</li>
              <li>• Ongoing performance monitoring and campaign refinement</li>
              <li>• Real-time analytics to keep your ad spend efficient</li>
            </ul>
            <p>Drive more qualified leads and maximize your ROI.</p>
          </div>
          <div className="point">
            <h3>Social Media Ad Campaigns</h3>
            <p>
              Reach Audiences Where They Spend Time We craft visually engaging,
              platform-specific ads for Meta, LinkedIn, YouTube, and more.
            </p>
            <h4>You get:</h4>
            <ul>
              <li>• Creative ad design tailored to each platform</li>
              <li>• Audience segmentation, A/B testing, and retargeting</li>
              <li>
                • Campaigns built for maximum impressions, clicks, and
                conversions
              </li>
            </ul>
            <p>Stand out and convert more customers on every channel.</p>
          </div>
          <div className="point">
            <h3>Performance Reporting & Optimization</h3>
            <p>
              Know Exactly How Your Ads Perform Every campaign is data-driven
              and results-focused.
            </p>
            <h4>You get:</h4>
            <ul>
              <li>
                • Detailed performance reports with KPIs like CTR, CPM, and ROI
              </li>
              <li>• Continuous testing and optimization for better results</li>
              <li>• Transparent insights aligned with your business goals</li>
            </ul>
            <p>Stay informed and confident in your advertising investment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdManagementService;
