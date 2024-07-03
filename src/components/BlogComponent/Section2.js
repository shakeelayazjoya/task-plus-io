import React from "react";
import img1 from "../../Assets/images/blog/blog-1.jpg";
import img2 from "../../Assets/images/blog/blog-2.jpg";
import img3 from "../../Assets/images/blog/blog-3.jpg";
import img4 from "../../Assets/images/blog/blog-5.jpg";
import img5 from "../../Assets/images/blog/blog-6.jpg";
import img6 from "../../Assets/images/blog/blog-4.jpg";
import img7 from "../../Assets/images/blog/blog-7.jpg";
import img8 from "../../Assets/images/blog/blog-8.jpg";
import img9 from "../../Assets/images/blog/blog-9.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Section2 = () => {
  const list = [
    {
      image: img1,
      date: "08",
      month: "Aug",
      Question: "How to become a successful businessman?",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img2,
      date: 10,
      month: "Aug",
      Question: "Who Needs Extract Value From Data?",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img3,
      date: 12,
      month: "Aug",
      Question: "Easy and Most Powerful Server and Platform.",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img4,
      date: 10,
      month: "Aug",
      Question: "Who Needs Extract Value From Data?",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img5,
      date: 12,
      month: "Aug",
      Question: "Easy and Most Powerful Server and Platform.",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img6,
      date: 8,
      month: "Aug",
      Question: "How to become a successful businessman",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img7,
      date: 10,
      month: "Aug",
      Question: "Who Needs Extract Value From Data?",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img8,
      date: 12,
      month: "Aug",
      Question: "Easy and Most Powerful Server and Platform.",
      name: "Andrew Paker",
      comments: 0,
    },
    {
      image: img9,
      date: 12,
      month: "Aug",
      Question: "Easy and Most Powerful Server and Platform.",
      name: "Andrew Paker",
      comments: 0,
    },
  ];
  return (
    <div>
      {/* Blog Start  */}
      <div className="section taskplus-blog-grid-section section-padding">
        <div className="container">
          <div className="taskplus-blog-grid-wrap">
            <div className="row">
              {list.map((e, k) => {
                return (
                  <div className="col-lg-4 col-md-6" key={k}>
                    {/* Single Blog Start  */}
                    <div className="single-blog">
                      <div className="blog-image">
                        <a href="blog-details.html">
                          <img src={e.image} alt="" />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>{e.date}</span>
                            {e.month}
                          </span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span>
                            <i className="fas fa-user"></i> <a href="#">{e.name}</a>
                          </span>
                          <span>
                            <i className="far fa-comments"></i> {e.comments}{" "}
                            Comments
                          </span>
                        </div>
                        <h3 className="title">
                          <a href="blog-details.html">{e.text}</a>
                        </h3>
                        <div className="blog-btn">
                          <a className="blog-btn-link" href="/">
                            Read Full{" "}
                            <i>
                              {" "}
                              <FaArrowRight />
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Single Blog End  */}
                  </div>
                );
              })}
            </div>
            {/* Page Pagination Start  */}
            <div className="taskplus-pagination">
              <ul className="pagination justify-content-center">
                <li>
                  <a href="#">
                    <i>
                      <FaAngleLeft />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="blog.html">1</a>
                </li>
                <li>
                  <a className="active" href="blog.html">
                    2
                  </a>
                </li>
                <li>
                  <a href="blog.html">3</a>
                </li>
                <li>
                  <span>...</span>
                </li>
                <li>
                  <a href="blog.html">
                    <i>
                      <FaAngleRight />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Page Pagination End  */}
          </div>
        </div>
      </div>
      {/* Blog End  */}
    </div>
  );
};

export default Section2;
