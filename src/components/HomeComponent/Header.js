import React from "react";
// import "./homeStyle.css";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      {/* Header Start   */}
      <div id="header" className="section header-section header-section-06 ">
        {/* Header Top Start   */}
        <div className="header-top-section d-none d-lg-block">
          <div className="container">
            <div className="header-top-wrapper">
              <div className="header-top-info">
                <ul>
                  <li>
                    <i>
                      <FaPhone />
                    </i>{" "}
                    +1 (205) 433 9147{" "}
                  </li>
                  <li>
                    <i>
                      <IoMail />
                    </i>{" "}
                    shafiq@taskplus.io
                  </li>
                </ul>
              </div>
              <div className="header-social">
                <span className="label">Follow Us</span>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/taskplus.io">
                      <i>
                        <IoLogoFacebook />
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
                        <FaLinkedinIn />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top End   */}
      </div>
     
    </div>
  );
};

export default Header;
