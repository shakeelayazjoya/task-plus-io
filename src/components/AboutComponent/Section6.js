import React from "react";
import { FaFacebookF, FaDribbble, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img1 from "../../Assets/images/team/team-1.jpg";
import img2 from "../../Assets/images/team/team-2.jpg";
import img3 from "../../Assets/images/team/team-3.jpg";
import img4 from "../../Assets/images/team/team-4.jpg";

const Section6 = () => {
  return (
    <div>
      {/* Team Start  */}
      <div className="section taskplus-team-section taskplus-team-section-02 section-padding">
        <div className="container">
          {/* Team Wrap Start  */}
          <div className="team-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">Our expert team </h3>
              <h2 className="title white"> We have world expert team</h2>
            </div>
            {/* Team Content Wrap Start  */}
            <div className="team-content-wrap">
              <div className="swiper-container team-active">
                <div className="swiper-wrapper">
                  <div className="">
                    {/* Single Team Start  */}
                    <div className="single-team">
                      <div className="team-img" style={{ width: "250px" }}>
                        <a href="team.html">
                          <img src={img1} alt="" />
                        </a>
                      </div>
                      <div className="team-content">
                        <h3 className="name">
                          <a href="team.html">
                            Shafiq
                          </a>
                        </h3>
                        <span className="designation">CEO, TaskPlus</span>
                        <div className="team-social">
                          <ul className="social">
                            <li>
                              <a href="/">
                                <i>
                                  <FaFacebookF />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaXTwitter />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-dribbble">
                                  <FaDribbble />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-behance">
                                  <FaBehance />
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Single Team End  */}
                  </div>
                  <div className="">
                    {/* Single Team Start  */}
                    <div className="single-team">
                      <div className="team-img" style={{ width: "250px" }}>
                        <a href="team.html">
                          <img src={img2} alt="" />
                        </a>
                      </div>
                      <div className="team-content">
                        <h3 className="name">
                          <a href="team.html">
                            Arnold <br /> human
                          </a>
                        </h3>
                        <span className="designation">CEO, taskplus</span>
                        <div className="team-social">
                          <ul className="social">
                            <li>
                              <a href="/">
                                <i>
                                  <FaFacebookF />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaXTwitter />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-dribbble">
                                  <FaDribbble />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-behance">
                                  <FaBehance />
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Single Team End  */}
                  </div>
                  <div className="">
                    {/* Single Team Start  */}
                    <div className="single-team">
                      <div className="team-img" style={{ width: "250px" }}>
                        <a href="team.html">
                          <img src={img3} alt="" />
                        </a>
                      </div>
                      <div className="team-content">
                        <h3 className="name">
                          <a href="team.html">
                            Mike <br /> Holder
                          </a>
                        </h3>
                        <span className="designation">CEO, taskplus</span>
                        <div className="team-social">
                          <ul className="social">
                            <li>
                              <a href="/">
                                <i>
                                  <FaFacebookF />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaXTwitter />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-dribbble">
                                  <FaDribbble />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-behance">
                                  <FaBehance />
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Single Team End  */}
                  </div>
                  <div className="">
                    {/* Single Team Start  */}
                    <div className="single-team">
                      <div className="team-img" style={{ width: "250px" }}>
                        <a href="team.html">
                          <img src={img4} alt="" />
                        </a>
                      </div>
                      <div className="team-content">
                        <h3 className="name">
                          <a href="team.html">
                            Joakim <br /> Ken
                          </a>
                        </h3>
                        <span className="designation">CEO, taskplus</span>
                        <div className="team-social">
                          <ul className="social">
                            <li>
                              <a href="/">
                                <i>
                                  <FaFacebookF />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaXTwitter />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-dribbble">
                                  <FaDribbble />
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="fab fa-behance">
                                  <FaBehance />
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Single Team End  */}
                  </div>
                </div>

                {/* Add Pagination  */}
                <div className="swiper-pagination"></div>
              </div>
            </div>
            {/* Team Content Wrap End  */}
          </div>
          {/* Team Wrap End  */}
        </div>
      </div>
      {/* Team End  */}
    </div>
  );
};

export default Section6;
