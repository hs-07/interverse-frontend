import React from "react";
import { MacbookScroll } from "../components/common/macbook-scroll";
import Section1 from "../components/landing/section-1";
import Section2 from "../components/landing/section-2";
import Section3 from "../components/landing/section-3";
import Section4 from "../components/landing/section-4";
import Section5 from "../components/landing/section-5";

export default function LandingPage() {
  return (
    <>
      <div className="overflow-hidden bg-[#0B0B0F] w-full">
        <MacbookScroll
          title={
            <h1 className="text-[64px]">Finance is finally effortless.</h1>
          }
          src={`/wallpaper.jpg`}
          showGradient={false}
        />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
