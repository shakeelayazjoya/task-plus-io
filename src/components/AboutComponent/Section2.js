import React from 'react'
import shape1 from "../../Assets/images/shape/about-shape2.png"
import img1 from "../../Assets/images/taskmanagement.jpg"
import img2 from "../../Assets/images/teammanagement.jpg"

const Section2 = () => {
  return (
    <div>
        {/* About Start  */}
        <div className="section taskplus-about-section-07 section-padding">
            <div className="shape-1"></div>
            <div className="container">
                 {/* About Wrapper Start  */}
                <div className="about-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                             {/* About Image Wrap Start  */}
                            <div className="about-img-wrap">
                                <img className="shape-1" src={shape1} alt=""/>
                                <div className="about-img">
                                    <img src={img1} alt="" width={300} height={380}/>
                                </div>
                                <div className="about-img about-img-2">
                                    <img src={img2} alt="" width={300} height={400}/>
                                </div>
                            </div>
                             {/* About Image Wrap End  */}
                        </div>
                        <div className="col-lg-6">
                             {/* About Content Wrap Start  */}
                            <div className="about-content-wrap">
                                <div className="section-title">
                                    <h3 className="sub-title">Who we are</h3>
                                    <h2 className="title">Empowering Businesses Through Streamlined Task Management
                                    </h2>
                                </div>
                                <p className="text">
                                TaskPlus is a leading provider of task management solutions designed to empower businesses to achieve greater efficiency and productivity. We are passionate about creating innovative tools that simplify complex workflows and help organizations get things done.
                                </p>
                                 {/* About List Start  */}
                                <div className="about-list-03">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="about-list-item-03">
                                                <h3 className="title">Our Mission</h3>
                                                <p>Our mission is to revolutionize the way businesses manage tasks by providing a user-friendly and comprehensive platform that fosters collaboration, streamlines processes, and boosts overall success.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                 {/* About List End  */}
                            </div>
                             {/* About Content Wrap End  */}
                        </div>
                    </div>
                </div>
                 {/* About Wrapper End  */}
            </div>
        </div>
         {/* About End  */}
    </div>
  )
}

export default Section2
