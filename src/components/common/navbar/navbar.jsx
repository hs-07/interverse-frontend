import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navlinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Privacy Policy", path: "/privacyPolicy" },
    { title: "Terms and Conditions", path: "/termsAndConditions" },
    { title: "Cookie Policy", path: "/cookiePolicy" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full landing">
      <nav className="hidden lg:flex w-full h-[6rem] px-12 py-4 items-center justify-between bg-black ">
        <div className="h-full pr-6">
          <img src="/inter-logo.svg" alt="interverse" className="h-full" />
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex justify-end space-x-6">
            {Navlinks.map((link, index) => (
              <NavLink
                exact
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  `cursor-pointer font-[400] text-[16px] ${
                    isActive ? "text-[#F2C66D]" : "text-[#545454]"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </ul>
          <div className="">
            <button className="text-black bg-[#F2C66D] border-none text-[16px] h-[42px] w-32 font-[500] rounded-full items-center justify-center flex flex-wrap">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <>
        <nav className="flex lg:hidden w-full h-[4rem] bg-black md:px-8 px-4 justify-between items-center py-1">
          <div className="h-full">
            <img src="/inter-logo.svg" alt="remesa" className="h-full py-2" />
          </div>
          <div className="w-fit" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <div className="flex flex-col rounded-full bg-[#1C1C1C] w-8 h-8">
                <div className="w-6 h-1 bg-white rounded-lg rotate-45 translate-y-4 translate-x-1"></div>
                <div className="w-6 h-1 bg-white rounded-lg -rotate-45 translate-y-3 translate-x-1"></div>
              </div>
            ) : (
              <div className="w-8 h-8 grid grid-cols-2 items-center cursor-pointer rounded-full bg-[#1C1C1C] p-1">
                <div className="w-2 h-2 border-[2px] border-white rounded-full"></div>
                <div className="w-2 h-2 border-[2px] border-white rounded-full"></div>
                <div className="w-2 h-2 border-[2px] border-white rounded-full"></div>
                <div className="w-2 h-2 border-[2px] border-white rounded-full"></div>
              </div>
            )}
          </div>
        </nav>
        {isOpen && (
          <div className="w-full h-[100vh] bg-black z-[99] absolute">
            <ul className="flex flex-col justify-start items-center h-full space-y-6 py-12 font-semibold">
              {Navlinks.map((link, index) => (
                <NavLink
                  exact
                  to={link.path}
                  key={index}
                  className={({ isActive }) =>
                    `cursor-pointer font-[400] text-[16px] ${
                      isActive ? "text-[#F2C66D]" : "text-[#545454]"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              ))}
              <button className="text-black bg-[#F2C66D] border-none py-3 px-8 rounded-full">
                Sign Up
              </button>
            </ul>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
