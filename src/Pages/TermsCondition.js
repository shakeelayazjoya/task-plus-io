import React from "react";
import Navbar from "../components/HomeComponent/Navbar";
import Section1 from "../components/ContactComponent/Section1";
import Footer from "../components/HomeComponent/Footer";
import TermsConditionSection from "../components/PolicyPages/TermsCondition";

function TermsAndConditionPage() {
  return (
    <div>
      <Navbar />
      <Section1 pageName={"Terms & Conditions"} />
      <TermsConditionSection />
      <Footer />
    </div>
  );
}

export default TermsAndConditionPage;
