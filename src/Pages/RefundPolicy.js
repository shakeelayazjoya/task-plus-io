import React from "react";
import Navbar from "../components/HomeComponent/Navbar";
import Section1 from '../components/ContactComponent/Section1';
import Footer from '../components/HomeComponent/Footer';
import RefundPolicySection from "../components/PolicyPages/RefundPolicy";

function RefundPolicyPage() {
  return (
    <div>
      <Navbar />
      <Section1 pageName={"Refund Policy"} />
      <RefundPolicySection />
      <Footer />
    </div>
  );
}

export default RefundPolicyPage;
