import React from "react";
import MacbookScroll from "../components/common/macbook-scroll";
import Section1 from "../components/landing/section-1";
import Section2 from "../components/landing/section-2";
import Section4 from "../components/landing/section-4";
import Section5 from "../components/landing/section-5";
import Section7 from "../components/landing/section-7";
import Section9 from "../components/landing/section-9";
import Footer from "../components/landing/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col landing">
      <MacbookScroll />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section7 />
      <Section9 />
      <Footer />
    </div>
  );
}
