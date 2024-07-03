import React from 'react'
import Navbar from "../components/HomeComponent/Navbar";
import Section1 from '../components/ContactComponent/Section1';
import Footer from '../components/HomeComponent/Footer';
import PrivacyPolicyPageComponent from '../components/PolicyPages/PrivacyPolicy';

function PrivacyPolicyPage() {
  return (
    <div>
    <Navbar />
    <Section1 pageName={"Privacy Policy"} />
    <PrivacyPolicyPageComponent />
    <Footer/>
  </div>
  )
}

export default PrivacyPolicyPage