import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../../Assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      {/* Footer Section Start  */}
      <div className="section footer-section footer-section-03 footer-section-05">
        <div className="container">
          {/* Footer Widget Wrap Start  */}
          <div className="footer-widget-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/* Footer Widget Start  */}
                <div className="footer-widget-about">
                  <a className="footer-logo" href="/">
                    <img className="logo" src={logo} alt="Logo" />
                  </a>
                  <p>
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible freelance
                    talent.
                  </p>
                  <div className="footer-social">
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/taskplus.io">
                          <i>
                            {" "}
                            <FaFacebookF />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/taskplusllc">
                          <i>
                            <FaInstagram />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/task-plus">
                          <i>
                            <FaLinkedin />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget End  */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Footer Widget Start  */}
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Useful Links</h4>

                  <div className="widget-link">
                    <ul className="link">
                      <li>
                        <a href="/about">About Company</a>
                      </li>
                      <li>
                        <a href="/terms-and-conditions">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/refund-policy">Refund Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget End  */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Footer Widget Start  */}
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Our Services</h4>

                  <div className="widget-link">
                    <ul className="link">
                      <li>
                        <a href="#">Team Managment</a>
                      </li>
                      <li>
                        <a href="#">Tracking System</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget End  */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Footer Widget Start  */}
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Contact Information</h4>

                  <div className="widget-info">
                    <ul>
                      <li>
                        <div
                          className="info-icon"
                          style={{ color: "#fff", marginRight: "10px" }}
                        >
                          <BsPhone />
                        </div>
                        <div className="info-text">
                          <span>
                            <a href="tel:+12054339147">+12054339147</a>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div
                          className="info-icon"
                          style={{ color: "#fff", marginRight: "10px" }}
                        >
                          <BsEnvelope />
                        </div>
                        <div className="info-text">
                          <span>
                            <a href="mailto:shafiq@taskplus.io">
                              shafiq@taskplus.io
                            </a>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget End  */}
              </div>
            </div>
          </div>
          {/* Footer Widget Wrap End  */}
        </div>

        {/* Footer Copyright Start  */}
        <div className="footer-copyright-area">
          <div className="container">
            <div className="footer-copyright-wrap">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="copyright-text text-left">
                    <p>© Copyrights 2024 TaskPlus | All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="copyright-text text-right">
                    <p>
                      Developed by{" "}
                      <a
                        href="https://maxcoretechnologies.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Maxcore Technologies
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright End  */}
      </div>
      {/* Footer Section End  */}
    </div>
  );
};

export default Footer;
