import React from "react";

const Section3 = () => {
  return (
    <div>
      {/* Contact Start  */}
      <div className="section taskplus-contact-section taskplus-contact-section-02 taskplus-contact-section-03 section-padding-02">
        <div className="container">
          {/* Contact Wrap Start  */}
          <div className="contact-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Contact Form Start  */}
                <div className="contact-form">
                  <div className="contact-form-wrap">
                    <div className="heading-wrap text-center">
                      <span className="sub-title"> request a quote</span>
                      <h3 className="title">How May We Help You!</h3>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-sm-6">
                          {/* Single Form Start  */}
                          <div className="single-form">
                            <input type="text" placeholder="Name *" />
                          </div>
                          {/* Single Form End  */}
                        </div>
                        <div className="col-sm-6">
                          {/* Single Form Start  */}
                          <div className="single-form">
                            <input type="email" placeholder="Email *" />
                          </div>
                          {/* Single Form End  */}
                        </div>
                        <div className="col-sm-12">
                          {/* Single Form Start  */}
                          <div className="single-form">
                            <input type="text" placeholder="Subject *" />
                          </div>
                          {/* Single Form End  */}
                        </div>
                        <div className="col-sm-12">
                          {/* Single Form Start  */}
                          <div className="single-form">
                            <textarea placeholder="Write A Message"></textarea>
                          </div>
                          {/* Single Form End  */}
                        </div>
                        <div className="col-sm-12">
                          {/* Single Form Start  */}
                          <div className="form-btn">
                            <button className="btn" type="submit">
                              Send Message
                            </button>
                          </div>
                          {/* Single Form End  */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Contact Form End  */}
              </div>
            </div>
          </div>
          {/* Contact Wrap End  */}
        </div>
      </div>
      {/* Contact End  */}
    </div>
  );
};

export default Section3;
