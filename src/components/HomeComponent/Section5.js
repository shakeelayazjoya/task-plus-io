import React from "react";
import Counter from "./Counter";
import img1 from "../../Assets/images/cta-icon3.png"

const Section5 = () => {
  return (
    <div>
      {/* Cta Start */}
      <div className="section taskplus-cta-section-04 section-padding">
        <div className="container">
          <div className="cta-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7">
                {/* Cta Left Start */}
                <div className="cta-left">
                  <div className="section-title">
                    <h2 className="title white">
                      To make requests for further information, contact us{" "}
                    </h2>
                  </div>
                  <div className="cta-info">
                    <div className="cta-icon">
                      <img src={img1} alt="" />
                    </div>
                    <div className="cta-text">
                      <p>Call Us For Any inquiry</p>
                      <h3 className="number">+ 12054339147</h3>
                    </div>
                  </div>
                </div>
                {/* Cta Left End */}
              </div>
              <div className="col-lg-5">
                {/* Cta Right Start */}
                <div className="cta-right">
                  <div className="counter-item-box">
                    {/* Cta Item Start */}
                    <div className="counter-item">
                      <Counter value={10} durationInSeconds={10} />
                      <p>Happy clients</p>
                    </div>
                    {/* Cta Item End */}
                    {/* Cta Item Start */}
                    <div className="counter-item counter-1">
                      <Counter value={245} durationInSeconds={10} />
                      <p>Happy clients</p>
                    </div>
                    {/* Cta Item End */}
                  </div>
                  <div className="counter-item-box">
                    {/* Cta Item Start */}
                    <div className="counter-item">
                      <Counter value={491} durationInSeconds={10} />
                      <p>Finished projects</p>
                    </div>
                    {/* Cta Item End */}
                    {/* Cta Item Start */}
                    <div className="counter-item counter-2">
                      <Counter value={1090} durationInSeconds={10} />
                      <p>Media Posts</p>
                    </div>
                    {/* Cta Item End */}
                  </div>
                </div>
                {/* Cta Right End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cta End */}
    </div>
  );
};

export default Section5;
