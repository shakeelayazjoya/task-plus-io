import React from 'react'
import img1 from "../../Assets/images/info-1.png"
import img2 from "../../Assets/images/info-2.png"
import img3 from "../../Assets/images/info-3.png"

const Section2 = () => {
  return (
    <div>
      {/* Contact Info Start  */}
        <div className="section contact-info-section section-padding-02">
            <div className="container">
                {/* Contact Info Wrap Start  */}
                <div className="contact-info-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                           {/* Single Contact Info Start  */}
                            <div className="single-contact-info text-center">
                                <div className="info-icon">
                                    <img src={img1} alt=""/>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Give us a call</h5>
                                    <p>(+1) 205-433 9147</p>
                                </div>
                            </div>
                           {/* Single Contact Info End  */}
                        </div>
                        <div className="col-lg-4 col-sm-6">
                           {/* Single Contact Info Start  */}
                            <div className="single-contact-info text-center">
                                <div className="info-icon">
                                    <img src={img2} alt=""/>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Drop us a line</h5>
                                    <p>shafiq@taskplus.io</p>
                                </div>
                            </div>
                           {/* Single Contact Info End  */}
                        </div>
                        <div className="col-lg-4 col-sm-6">
                           {/* Single Contact Info Start  */}
                            <div className="single-contact-info text-center">
                                <div className="info-icon">
                                    <img src={img3} alt=""/>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Address</h5>
                                    <p>Gulberg 2, Lahore, Pakistan</p>
                                </div>
                            </div>
                           {/* Single Contact Info End  */}
                        </div>
                    </div>
                </div>
                {/* Contact Info Wrap End  */}
            </div>
        </div>
        {/* Contact Info End  */}
    </div>
  )
}

export default Section2
