import React from 'react'

import Navbar from "../components/HomeComponent/Navbar";
import Section1 from '../components/ContactComponent/Section1';
import Section2 from '../components/ContactComponent/Section2';
import Section3 from '../components/ContactComponent/Section3';
import Section4 from '../components/ContactComponent/Section4';
import Footer from "../components/HomeComponent/Footer"


const Contact = () => {
  return (
    <div className='contact'>
      <Navbar/>
      <Section1 pageName={"Contact Us"}/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default Contact
