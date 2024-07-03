import React from "react";
import Navbar from "../components/HomeComponent/Navbar";
import Section1 from "../components/ContactComponent/Section1";
import Section2 from "../components/AboutComponent/Section2";
import Section3 from "../components/AboutComponent/Section3";
import Section4 from "../components/AboutComponent/Section4";
import Section5 from "../components/AboutComponent/Section5";
// import Section6 from "../components/AboutComponent/Section6";
import Section8 from '../components/PricingComponent.js/Section3';
import Section9 from '../components/PricingComponent.js/Section4';
import Footer from '../components/HomeComponent/Footer';


const About = () => {
  return (
    <div className="about">
      <Navbar />
      <Section1 pageName={"About Us"} />
      <Section2 />
      {/* <Section3 /> */}
      <Section4 />
      <Section5 />
      {/* <Section6 /> */}
      <Section8 />
      <Section9/>
      <Footer/>
    </div>
  );
};

export default About;
