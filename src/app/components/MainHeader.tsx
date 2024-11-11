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
    <nav className="flex space-x-8 text-xl  font-jost">
      {[
        { href: "#about", label: "About" },
        { href: "#pastevent", label: "Past Event" },
        { href: "#sponsor", label: "Sponsor" },
        { href: "#location", label: "Location" },
        { href: "#faq", label: "FAQs" },
      ].map((link, index) => (
        <Link key={index} href={link.href} className="relative group">
          <span className="text-shadow-navbar-subtle">{link.label}</span>
          <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      ))}
    </nav>
  );

  const MobileMenu = () => (
    <div className="fixed inset-0  z-[1000] pt-10 flex justify-center items-center">
      <div className="relative h-[70%] w-[80%] bg-white p-12 rounded-md shadow-lg">
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
          <nav className="flex flex-col space-y-4 text-sm font-normal">
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#01A2D9] p-2  w-[170px] rounded-t-sm flex justify-center items-center space-x-8">
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

        {/* MLH Badge */}
        <div className="">
          <a
            id="mlh-trust-badge"
            style={{
              display: "block",
              maxWidth: "100px",
              minWidth: "60px",
              position: "absolute",
              top: "0",
              width: "10%",
              zIndex: 10000,
            }}
            className="right-[80px] md:right-[50px]"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
            target="_blank"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
              alt="Major League Hacking 2025 Hackathon Season"
              style={{ width: "100%" }}
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default MainHeader;

// OLD SECTION TO BE REUSED, DO NOT DELETE
// return (
//   <header className={`${styles.header} items-center p-4 shadow-md`}>
//     {(width < 700) && (
//       <>
//         <div className="md:hidden inline-block items-center">
//           <button onClick={toggleMenu} className="pt-1 text-white focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div className={styles.headerLogo}>
//           <img width="50px" src={logoImage.src} alt="Logo" />
//         </div>
//         <nav className={`w-full flex flex-col space-y-2 mt-8 text-center md:hidden ${styles.vertMenu} ${isOpen ? styles.open : ''}`}>
//           <Link className="pt-2" href="#">
//             <span className="text-white hover-coloured-text">Home</span>
//           </Link>
//           <Link className="pt-2" href="#mission">
//             <span className="text-white hover-coloured-text">Mission</span>
//           </Link>
//           <Link className="pt-2" href="#impact">
//             <span className="text-white hover-coloured-text">Impact</span>
//           </Link>
//           <Link className="pt-2" href="#sponsorship">
//             <span className="text-white hover-coloured-text">Sponsors</span>
//           </Link>
//           <Link className="pt-2" href="#pastevents">
//             <span className="text-white hover-coloured-text">Past Events</span>
//           </Link>
//           <Link className="pt-2" href="https://2024.uottahack.ca">
//             <span className="text-white coloured-text hover-coloured-text">2024</span>
//           </Link>
//           <Link className="pt-2" href="#faq">
//             <span className="text-white hover-coloured-text">FAQ</span>
//           </Link>
//           <img src={mlh.src} alt=""className="absolute top-0 right-20 w-[8.24rem] h-[15.5rem] " />
//         <img/>
//         </nav>
//       </>

{
  /* <div className={styles.headerLogo}>
            <img width="50px" src={logoImage.src} alt="Logo" />
          </div>
          <div className={styles.horMenu}>
            <Link href="#">
              <span className="text-white p-10 hover-coloured-text">Home</span>
            </Link>
            <Link href="#mission">
              <span className="text-white p-10 hover-coloured-text">Mission</span>
            </Link>
            <Link href="#impact">
              <span className="text-white p-10 hover-coloured-text">Impact</span>
            </Link>
            <Link href="#sponsorship">
              <span className="text-white p-10 hover-coloured-text">Sponsors</span>
            </Link>
            <Link href="#pastevents">
              <span className="text-white p-10 hover-coloured-text">Past Events</span>
            </Link>
            <Link href="https://2024.uottahack.ca">
              <span className="text-white coloured-text p-10 hover-coloured-text">2024</span>
            </Link>
            <Link href="#faq">
              <span className="text-white p-10 hover-coloured-text">FAQ</span>
            </Link>
            <img src={mlh.src} alt="" className="absolute top-0 right-20 w-[8.24rem] h-[15.5rem] "/>
        </div> */
}
/*
        <Link href="https://2018.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2018.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2018</span>
              </div>
            </Link>
            <Link href="https://2019.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2019.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2019</span>
              </div>
            </Link>
            <Link href="https://2020.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2020.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2020</span>
              </div>
            </Link>
            <Link href="https://2021.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2021.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2021</span>
              </div>
            </Link>
            <Link href="https://2023.uottahack.ca">
              <div className='photoColumn'>
                <img width="50px" src={Logo2023.src} alt = "Logo"/>
                <span className="text-white coloured-text p-10 hover-coloured-text">2023</span>
              </div>
            </Link>
            <Link href="https://2024.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2024.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2024</span>
              </div>
            </Link>
            */
