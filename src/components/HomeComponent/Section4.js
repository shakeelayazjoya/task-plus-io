import React from "react";
import shape1 from "../../Assets/images/shape/experince-shape2.png";

import { FaCheck } from "react-icons/fa";

const Section4 = () => {
  return (
    <div>
      {/* Service Start  */}
      <div className="section taskplus-service-section-04 taskplus-service-section-07 section-padding-02">
        <div className="container">
          {/* Service Wrap Start  */}
          <div className="service-wrap">
            <div className="section-title text-center">
              <h2 className="title">Task Plus Advantage:</h2>
            </div>
            <div className="service-content-wrap">
              <div className="row">
                <div className="col-lg-6">
                  {/* Experience Wrap Start  */}
                  <div className="experience-wrap">
                    <img className="shape-1" src={shape1} alt="" />
                    <div className="experience">
                      <h3 className="number">10</h3>
                      <span>Years Experience Working</span>
                    </div>
                  </div>
                  {/* Experience Wrap End  */}
                </div>
                <div className="col-lg-6">
                  {/* Service Content Start  */}
                  <div className="service-content">
                    <div className="service-list">
                      <ul>
                        <li>
                          <span className="service-icon">
                            <i>
                              <FaCheck />
                            </i>
                          </span>
                          <span className="service-text">
                            <h4>Real-time Activity Tracking:</h4> Monitor
                            application usage, website visits, and keystroke
                            activity to gain a holistic understanding of
                            employee engagement and identify potential
                            bottlenecks.
                          </span>
                        </li>
                        <li>
                          <span className="service-icon">
                            <i>
                              <FaCheck />
                            </i>
                          </span>
                          <span className="service-text">
                            <h4>Granular Insights & Reporting: </h4>Generate
                            detailed reports to analyze trends, optimize
                            workflows, and measure team performance with
                            actionable data.
                          </span>
                        </li>
                        <li>
                          <span className="service-icon">
                            <i>
                              <FaCheck />
                            </i>
                          </span>
                          <span className="service-text">
                            <h4>Customizable Alerts & Notifications: </h4>
                            Set up alerts for potential security risks,
                            excessive idle time, or policy violations, ensuring
                            proactive intervention.
                          </span>
                        </li>
                        <li>
                          <span className="service-icon">
                            <i>
                              <FaCheck />
                            </i>
                          </span>
                          <span className="service-text">
                            <h4>Privacy-Focused Design: </h4>
                            We prioritize data privacy and transparency,
                            ensuring employee information is secure and
                            ethically utilized.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Service Content En  */}
                </div>
              </div>
            </div>
          </div>
          {/* Service Wrap End  */}
        </div>
      </div>
      {/* Service End  */}
    </div>
  );
};

export default Section4;
