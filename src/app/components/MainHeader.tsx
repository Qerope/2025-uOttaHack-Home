'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/MainHeader.module.css';
import ColourLogo from '../assets/colourLogo.svg';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <header className={`${styles.header} items-center p-4 shadow-md`}>
      {(width < 700) && (
        <>
          <div className="md:hidden inline-block items-center">
            <button onClick={toggleMenu} className="pt-1 text-white focus:outline-none">
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
          <div className={styles.headerLogo}>
            <ColourLogo width="50px" alt="Logo" />
          </div>
          <nav className={`w-full flex flex-col space-y-2 mt-8 text-center md:hidden ${styles.vertMenu} ${isOpen ? styles.open : ''}`}>
            <Link className="pt-2" href="#">
              <span className="text-white hover-coloured-text">Home</span>
            </Link>
            <Link className="pt-2" href="#mission">
              <span className="text-white hover-coloured-text">Mission</span>
            </Link>
            <Link className="pt-2" href="#impact">
              <span className="text-white hover-coloured-text">Impact</span>
            </Link>
            <Link className="pt-2" href="#sponsorship">
              <span className="text-white hover-coloured-text">Sponsors</span>
            </Link>
            <Link className="pt-2" href="#pastevents">
              <span className="text-white hover-coloured-text">Past Events</span>
            </Link>
            <Link className="pt-2" href="https://2024.uottahack.ca">
              <span className="text-white coloured-text hover-coloured-text">2024</span>
            </Link>
            <Link className="pt-2" href="#faq">
              <span className="text-white hover-coloured-text">FAQ</span>
            </Link>
          </nav>
        </>
      )}
      {(width >= 700) && (
        <>
          <div className={styles.headerLogo}>
            <ColourLogo width="50px" alt="Logo" />
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
          </div>
        </>
      )}
    </header>
  );
};

export default MainHeader;