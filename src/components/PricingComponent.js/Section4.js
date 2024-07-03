import React from "react";
import img1 from "../../Assets/images/cta-icon2.png";

const Section4 = () => {
  return (
    <div>
      {/* Cta Start  */}
      <div className="section taskplus-cta-section-02 section-padding-02">
        <div className="container">
          {/* Cta Wrap Start  */}
          <div className="cta-wrap">
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-8">
                {/* Cta Content Start  */}
                <div className="cta-content">
                  <div className="cta-icon">
                    <img src={img1} alt="" />
                  </div>
                  <p>We’re Delivering the best customer Experience</p>
                </div>
                {/* Cta Content End  */}
              </div>
              <div className="col-xl-3 col-lg-4">
                {/* Cta Button Start  */}
                <div className="cta-btn">
                  <a
                    className="btn-white"
                    href="tel:+12054339147"
                    style={{
                      paddingLeft: "24px",
                      paddingRight: "24px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      fontSize: "20px",
                      borderRadius: "10px",
                      border: "none",
                      fontWeight: "bold",
                    }}
                  >
                    +1 205 433 9147
                  </a>
                </div>
                {/* Cta Button End  */}
              </div>
            </div>
          </div>
          {/* Cta Wrap End  */}
        </div>
      </div>
      {/* Cta End  */}
    </div>
  );
};

export default Section4;
