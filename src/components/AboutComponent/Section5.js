import React, { useState, useEffect } from "react";
import img1 from "../../Assets/images/sign.png";

import { FaCheck } from "react-icons/fa";

const Section5 = () => {
  const [progress, setProgress] = useState({
    ITManagement: 0,
    DataSecurity: 0,
    InformationTechnology: 0,
  });

  useEffect(() => {
    setProgress({
      ITManagement: 80,
      DataSecurity: 95,
      InformationTechnology: 80,
    });
  }, []);

  return (
    <div>
      <div className="section taskplus-skill-section-02 taskplus-skill-section-03 section-padding">
        <div className="container">
          <div className="skill-wrap">
            <div className="row">
              <div className="col-lg-6">
                {/* Skill Left Start  */}
                <div className="skill-left">
                  <div className="section-title">
                    <h2 className="title">
                      We invite you to experience the TaskPlus difference.
                    </h2>
                  </div>
                  <div className="about-list">
                    <ul>
                      <li>
                        <span className="about-icon">
                          <i>
                            <FaCheck />
                          </i>
                        </span>
                        <span className="about-text">
                          Let us help you streamline your tasks
                        </span>
                      </li>
                      <li>
                        <span className="about-icon">
                          <i>
                            <FaCheck />
                          </i>
                        </span>
                        <span className="about-text">Boost productivity</span>
                      </li>
                      <li>
                        <span className="about-icon">
                          <i>
                            <FaCheck />
                          </i>
                        </span>
                        <span className="about-text">
                          Achieve your organizational goals.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* About Author Info Wrap Start  */}
                  <div className="about-author-info-wrap">
                    <div className="about-author">
                      <img src={img1} alt="" />
                      <h3 className="name">Shafiq </h3>
                      <span className="designation">CEO, TaskPlus</span>
                    </div>
                    <div className="about-info">
                      <p>Call to ask any question </p>
                      <h3 className="number">+1 205 4339147</h3>
                    </div>
                  </div>
                  {/* About Author Info Wrap End  */}
                </div>
                {/* Skill Left End  */}
              </div>
              <div className="col-lg-6">
                <div className="skill-right">
                  <p className="text">
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible freelance
                    talent for all your software development needs. building
                    cloud, infrastructure, network, etc. We put a strong focus
                    on the needs of your business to figure out solutions that
                    best fits your demand and nail it
                  </p>
                  <div className="counter-bar">
                    <div className="skill-item">
                      <span className="title">Task Management</span>
                      <div className="skill-bar">
                        <div className="bar-inner">
                          <div
                            className="bar progress-line color-1"
                            style={{ width: `${progress.ITManagement}%` }}
                          >
                            <span className="skill-percent">
                              <span className="counter">
                                {progress.ITManagement}
                              </span>
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="counter-bar">
                    <div className="skill-item">
                      <span className="title">Employee Tracking</span>
                      <div className="skill-bar">
                        <div className="bar-inner">
                          <div
                            className="bar progress-line color-3"
                            style={{ width: `${progress.DataSecurity}%` }}
                          >
                            <span className="skill-percent">
                              <span className="counter">
                                {progress.DataSecurity}
                              </span>
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="counter-bar">
                    <div className="skill-item">
                      <span className="title">Daily Work Report</span>
                      <div className="skill-bar">
                        <div className="bar-inner">
                          <div
                            className="bar progress-line color-1"
                            style={{
                              width: `${progress.InformationTechnology}%`,
                            }}
                          >
                            <span className="skill-percent">
                              <span className="counter">
                                {progress.InformationTechnology}
                              </span>
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
