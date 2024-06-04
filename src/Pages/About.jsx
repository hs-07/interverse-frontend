import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-black flex flex-col gap-8 p-4 md:p-16 landing">
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">About Us</h2>
        <span className="text-[#545454]">
          Interverse Solutions is a premier money exchange company with a vast
          global network. We specialize in providing competitive exchange rates
          and excellent FX spreads for our customers. As a company licensed by
          the Financial Conduct Authority (FCA), we are committed to maintaining
          the highest standards of compliance and security. Our mission is to
          deliver fast, reliable, and cost-effective money remittance services
          to individuals and nbusinesses worldwide. By focusing on these key
          features, Interverse Solutions strives to provide an unparalleled
          money remittance experience that meets the diverse needs of our global
          clientele.
        </span>
      </div>
    </div>
  );
};

export default About;
