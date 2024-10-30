'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/MainHeader.module.css';
import ColourLogo from '../assets/colourLogo.svg';

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
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} items-center p-4 `}>
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
          <nav className={`w-full flex flex-col space-y-2 text-center md:hidden ${styles.vertMenu} ${isOpen ? styles.open : ''}`}>
            <Link href="#">
              <span className="text-white">About</span>
            </Link>
            <Link href="#sponsorship">
              <span className="text-white">Sponsors</span>
            </Link>
            <Link href="#faq">
              <span className="text-white">FAQ</span>
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