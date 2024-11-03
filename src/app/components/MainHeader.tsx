"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/MainHeader.module.css";
import ColourLogo from "../assets/colourLogo.svg";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header}  ${scrolled ? styles.scrolled : ""}`}>
      {width < 700 && (
        <>
          <div className="flex items-center  justify-between">
            {/* Menu Button on the Right */}
            <div className="p-4 md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <ColourLogo width="50px" alt="Logo" />
            </div>
          </div>
          {/* Mobile Navigation Menu */}
          {/* Mobile Navigation Menu - Positioned Below the Button */}
          <div className="p-1 ">
            <nav
              className={`absolute rounded-xl bg-[#f4a702] text-white font-bold flex flex-col space-y-5 pt-5 pl-5 pr-5 transition-all duration-300 ease-in-out ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <Link href="#">
                <span className=" text-xl">About</span>
              </Link>
              <Link href="#sponsorship">
                <span className=" text-xl">Sponsors</span>
              </Link>
              <Link href="#faq">
                <span className=" text-xl">FAQ</span>
              </Link>
            </nav>
          </div>
        </>
      )}
      {width >= 700 && (
        <>
          <div className={styles.headerLogo}>
            <ColourLogo width="50px" alt="Logo" />
          </div>
          <div className={styles.horMenu}>
            <Link href="#">
              <span className="text-white p-8">About</span>
            </Link>
            <Link href="#sponsorship">
              <span className="text-white p-3">Sponsors</span>
            </Link>
            <Link href="#faq">
              <span className="text-white p-5">FAQ</span>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default MainHeader;
