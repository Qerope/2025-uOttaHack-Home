import React, { useState } from "react";
import Link from "next/link";
import ColorLogo from "../assets/colourLogo.svg";
import mlh from "../assets/MLH.png";
import Insta from "../assets/insta.svg";
import Linkedin from "../assets/linkedin.svg";
import Discord from "../assets/discord.svg";
import { motion, AnimatePresence } from "framer-motion";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const NavLinks = () => (
    <nav className="flex space-x-8 text-xl font-jost">
      {[
        { href: "#about", label: "About" },
        { href: "#pastevent", label: "Past Event" },
        { href: "#sponsor", label: "Sponsor" },
        { href: "#location", label: "Location" },
        { href: "#faq", label: "FAQs" },
      ].map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="relative group"
          onClick={closeMenu}
        >
          <span className="text-shadow-navbar-subtle">{link.label}</span>
          <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      ))}
    </nav>
  );

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[1000] pt-10 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="relative h-[70%] w-[80%] bg-white p-12 rounded-md shadow-lg"
      >
        <button
          onClick={closeMenu} // Close menu when clicked
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
          <nav className="flex flex-col space-y-4 text-sm font-normal">
            {[
              { href: "#about", label: "About" },
              { href: "#pastevent", label: "Past Event" },
              { href: "#sponsor", label: "Sponsor" },
              { href: "#location", label: "Location" },
              { href: "#faq", label: "FAQs" },
            ].map((link, index) => (
              <div key={index}>
                <Link href={link.href} className="relative group" onClick={closeMenu}>
                  <span>{link.label}</span>
                </Link>
                {index < 4 && <hr className="border-t mt-4" />}
              </div>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#01A2D9] p-2 w-[170px] rounded-t-sm flex justify-center items-center space-x-8">
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
      </motion.div>
    </motion.div>
  );

  return (
    <header className="relative w-full bg-transparent text-white">
      <div className="w-full sm:px-6 relative">
        {/* Logo */}
        <div className="absolute md:left-[10%] left-10 md:p-0 pt-10 top-1/2 transform -translate-y-1/2 flex-shrink-0">
          <ColorLogo className="md:w-20 md:h-20 w-16 h-16" />
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
      </div>

      {/* Wrap MobileMenu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && <MobileMenu />}
      </AnimatePresence>
    </header>
  );
};

export default MainHeader;
