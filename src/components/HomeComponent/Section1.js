import React from "react";
import heroShape from "../../Assets/images/shape/hero-shape1.png";
import heroImg from "../../Assets/images/hero-img2.png";
import featureimg1 from "../../Assets/images/feat-4.png";
import featureimg2 from "../../Assets/images/feat-5.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Section1 = () => {
  return (
    <div>
      {/* Hero Start  */}
      <div className="section taskplus-hero-section-06">
        <div className="container pt-5">
          <div className="row flex-column-reverse flex-lg-row pt-5">
            <div className="col-lg-6">
              {/* Hero Image Start  */}
              <div className="hero-images">
                <img className="shape-1" src={heroShape} alt="" />
                <div className="images">
                  <img src={heroImg} alt="" />
                </div>
              </div>
              {/* Hero Image ennd  */}
            </div>
            <div className="col-lg-6">
              {/* Hero Content Start  */}
              <div className="hero-content">
                <h2 className="title" data-aos="fade-up" data-aos-delay="800">
                  Unleash Peak Performance with<span> Task Plus</span> -
                  Employee Monitoring Reimagined
                </h2>

                <div
                  className="hero-btn"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <a className="btn btn-4" href="/about">
                    About Us
                  </a>
                </div>
              </div>
              {/* Hero Content End  */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero End  */}
      {/* Features Start */}
      <div className="section taskplus-features-section-02">
        <div className="container">
          {/* Features Wrap Start */}
          <div className="features-wrap-02">
            <div className="row feature-row">
              <div className="col-lg-6 col-sm-12">
                {/* Features Item Start */}
                <div className="features-item">
                  <div className="features-icon">
                    <img src={featureimg1} className="h-24 w-24" alt="" />
                  </div>
                  <div className="features-content">
                    <h3 className="title">
                      <a href="#">Task Management</a>
                    </h3>
                    <p>
                      TaskPlus is a leading provider of task management
                      solutions designed to empower businesses to achieve
                      greater efficiency and productivity.
                    </p>
                  </div>
                </div>
                {/* Features Item End */}
              </div>
              <div className="col-lg-6 col-sm-12">
                {/* Features Item Start */}
                <div className="features-item">
                  <div className="features-icon">
                    <img src={featureimg2} alt="" />
                  </div>
                  <div className="features-content">
                    <h3 className="title">
                      <a href="#">Employee Tracking</a>
                    </h3>
                    <p>
                      We are committed to optimizing workflows and maximizing
                      efficiency, allowing businesses to focus on what matters
                      most.
                    </p>
                  </div>
                </div>
                {/* Features Item End */}
              </div>
            </div>
          </div>
          {/* Features Wrap End */}
        </div>
      </div>
      {/* Features End */}
    </div>
  );
};

export default Section1;
