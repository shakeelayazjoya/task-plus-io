import React, { useEffect } from "react";
import Swiper from "swiper";
import logo1 from "../../Assets/images/brand/brand-1.png";
import logo2 from "../../Assets/images/brand/brand-2.png";
import logo3 from "../../Assets/images/brand/brand-3.png";
import logo4 from "../../Assets/images/brand/brand-4.png";
import logo5 from "../../Assets/images/brand/brand-5.png";

const SwiperDemo = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy(); // Clean up Swiper instance on component unmount
    };
  }, []); // Run effect only once on component mount

  return (
    <div>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide ">
            <img src={logo1} alt="Logo 1" />
          </div>
          <div className="swiper-slide">
            <img src={logo2} alt="Logo 2" />
          </div>
          <div className="swiper-slide">
            <img src={logo3} alt="Logo 3" />
          </div>
          <div className="swiper-slide">
            <img src={logo4} alt="Logo 3" />
          </div>
          <div className="swiper-slide">
            <img src={logo5} alt="Logo 3" />
          </div>
          <div className="swiper-slide">
            <img src={logo3} alt="Logo 3" />
          </div>
          <div className="swiper-slide">
            <img src={logo4} alt="Logo 3" />
          </div>
          <div className="swiper-slide">
            <img src={logo5} alt="Logo 3" />
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperDemo;
