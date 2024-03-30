import React, { useState, useEffect } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-24 flex justify-around items-center bg-slate-900 text-white relative">
      <div className="logo text-4xl basis-1/4 flex justify-center font-bold">
        Visio<span className="text-orange-600 font-black">.ai</span>
      </div>
      {isMediumScreen ? (
        <div className="menu-icon basis-1/4 flex justify-end ">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      ) : (
        <ul className="flex justify-center gap-10 items-center basis-1/2">
          <li>
            <a href="" className="font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="" className="font-semibold">
              Features
            </a>
          </li>
          <li>
            <a href="" className="font-semibold">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="font-semibold">
              Resources
            </a>
          </li>
        </ul>
      )}
      {isMediumScreen && (
        <>
          <div
            className={`dropdown-menu ${isMenuOpen ? "" : "hidden"} list-none`}
          >
            <ul className="absolute left-0 top-24 bg-slate-900 w-screen flex flex-col gap-6 py-5 items-center">
              <li>
                <a href="" className="font-md">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="font-md">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="font-md">
                  Pricing
                </a>
              </li>
              <li>
                <a href="" className="font-md">
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="btn basis-1/4 flex justify-center md:hidden">
        <Button text="Get Started"></Button>
      </div>
    </nav>
  );
};

export default Navbar;
