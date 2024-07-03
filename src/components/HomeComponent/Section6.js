import React from "react";
// import "./homeStyle.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Assets/images/testi-3.jpg";
import img2 from "../../Assets/images/testi-icon.png";
import img3 from "../../Assets/images/testi-4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Section6() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <div className="section bg-cover taskplus-testimonial-section-02 taskplus-testimonial-section-03 section-padding-02">
        <div className="container">
          <div className="testimonial-wrap-02">
            <div className="section-title text-center">
              <h3 className="sub-title color-3">Testimonial</h3>
              <h2 className="title">20k+ satisfied clients worldwide</h2>
            </div>
            <div className="testimonial-content-wrap-02">
              <div className="swiper-container testimonial-02-active">
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="single-testimonial-02">
                        <div className="testimonial-thumb">
                          <img src={img1} alt="" />
                        </div>
                        <div className="testimonial-content">
                          <img src={img2} alt="" />
                          <p>
                            Accelerate innovation with world-class tech teams
                            Beyond more stoic this along goodness hey this this
                            wow manatee
                          </p>
                          <span className="name">Mike Holder</span>
                          <span className="designation">
                            {" "}
                            / CEO, Harlond inc
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="single-testimonial-02">
                        <div className="testimonial-thumb">
                          <img src={img3} alt="" />
                        </div>
                        <div className="testimonial-content">
                          <img src={img2} alt="" />
                          <p>
                            Accelerate innovation with world-class tech teams
                            Beyond more stoic this along goodness hey this this
                            wow manatee
                          </p>
                          <span className="name">Mike Fermalin</span>
                          <span className="designation">
                            {" "}
                            / CEO, Harlond inc
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="single-testimonial-02">
                        <div className="testimonial-thumb">
                          <img src={img1} alt="" />
                        </div>
                        <div className="testimonial-content">
                          <img src={img2} alt="" />
                          <p>
                            Accelerate innovation with world-class tech teams
                            Beyond more stoic this along goodness hey this this
                            wow manatee
                          </p>
                          <span className="name">Mike Holder</span>
                          <span className="designation">
                            {" "}
                            / CEO, Harlond inc
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Swiper>
  );
}

export default Section6;
