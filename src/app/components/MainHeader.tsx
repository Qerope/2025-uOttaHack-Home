"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ColorLogo from "../assets/colourLogo.svg";
import mlh from "../assets/MLH.png";
import mlh_black from "../assets/black.svg";
import Insta from "../assets/insta.svg";
import Linkedin from "../assets/linkedin.svg";
import Discord from "../assets/discord.svg";
import MLHBadge from "./MLHBadge";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = () => (
      <nav className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 text-base md:text-sm lg:text-base font-jost">
        {[
          { href: "#about", label: "About" },
          { href: "#sponsor", label: "Sponsors" },
          { href: "#location", label: "Location" },
          { href: "#pastevent", label: "2024" },
          { href: "#faq", label: "FAQ" }, 
        ].map((link, index) => (
          <Link key={index} href={link.href} className="relative group">
            <span className="text-shadow-navbar-subtle">{link.label}</span>
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
        ))}
      </nav>
  );

  const MobileMenu = () => (
    <div className="fixed inset-0 z-10 flex justify-center items-center">
      <div className="relative h-[60%] w-[80%] bg-white p-12 rounded-md shadow-lg">
        <button
          onClick={toggleMenu}
          className="absolute top-2 right-2 p-4 text-[#01A2D9]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#ffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <img
          src={mlh.src}
          alt="MLH 2025 Badge"
          className="absolute top-0 left-11 h-[100px] w-auto"
        />
        <div className="mt-24 text-[#01A2D9]">
          <nav className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 text-base md:text-sm lg:text-base font-normal ">
            {[
              { href: "#about", label: "About" },
              { href: "#pastevent", label: "Past Event" },
              { href: "#sponsor", label: "Sponsor" },
              { href: "#location", label: "Location" },
              { href: "#faq", label: "FAQs" },
            ].map((link, index) => (
              <div key={index}>
                <Link href={link.href} className="relative group">
                  <span>{link.label}</span>
                </Link>
                {index < 4 && <hr className="border-t mt-4" />}
              </div>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#01A2D9] p-6 w-[170px] rounded-t-sm flex justify-center items-center space-x-8">
          <a href="https://ca.linkedin.com/company/uottahack" target="_blank">
            <Linkedin className="w-7 h-7" />
          </a>
          <a href="https://www.instagram.com/uottahack" target="_blank">
            <Insta className="w-7 h-7" />
          </a>
          <a href="https://discord.gg/XDQ94xsDwB" target="_blank">
            <Discord className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );

  const NavLinks = () => (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-16'} text-sm font-light`}>
      <Link href="https://www.uottahack.ca/" target="_blank" className="relative group">
        <span className='text-shadow-navbar-subtle'>About</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link href="https://www.uottahack.ca/events" target="_blank" className="relative group">
        <span className='text-shadow-navbar-subtle'>Past Events</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link href="https://www.uottahack.ca/faq" target="_blank" className="relative group">
        <span className='text-shadow-navbar-subtle'>FAQs</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </Link>
    </nav>
  );

  return (
    <header className="relative w-full bg-transparent text-white">
      <div className="w-full sm:px-6 relative">
        {/* Logo */}
        <div style={{ left: "5%", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
          <ColorLogo className="w-16 h-16 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        </div>


        {/* Navigation Links - Centered */}
        <div className="flex p-10 justify-center items-center">
          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden">
          <button onClick={toggleMenu} className="p-2 bg-amber-500">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="#ffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* MLH Badge */}
        <div className="mlhBadge absolute right-5 md:right-16 top-0 transform -translate-y-1/2">
          <MLHBadge /> 
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default MainHeader;
