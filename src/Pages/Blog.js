import React from "react";
import Navbar from "../components/HomeComponent/Navbar";
import Section1 from "../components/ContactComponent/Section1";
import Section2 from "../components/BlogComponent/Section2";
import Footer from "../components/HomeComponent/Footer";
const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <Section1 pageName={"Our Blogs"} />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Blog;
