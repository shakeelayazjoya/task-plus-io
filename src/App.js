import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Price from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy";
import TermsAndConditionPage from "./Pages/TermsCondition";
import RefundPolicyPage from "./Pages/RefundPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
