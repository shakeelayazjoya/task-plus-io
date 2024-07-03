import React from "react";
import Header from "../components/HomeComponent/Header";
import Navbar from "../components/HomeComponent/Navbar";
import Section1 from "../components/HomeComponent/Section1";
import Section2 from "../components/HomeComponent/Section2";
import Section3 from "../components/HomeComponent/Section3";
import Section4 from "../components/HomeComponent/Section4";
import Section5 from "../components/HomeComponent/Section5";
import Section8 from "../components/HomeComponent/Section8";
import Footer from "../components/HomeComponent/Footer";
import Section9 from "../components/PricingComponent.js/Section3";
import QuickChat from "../components/HomeComponent/QuickChat";
// import Section6 from "../components/HomeComponent/Section6";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <QuickChat />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      {/* <Section6 /> */}
      <Section9 style={{ paddingBottom: "20px;" }} />
      {/* <Section8 /> */}
      <Footer />
    </div>
  );
};

export default Home;
