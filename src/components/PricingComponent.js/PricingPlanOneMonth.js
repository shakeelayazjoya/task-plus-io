import React from "react";

const PricingPlanOneMonthSection = () => {
  return (
    <>
      <div className="section-title text-center">
        <h2 className="title">All Plans Billed Monthly </h2>
      </div>
      <div className="pricing-content-wrap">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* Single Pricing Start  */}
            <div className="single-pricing">
              <div className="pricing-badge">
                <span className="title">Basic Plan</span>
              </div>
              <div className="pricing-price">
                <h3 className="price">
                  4.99 $<span> / Month</span>
                </h3>
              </div>
              <div className="pricing-content">
                <ul className="pricing-list">
                  <li>Limited screenshots</li>
                  <li>3 users limited</li>
                  <li>Limited reports</li>
                </ul>
                <div className="pricing-btn">
                  <a className="btn" href="/">
                    Try It Now
                  </a>
                </div>
              </div>
            </div>
            {/* Single Pricing End  */}
          </div>
          <div className="col-lg-4 col-md-6">
            {/* Single Pricing Start  */}
            <div className="single-pricing active">
              <div className="pricing-badge">
                <span className="title"> Silver plan</span>
              </div>
              <div className="pricing-price">
                <h3 className="price">
                  8.99$<span> / Month</span>
                </h3>
              </div>
              <div className="pricing-content">
                <ul className="pricing-list">
                  <li>Upto 10 users</li>
                  <li>Upto 2 company accounts</li>
                  <li>Screenshots </li>
                  <li>Limited timesheets</li>
                </ul>
                <div className="pricing-btn">
                  <a className="btn" href="/">
                    Try It Now
                  </a>
                </div>
              </div>
            </div>
            {/* Single Pricing End  */}
          </div>
          <div className="col-lg-4 col-md-6">
            {/* Single Pricing Start  */}
            <div className="single-pricing">
              <div className="pricing-badge">
                <span className="title">Gold Plan</span>
              </div>
              <div className="pricing-price">
                <h3 className="price">
                  24.99$<span> / Month</span>
                </h3>
              </div>
              <div className="pricing-content">
                <ul className="pricing-list">
                  <li>100 user</li>
                  <li>Unlimited time sheets</li>
                  <li>Unlimited Reporting</li>
                  <li>Unlimited downloads </li>
                  <li>Unlimited screenshots</li>
                  <li>Full access to all features.</li>
                </ul>
                <div className="pricing-btn">
                  <a className="btn" href="/">
                    Try It Now
                  </a>
                </div>
              </div>
            </div>
            {/* Single Pricing End  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlanOneMonthSection;
