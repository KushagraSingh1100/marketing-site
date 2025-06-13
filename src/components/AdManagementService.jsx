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
          Ad Management Services: We create and manage targeted advertising campaigns that
          drive measurable results. From strategy to execution, we ensure your brand reaches
          the right audience at the right time across all digital platforms.
        </p>
      </div>
      <div className="service-page-bottom">
        <h1>Our Comprehensive Ad Management Solutions</h1>
        <h4>
          At Ignite Digitals, we provide end-to-end ad campaign services focused on ROI and
          performance. Our offerings include:
        </h4>
        <div className="service-page-bottom-points">
          <div className="point">
            <h3>• Google & Search Engine Ads</h3>
            <p>
              Our team designs high-converting search engine ads using carefully researched
              keywords and compelling ad copy. We optimize bidding strategies, monitor
              performance, and continuously refine campaigns to ensure the lowest CPC and
              highest ROI. Real-time analytics keep your ad spend under control and impactful.
            </p>
          </div>
          <div className="point">
            <h3>• Social Media Ad Campaigns</h3>
            <p>
              From Meta Ads to LinkedIn and YouTube campaigns, we craft visually engaging and
              behaviorally targeted ads tailored for each platform. We handle creative design,
              A/B testing, audience segmentation, and retargeting strategies to maximize
              impressions, clicks, and conversions.
            </p>
          </div>
          <div className="point">
            <h3>• Performance Reporting & Optimization</h3>
            <p>
              Every campaign is data-driven. We provide detailed performance reports and KPIs
              such as CTR, CPM, and ROI. Our team continually tests and refines campaigns to
              boost results, reduce costs, and align with your business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdManagementService;
