import React from "react";
import section2shape from "../../Assets/images/shape/about-shape1.png";
import section2img from "../../Assets/images/about-img3.jpg";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Section2 = () => {
  return (
    <div>
      {/* About Start  */}
      <div className="section taskplus-about-section-06 section-padding-03">
        <div className="shape-1"></div>
        <div className="container">
          {/* About Wrapper Start  */}
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                {/* About Image Start  */}
                <div className="about-img">
                  <img className="shape-1" src={section2shape} alt="" />
                  <div className="image">
                    <img src={section2img} alt="" />
                  </div>
                  <div className="play-btn">
                    <a
                      className="popup-video"
                      href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                    >
                      <i>
                        <FaPlay />
                      </i>
                    </a>
                  </div>
                </div>
                {/* About Image End  */}
              </div>
              <div className="col-lg-6">
                {/* About Content Wrap Start  */}
                <div className="about-content-wrap">
                  <div className="section-title">
                    <h3 className="sub-title color-3">Who we are</h3>
                    {/* <h2 className="title">Comprehensive Protection for Devices</h2> */}
                  </div>
                  <p className="text">
                    In today's fast-paced world, maximizing team productivity
                    and ensuring data security is crucial. Task Plus isn't just
                    an employee monitoring system; it's a comprehensive solution
                    designed to:
                  </p>
                  {/* About List Wrap Start  */}
                  <div className="about-list-wrap">
                    <ul className="about-list">
                      <li className="list">
                        <h4>● Boost Productivity:</h4>
                        <span>
                          Gain actionable insights into employee activity,
                          identify areas for improvement, and optimize workflows
                          for peak efficiency.
                        </span>
                      </li>
                      <li className="list">
                      <h4>● Empower Transparency:</h4> <span>Foster a culture of open communication by providing clear visibility into individual and team performance, fostering trust and collaboration.</span>

                      </li>
                      <li className="list">
                      <h4>● Enhance Data Security:</h4><span>Mitigate risk and ensure adherence to company policies by monitoring website and application usage, safeguarding sensitive information.</span> 
                      </li>
                    </ul>
                  </div>
                  {/* About List Wrap End  */}
                </div>
                {/* About Content Wrap End  */}
              </div>
            </div>
          </div>
          {/* About Wrapper End  */}
        </div>
      </div>
      {/* About End  */}
    </div>
  );
};

export default Section2;
