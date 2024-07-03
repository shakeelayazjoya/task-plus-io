import React from 'react'
import Navbar from "../components/HomeComponent/Navbar";
import Section1 from '../components/ContactComponent/Section1';
import Section2 from '../components/HomeComponent/Section3'
import Section3 from '../components/PricingComponent.js/Section3';
import Section4 from '../components/PricingComponent.js/Section4';
import Footer from '../components/HomeComponent/Footer';



const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Section1 pageName={"Pricing Table"} />
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default Pricing
