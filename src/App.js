import React, { useEffect, useState } from 'react';

import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactComponent as CTA } from './assets/cta.svg';
import { ReactComponent as Logo } from './assets/logo.svg';

import globeImage from './assets/globe.svg';
import hootowImg from './assets/lightbulb.png';
import sechootowImg from './assets/sec1_hootow.png';
import stats from './assets/stats.png';

import organizers2018Image from './assets/organizers-2018.png';
import organizers2019Image from './assets/organizers-2019.png';
import organizers2020Image from './assets/organizers-2020.png';
import organizers2021Image from './assets/organizers-2021.png';
import organizers2023Image from './assets/organizers-2023.png';
import organizers2024Image from './assets/organizers-2024.png';

import organizers2018List from './organizers-list/2018.json';
import organizers2019List from './organizers-list/2019.json';
import organizers2020List from './organizers-list/2020.json';
import organizers2021List from './organizers-list/2021.json';
import organizers2023List from './organizers-list/2023.json';
import organizers2024List from './organizers-list/2024.json';

import { FAQData } from "./faqdata.js";


import './App.css';
import introVideo from './assets/videos/compressed_intro.mp4';

import uOttaHack2018Logo from './assets/logos/2018.png';
import uOttaHack2019Logo from './assets/logos/2019.png';
import uOttaHack2020Logo from './assets/logos/2020.png';
import uOttaHack2021Logo from './assets/logos/2021.png';
import uOttaHack2023Logo from './assets/logos/2023.png';
import uOttaHack2024Logo from './assets/logos/2024.png';

import AccentureLogo from './assets/logos/accenture.png';
import ADGALogo from './assets/logos/adga.png';
import BalsamiqLogo from './assets/logos/balsamiq.png';
import BitesiteLogo from './assets/logos/bitesite.png';
import BloombergLogo from './assets/logos/bloomberg.png';
import BankofCanadaLogo from './assets/logos/boc.png';
import CanadaLogo from './assets/logos/canada.png';
import CDWLogo from './assets/logos/cdw.png';
import CengenLogo from './assets/logos/cengen.png';
import CienaLogo from './assets/logos/ciena.png';
import CSELogo from './assets/logos/cse.png';
import DeloitteLogo from './assets/logos/deloitte.png';
import DRDC1Logo from './assets/logos/drdc1.png';
import FitbitLogo from './assets/logos/fitbit.png';
import GitHubLogo from './assets/logos/github-logo.png';
import GoogleLogo from './assets/logos/google.png';
import Hub350Logo from './assets/logos/hub350.png';
import InnovapostLogo from './assets/logos/innovapost.png';
import KanataNorthBIALogo from './assets/logos/kanatanorthbia.png';
import KinaxisLogo from './assets/logos/kinaxis.png';
import KlipfolioLogo from './assets/logos/klipfolio.png';
import MarchNetworksLogo from './assets/logos/marchnetworks.png';
import MicrosoftLogo from './assets/logos/microsoft.png';
import MomentiveLogo from './assets/logos/momentive.png';
import MorganStanleyLogo from './assets/logos/morganstanley.png';
import NEOLogo from './assets/logos/neo.png';
import NoibuLogo from './assets/logos/noibu.png';
import NokiaLogo from './assets/logos/nokia.png';
import OnePasswordLogo from './assets/logos/onepassword.png';
import PhreesiaLogo from './assets/logos/phreesia.png';
import SolaceLogo from './assets/logos/solace.png';
import SunlifeLogo from './assets/logos/sunlife.png';
import TrendMicroLogo from './assets/logos/trendmicro.png';
import TwilioLogo from './assets/logos/twilio.png';

import MLHLogo from './assets/logos/mlh.png';
import uOttawaLogo from './assets/logos/uottawa.png';
import uOttawaEngLogo from './assets/logos/uottawaEng.png';

// import { prizes } from './prizes';

import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

function App() {

  const [activePrizePage, setActivePrizePage] = useState(1);

  let count = 0;
  let count2 = 0;
  let countsm = 0;
  let count3 = 0;

  // FAQ Accordian

  useEffect(() => {
    if (count === 0) {
      const accordionHeader = document.querySelectorAll(".accordion-header");
      console.log(accordionHeader);
      accordionHeader.forEach((header) => {
        header.addEventListener("click", function () {
          const accordionContent = header.parentElement.querySelector(".accordion-content");
          let accordionMaxHeight = accordionContent.style.maxHeight;

          // Condition handling
          if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            header.querySelector(".fas").classList.remove("fa-plus");
            header.querySelector(".fas").classList.add("fa-minus");
            header.parentElement.classList.add("bg-indigo-50");
          } else {
            accordionContent.style.maxHeight = `0px`;
            header.querySelector(".fas").classList.add("fa-plus");
            header.querySelector(".fas").classList.remove("fa-minus");
            header.parentElement.classList.remove("bg-indigo-50");
          }
        });
      });
      count = 1;
    }
  }, []);

  const orgData = {
  2018: organizers2018List,
  2019: organizers2019List,
  2020: organizers2020List,
  2021: organizers2021List,
  2023: organizers2023List,
  2024: organizers2024List,
};
  const orgImages = {
  2018: organizers2018Image,
  2019: organizers2019Image,
  2020: organizers2020Image,
  2021: organizers2021Image,
  2023: organizers2023Image,
  2024: organizers2024Image,
};

  const [activeTab, setActiveTab] = useState('2024'); // Default active tab is 2024

  const handleTabClick = (year) => {
    setActiveTab(year);
  };

  // Horizontal scroller

  useEffect(() => {
    if (count2 === 0) {
      (function horizontalScrollingBanner() {
        var banners = document.getElementsByClassName('horizontal-scrolling-banner');
        if (!banners || banners.length === 0) {
          return;
        }
        var pxPerSecond = 50;
        setUpElements();
        scrollTheBanners();
        window.addEventListener('resize', setUpElements);

        function setUpElements() {
          for (var i = 0; i < banners.length; i++) {
            var currentBanner = banners[i];
            var helperWrapperClass = 'horizontal-scrolling-banner__helper-wrapper';
            var currentHelperWrapper = currentBanner.querySelector('.' + helperWrapperClass);
            if (currentHelperWrapper) {
              var clones = currentHelperWrapper.querySelectorAll('[data-clone]');
              Array.prototype.forEach.call(clones, function (clone) {
                clone.remove();
              });
              var childrenCount = currentHelperWrapper.children.length;
              for (var i = 0; i < childrenCount; i++) {
                currentBanner.appendChild(currentHelperWrapper.children[0]);
              }
              currentHelperWrapper.remove();
            }

            var children = currentBanner.children;

            var bannerWidth = currentBanner.getBoundingClientRect().width;
            var minWidthToCoverBanner = (bannerWidth * 2) + children[0].getBoundingClientRect().width;
            var childrenWidth = Array.prototype.reduce.call(children, function (r, child) {
              return r + child.getBoundingClientRect().width;
            }, 0);
            var currentWidth = childrenWidth;


            do {
              Array.prototype.forEach.call(children, function (child) {
                var clone = child.cloneNode();
                clone.setAttribute('aria-hidden', true);
                clone.dataset.clone = true;
                currentBanner.appendChild(clone);
              });
              currentWidth += childrenWidth;
            } while (currentWidth < minWidthToCoverBanner);

            var transitionHelperWrapper = document.createElement('div');
            transitionHelperWrapper.classList.add('horizontal-scrolling-banner__helper-wrapper');
            var childrenCount = children.length;
            for (var i = 0; i < childrenCount; i++) {
              transitionHelperWrapper.appendChild(children[0]);
            }
            currentBanner.appendChild(transitionHelperWrapper);
            transitionHelperWrapper.dataset.childrenWidth = childrenWidth;
          }
        }

        function scrollTheBanners() {
          for (var i = 0; i < banners.length; i++) {
            var helperWrapper = banners[i].firstElementChild;
            var childrenWidth = helperWrapper.dataset.childrenWidth;
            var offsetLeft = helperWrapper.offsetLeft;

            if (offsetLeft <= (childrenWidth * -1)) {
              helperWrapper.style.transitionDuration = '0s';
              helperWrapper.style.left = '0px';
              helperWrapper.style.removeProperty('transition-duration');
            } else if (helperWrapper.style.left === '' || helperWrapper.style.left === '0px') {
              setTimeout(function () {
                helperWrapper.style.transitionDuration = (childrenWidth / pxPerSecond).toFixed() + 's';
                helperWrapper.style.left = (childrenWidth * -1) + 'px';
              }, 0);
            }
          }
          requestAnimationFrame(scrollTheBanners);
        }
      })();

      count2 = 1;
    }
  }, []);


// Horizontal scroll 2

useEffect(() => {
  if (countsm === 0) {
    (function horizontalScrollingStat() {
      var banners = document.getElementsByClassName('horizontal-scrolling-stats');
      if (!banners || banners.length === 0) {
        return;
      }
      var pxPerSecond = 50;
      setUpStats();
      scrollTheStat();
      window.addEventListener('resize', setUpStats);

      function setUpStats() {
        for (var i = 0; i < banners.length; i++) {
          var currentBanner = banners[i];
          var helperWrapperClass = 'horizontal-scrolling-stats__helper-wrapper';
          var currentHelperWrapper = currentBanner.querySelector('.' + helperWrapperClass);
          if (currentHelperWrapper) {
            var clones = currentHelperWrapper.querySelectorAll('[data-clone]');
            Array.prototype.forEach.call(clones, function (clone) {
              clone.remove();
            });
            var childrenCount = currentHelperWrapper.children.length;
            for (var i = 0; i < childrenCount; i++) {
              currentBanner.appendChild(currentHelperWrapper.children[0]);
            }
            currentHelperWrapper.remove();
          }

          var children = currentBanner.children;

          var bannerWidth = currentBanner.getBoundingClientRect().width;
          var minWidthToCoverBanner = (bannerWidth * 2) + children[0].getBoundingClientRect().width;
          var childrenWidth = Array.prototype.reduce.call(children, function (r, child) {
            return r + child.getBoundingClientRect().width;
          }, 0);
          var currentWidth = childrenWidth;

          do {
            Array.prototype.forEach.call(children, function (child) {
              var clone = child.cloneNode();
              clone.setAttribute('aria-hidden', true);
              clone.dataset.clone = true;
              currentBanner.appendChild(clone);
            });
            currentWidth += childrenWidth;
          } while (currentWidth < minWidthToCoverBanner);

          var transitionHelperWrapper = document.createElement('div');
          transitionHelperWrapper.classList.add('horizontal-scrolling-stats__helper-wrapper');
          var childrenCount = children.length;
          for (var i = 0; i < childrenCount; i++) {
            transitionHelperWrapper.appendChild(children[0]);
          }
          currentBanner.appendChild(transitionHelperWrapper);
          transitionHelperWrapper.dataset.childrenWidth = childrenWidth;
        }
      }

      function scrollTheStat() {
        for (var i = 0; i < banners.length; i++) {
          var helperWrapper = banners[i].firstElementChild;
          var childrenWidth = helperWrapper.dataset.childrenWidth;
          var offsetLeft = helperWrapper.offsetLeft;

          if (offsetLeft <= (childrenWidth * -1)) {
            helperWrapper.style.transitionDuration = '0s';
            helperWrapper.style.left = '0px';
            helperWrapper.style.removeProperty('transition-duration');
          } else if (helperWrapper.style.left === '' || helperWrapper.style.left === '0px') {
            setTimeout(function () {
              helperWrapper.style.transitionDuration = (childrenWidth / pxPerSecond).toFixed() + 's';
              helperWrapper.style.left = (childrenWidth * -1) + 'px';
            }, 0);
          }
        }
        requestAnimationFrame(scrollTheStat);
      }
    })();

    countsm = 1;
  }
}, []);


const [lastScrollTop, setLastScrollTop] = useState(0); // Initialize the state


  // Header
  useEffect(() => {
    const header = document.getElementById('site-header');

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      let scrollPos = window.pageYOffset;
      if (scrollPos <= 100) {
        header.style.backgroundColor = "transparent";
      }

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)'; 
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)'; 
        header.style.backgroundColor = '#cbb8cc'; // setting background to white when shown
        if (scrollPos <= 100) {
          header.style.backgroundColor = "transparent";
        }
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const QuickOption = ({ disabled, title, section, link, description }) => {
    return (
      <a disabled={disabled} href={section ? "#" + section : link} target={section ? "" : "_blank"} className={`  mb-2 py-4 px-6 ${disabled ? "" : "ease-in duration-300 cursor-pointer"} lg:bg-transparent w-full lg:h-48`}>
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <h1 className='font-Raleway font-bold text-2xl mb-2 bg-gradient-to-r bg-clip-text' style={{color: '#232323'}}>{title}</h1>
          <div className="relative flex flex-col justify-center">
            <p className="font-CerealMd text-sm lg:text-black text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </a>
    )
  }
  const QuickHackathon = ({ disabled, image, title, section, link }) => {
    return (
      <a disabled={disabled} href={section ? "#" + section : link} target={section ? "" : "_blank"} className={`  mb-2 py-4 px-6 ${disabled ? "" : "ease-in duration-300 cursor-pointer"} lg:bg-transparent w-full lg:h-48`}>
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <div className="relative flex flex-col justify-center">
            
            <a disabled={disabled} href={section ? "#" + section : link} target={section ? "" : "_blank"} >
                <div className='w-full flex justify-center rounded-md h-40 relative'>
                  <img src={image} className="object-contain" />
                </div>
              </a>
          </div>
          <span className='font-main-title ' style={{color: '#232323', fontSize: '35px', lineHeight: '0.9', alignContent: 'center'}}>{title}</span>
        </div>
      </a>
    )
  }
  const QuickEvent = ({ disabled, title, subtitle, section, link, description }) => {
    return (
      <a disabled={disabled} href={section ? "#" + section : link} target={section ? "" : "_blank"} className={`  mb-2 py-4 px-6 ${disabled ? "" : "ease-in duration-300 cursor-pointer"} lg:bg-transparent w-full lg:h-48`}>
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <h1 className={`font-Raleway font-bold text-2xl bg-gradient-to-r bg-clip-text`}  style={{color: '#232323', lineHeight: 0.9, fontSize: '1.9rem', fontFamily: 'Harabara'} }>{title}</h1>
          <h1 className='description font-bold font-Raleway mb-1' style={{color: '#585858', fontSize: '14px', width: '80%', }}>{subtitle}</h1>
          <div className="relative flex flex-col justify-center">
            <p className="font-CerealMd text-sm lg:text-black text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </a>
    )
  }
  const QuickContact = ({ disabled, title, subtitle, section, email }) => {
    return (
      <a disabled={disabled} href={section ? "#" + section : 'mailto:'+email} target={section ? "" : "_blank"} className={`  mb-2 py-4 px-6 ${disabled ? "" : "ease-in duration-300 cursor-pointer"} text-center lg:bg-transparent w-full lg:h-48`}>
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <h1 className={`font-Raleway font-bold text-2xl bg-gradient-to-r bg-clip-text`}  style={{color: '#232323', lineHeight: 1.0, fontSize: '1.9rem'} }>{title}</h1>
          <div className="relative flex flex-col justify-center">
          <h1 className='description font-bold font-Raleway mb-1' style={{color: '#585858', fontSize: '14px'}}>{email}</h1>

          <p className="font-CerealMd text-md lg:text-black text-gray-500">
              {subtitle}
              </p>
            <button style={{marginTop: '10px'}} className="text-center cta font-Raleway font-bold bg-[#6f519e]"><a target="_blank" href={'mailto:'+email}>{title}<CTA /></a> </button>
          </div>
        </div>
      </a>
    )
  }
  const QuickTeam = ({ cols, disabled, email, team, persons, section }) => {
    return (
      <div className={`flex flex-col ${cols==1 ? 'mt-20 pt-20' : ''} ${'lg:w-'+cols+'/12'} w-12/12 pl-1 pr-1 justify-center`}>

      <a disabled={disabled} href={section ? "#" + section : ""} target={section ? "" : "_blank"} className={`  mb-4 py-4 px-6 ${disabled ? "" : "ease-in duration-300 cursor-pointer"} text-center lg:bg-transparent w-full`}>
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <h1 className={`font-Raleway font-bold text-2xl bg-gradient-to-r bg-clip-text`}  style={{color: '#232323', lineHeight: 1.0, fontSize: '1.9rem'} }>{team}</h1>
          <div className="relative flex flex-col justify-center">
          <h1 className='description font-bold font-Raleway mb-1' style={{color: '#585858', fontSize: '14px'}}>{email}</h1>

            {persons.map((person, index) => (
              <div key={index}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <h1 className={`m-1 font-Raleway ${person.islead ? 'font-bold' : ''} text-l bg-gradient-to-r bg-clip-text`} style={{ color: '#232323', lineHeight: 1.0, fontSize: '1rem' }}>{person.name}</h1>{person.instagram && (
                <a disabled={disabled} href={section ? "#" + section : person.instagram} target={section ? "" : "_blank"} style={{ marginLeft: "0.5rem" }}>
                  <FaInstagram />
                </a>
              )}
              {person.linkedin && (
                <a disabled={disabled} href={section ? "#" + section : person.linkedin} target={section ? "" : "_blank"} style={{ marginLeft: "0.5rem" }}>
                  <FaLinkedin />
                </a>
              )}
              {person.website && (
                <a disabled={disabled} href={section ? "#" + section : person.website} target={section ? "" : "_blank"} style={{ marginLeft: "0.5rem" }}>
                  <FaGlobe />
                </a>
              )}
              {person.github && (
                <a disabled={disabled} href={section ? "#" + section : person.github} target={section ? "" : "_blank"} style={{ marginLeft: "0.5rem" }}>
                  <FaGithub />
                </a>
              )}

            </div>
            
              </div>
            ))}
          </div>
        </div>
      </a>
      </div>
    );
  };

  return (
    <div className="overflow-hidden scroll-smooth">
      <div className="h-20 flex items-center justify-center lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 z-50 header w-full fixed" id="site-header">
        <div className='pt-10 absolute left-5 mr-auto pb-10'>
          <a href="#home"><Logo /> </a>
        </div>
        <div className='h-20 flex items-center pt-10 pb-10'>
          <a className='font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#home'>Home</a>
          <a className='font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#about'>Mission</a>
          <a className='font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#tracks'>Impact</a>
          <a className='font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#sponsors'>Sponsors</a>
          <a className='font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#faqs'>FAQs</a>
          <a className='font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='https://2024.uottahack.ca/'>2024</a>
          <a className='font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='https://root.uottahack.ca/'>Past Events</a>
        </div>
      </div>

      <section className="w-full pt-36 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 flex flex-col relative pb lg:items-center">
      <img src={sechootowImg} className="z-0 left-5 top-4 absolute dissapearWhenSmall" alt="Hoover Tower" />
      <img src={sechootowImg} className="z-0 right-5 inverse top-4 absolute dissapearWhenSmall" style={{transform: 'scale(-1, 1)'}} alt="Hoover Tower" />

        <div className="container mx-auto px-4">
            <h1 className='text-center font-Raleway font-main-title font-extrabold mb-4 bg-clip-text' style={{color: '#232323', fontSize: '5rem', lineHeight: '1.2'}}>
                uOttaHack
            </h1>
            <h1 className='text-center font-Raleway font-extrabold mb-4 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
                uOttaHack is Ottawa’s premier hackathon. Join<br></br> us for our 7th year to dream and build the future!
            </h1>
            <p className='description font-bold lg:text-center font-Raleway' style={{color: '#585858', fontSize: '18px', width: '80%', margin: 'auto'}}>
                Brightest engineering students are flown to Ottawa’s campus <br></br> to build solutions to the world’s largest challenges for 36 hours straight.           
            </p>
            <p className='description font-bold lg:text-center font-Raleway' style={{color: '#585858', fontSize: '18px', width: '80%', margin: 'auto'}}>
            </p>
            <div className="button-container text-center mt-4">
                  <button className="text-center cta font-Raleway font-bold bg-[#6f519e]"><a target="_blank" href="https://root.uottahack.ca/">Visit 2024 <CTA /></a> </button>
              </div>
        </div>
      </section>


      <section class="xl:h-[105vh] lg:h-[90vh] flex w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex-col justify-center items-center" id="home">
        <div class="scale-90 w-11/12 mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl absolute top-[2rem] bottom-[5rem] left-1/2 bottom-20 transform -translate-x-[52%]">
          <div class="rounded-3xl background-block left-0"></div> 
        </div>
        <div class="scale-90 w-11/12 mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-3xl absolute top-[2rem] bottom-[5rem] left-1/2 transform -translate-x-[52%]">
          <video src={introVideo} autoPlay muted loop class="brightness-[0.4] object-cover w-full h-full " />
        </div>

        <div className='translate-x-[0%] flex flex-row items-center w-full justify-content: start'>
          <div className='lg:w-5/6 z-auto'>
            <div className='xl:text-3xl lg:text-3xl text-3xl mt-4 mb-0 font-CerealBD text-white' targetDate="2025-03-01T00:00:00" > Our Most Recent Event</div>
            <div className='font-Raleway font-main-title font-bil mb-4 bg-clip-text'  style={{lineHeight: "0.5", marginBottom: "0"}} targetDate="2025-03-01T00:00:00" >             uOttaHack 6</div>   
            <div className="inline-block">
            </div>      
            <div className='flex flex-row p-8 pt-0 pl-0'>
              <p className='mr-20 font-semibold xl:text-white lg:text-white md:text-white text-white mb-1 font-display xl:text-lg lg:text-md text-lg'>March 1-3 2024 @ University of Ottawa</p>
              <a href="https://twitter.com/uottahack" target="_blank"><AiOutlineTwitter className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://www.instagram.com/uottahack/?hl=en" target="_blank"><AiFillInstagram className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://github.com/uOttaHack" target="_blank"><AiFillGithub className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
            </div>
          </div>
        </div>

      </section>


      <section className="w-full xl:pt-8 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center" id="about">
          <img src={globeImage} className="small_img -top-10 z-0 w-120 mb-160 -right-16 absolute lg:-mr-16 animate-spin-slow" alt="Revolving Globe" />
          <h1 className='text-center font-Raleway font-extrabold mb-8 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
          What is <span className='font-main-title' style={{color: '#232323', fontSize: '55px', lineHeight: '1.2'}}> uOttaHack</span>
          </h1>        
            <p className='description font-bold lg:text-center font-Raleway mb-4' style={{color: '#585858', fontSize: '18px', width: '80%', margin: 'auto'}}>
            Our mission is to empower students to comfortably explore their passion for technology and entrepreneurship, through building a community of like-minded individuals who innovate and disrupt the worlds of business and technology!
            </p>

          <div className='z-10 w-full flex relative lg:flex-row flex-col'>
          <div className='flex flex-col lg:w-4/12 w-12/12 pl-1 pr-1'>
            <QuickOption disabled={false} title="Community" link="https://uottahack.ca/community" description="Join a strong community of students and mentors who share your passion for technology. If you've ever had an idea that you wanted to bring to life, uOttaHack’s hackathon is the place to do it!" />
          </div>

          <div className='flex flex-col lg:w-4/12 w-12/12 pl-1 pr-1'>
            <QuickOption disabled={false} title="Discover and Learn" link="https://uottahack.ca/learning" description="Explore the world of programming through our engaging workshops, hackathons, and a wealth of resources. Gain exposure to the latest technologies that real developers use." />
          </div>

          <div className='flex flex-col lg:w-4/12 w-12/12 pl-1 pr-1'>
            <QuickOption disabled={false} title="Accelerate Your Career" link="https://uottahack.ca/career" description="Located next to Kanata North, Canada's largest technology park, our event attracts companies from startups to top employers in North America. Your next opportunity awaits at uOttaHack!" />
          </div>
        </div>
      </section>


      <section className="w-full xl:pt-8 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center" id="past">
          <h1 className='text-center font-Raleway font-extrabold mb-8 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
          <span className='font-main-title' style={{color: '#232323', fontSize: '55px', lineHeight: '1.2'}}> uOttaHack</span> from Previous Years
          </h1>

          <div className='z-10 w-full flex relative lg:flex-row flex-col'>
          <div className='flex lg:w-2/12 w-12/12 pl-1 pr-1'>
            <QuickHackathon disabled={false} title={2018} link="https://2018.uottahack.ca" image={uOttaHack2018Logo} />
          </div>
          <div className='flex lg:w-2/12 w-12/12 pl-1 pr-1'>
            <QuickHackathon disabled={false} title={2019} link="https://2019.uottahack.ca" image={uOttaHack2019Logo} />
          </div>
          <div className='flex lg:w-2/12 w-12/12 pl-1 pr-1'>
            <QuickHackathon disabled={false} title={2020} link="https://2020.uottahack.ca" image={uOttaHack2020Logo} />
          </div>
          <div className='flex lg:w-2/12 w-12/12 pl-1 pr-1'>
            <QuickHackathon disabled={false} title={2021} link="https://2021.uottahack.ca" image={uOttaHack2021Logo} />
          </div>
          <div className='flex lg:w-2/12 w-12/12 pl-1 pr-1'>
            <QuickHackathon disabled={false} title={2023} link="https://2023.uottahack.ca" image={uOttaHack2023Logo} />
          </div>
          <div className='flex lg:w-2/12 w-12/12 pl-1 pr-1'>
            <QuickHackathon disabled={false} title={2024} link="https://2024.uottahack.ca" image={uOttaHack2024Logo} />
          </div>
        </div>
      </section>

      <section className="w-full xl:pt-8 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center" id="events">
          <h1 className='text-center font-Raleway font-extrabold mb-8 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
          🚀 Our Events & Initiatives

          </h1>        

          <div className='z-10 w-full flex relative lg:flex-row flex-col'>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickEvent subtitle="Flagship Hackathon" disabled={false} title="uOttaHack 6" link="https://2024.uottahack.ca/" description="Flagship Hackathon Our flagship event, the university's official MLH hackathon with over 600+ hackers and 20+ sponsors!" />
          </div>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickEvent subtitle="Intro Hackathon" disabled={false} title="init uOttaHack 5" link="https://2024.uottahack.ca/" description="Flagship Hackathon Our flagship event, the university's official MLH hackathon with over 600+ hackers and 20+ sponsors!" />
          </div>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickEvent subtitle="Community" disabled={false} title="Tech Intern Panel" link="https://2024.uottahack.ca/" description="A panel of several students who share their experiences working internships at top tech companies." />
          </div>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickEvent subtitle="Community" disabled={false} title="Workshops" link="https://2024.uottahack.ca/" description="Various workshops held on campus focused on helping students learn skills outside the classroom." />
          </div>
        </div>
      </section>

      <section className="w-full xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center" id="about">
          <h1 className='text-center font-Raleway font-extrabold mb-8 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
          💥 Our Impact

          </h1>    
            <p className='description font-bold lg:text-center font-Raleway' style={{color: '#585858', fontSize: '18px', width: '80%', margin: 'auto'}}>
            Over the past 6 years, our hackathon event has brought the community together to connect students with each other, to employers & opportunities, and solve real-world challenges. We are excited to share some statistics that reflect this entire journey.
            </p>    
          <div className="scroll-container pt-10 z-0" style={{rotate: '-10deg'}}>
            <img src={stats} alt="Scrolling Image" />
            <img src={stats} alt="Scrolling Image" />
            <img src={stats} alt="Scrolling Image" />
            <img src={stats} alt="Scrolling Image" />
            <img src={stats} alt="Scrolling Image" />
        </div>
      </section>


      <section className="w-full lg:pl-40 lg:pr-40 flex flex-col relative 8 lg:pb-16" id="sponsors">
        <div className="items-center flex flex-col">
          <h1 className='text-center font-Raleway font-extrabold mb-8 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
                Past Sponsors
          </h1>   
          <p className='description font-bold text-center font-Raleway px-4' style={{color: '#585858', fontSize: '18px', width: '80%'}}>
          uOttaHack would not be possible without the support of our incredible sponsors. Over the past 6 years, our sponsors have made it possible for over 3000 developers, designers, product managers, and dreamers to turn their ideas into a reality.


          </p>
        </div>
        <div className="pt-16 lg:pt-8 pb-8 sponsorSection">          
        {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-6/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={SolaceLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={InnovapostLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={NokiaLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={GoogleLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={MicrosoftLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-5/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={CienaLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={DeloitteLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={BloombergLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-6/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={AccentureLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-6/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={MomentiveLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={SunlifeLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={GitHubLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={NoibuLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={TrendMicroLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={CSELogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={DRDC1Logo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={CanadaLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-6/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={NEOLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-2/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={TwilioLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-2/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={MorganStanleyLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-8/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={KlipfolioLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-6/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={CDWLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={KinaxisLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={ADGALogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={Hub350Logo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-6/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={CengenLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-2/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={KanataNorthBIALogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-2/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={PhreesiaLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-2/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={MarchNetworksLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-8/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={BankofCanadaLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-6/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={OnePasswordLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={BalsamiqLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-3/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={FitbitLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-12/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={BitesiteLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
        </div>
          <h1 className='text-center font-Raleway font-extrabold mb-0 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
                Our Partners
          </h1>  
        <div className="pt-16 lg:pt-8 partnerSection">          
        {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={MLHLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={uOttawaLogo} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='sponsorCard lg:w-4/12 w-full lg:mr-0'>
              <a href="link to website" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-[#c4b8cc] h-40 p-8 relative'>
                  <img src={uOttawaEngLogo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>



      <section className="w-full xl:pt-8 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center" id="contact">
          <h1 className='text-center font-Raleway font-extrabold mb-8 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
          📩 Get in touch

          </h1>        
 
          <p className='description font-bold lg:text-center font-Raleway mb-4' style={{color: '#585858', fontSize: '18px', width: '80%', margin: 'auto'}}>
          We're always excited to partner with like minded and innovative groups both on campus and professionally. Reach out to us if you'd like to explore a new venture!
            </p>
          <div className='z-10 w-full flex relative lg:flex-row flex-col'>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickContact subtitle="Interested in sponsoring our hackathon?" disabled={false} title="Sponsorship" email="sponsorship@uottahack.ca" />
          </div>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickContact subtitle="Would you like to partner for an on-campus event?" disabled={false} title="Community" email="community@uottahack.ca"  />
          </div>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickContact subtitle="Looking for promotion or communication help?" disabled={false} title="Marketing" email="marketing@uottahack.ca"  />
          </div>
          <div className='flex flex-col lg:w-3/12 w-12/12 pl-1 pr-1'>
            <QuickContact subtitle="For any other inquiries please contact the Co-Directors!" disabled={false} title="Directors" email="chair@uottahack.ca"  />
          </div>
        </div>
      </section>

<section className="w-full xl:pt-8 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center" id="team">
  <div className="flex">
      <div className="flex flex-row justify between w-12/12">
        
        {Object.keys(orgData).map((year) => (
          <div key={year} className={`tab-content ${activeTab === year ? '' : 'hidden'}`}>
            
            
          <div className='flex flex-row'>
            <div className='w-8/12'>
              <div className='xl:text-3xl lg:text-3xl text-3xl mt-4 mb-0 font-CerealBD' targetDate="2025-03-01T00:00:00">Our Team</div>
              <div className='font-Raleway font-main-title font-bil mb-4 bg-clip-text' style={{color: "rgb(35, 35, 35)", lineHeight: "0.5", marginBottom: "0" }} targetDate="2025-03-01T00:00:00">{"uOttaHack " + (year - 2024 + 6)}</div>
                <p className='mr-20 font-semibold mb-1 font-display xl:text-lg lg:text-md text-lg'>{(year-1) + '/' + year}</p>
              <div className="inline-block">
                <img src={orgImages[year]} alt="team" className="rounded-2xl z-0 w-full h-auto" />
              </div>
            </div>
            <div className='w-4/12 justify-center flex'>

              <div className='flex z-10 flex-row items-center justify-between absolute right-[50px] top-[50px]'>
                <div className="tabs">
                  {Object.keys(orgData).map((year) => (
                    <button 
                      key={year}
                      onClick={() => handleTabClick(year)}
                      style={{marginTop: '10px', paddingLeft: 15}} 
                      className={`tab ${activeTab === year ? 'active' : ''} text-center cta cta-tab font-Raleway font-bold bg-[#6f519e]`} >
                      {'\'' + (year-2000)}
                    </button>
                  ))}
                </div>
              </div>
              {orgData[year]["Co-Directors"] && <QuickTeam cols={1} team="Co-Directors" persons={orgData[year]["Co-Directors"]} />}
            </div>
          </div>

            <div className='z-10 flex relative lg:flex-row flex-col'>
                {/* Other Teams */}
                  {Object.entries(orgData[year]).slice(1,6).map(([team, persons]) => {
                    if (team !== "Co-Directors") {
                      return <QuickTeam cols={5} key={team} team={team} persons={persons} />;
                    }
                    return null;
                  })}
            </div>
                {/* Other Teams */}
                <div className="lg:flex lg:flex-row lg:justify-between flex-col">
                  {Object.entries(orgData[year]).slice(6).map(([team, persons]) => {
                    if (team !== "Co-Directors") {
                      return <QuickTeam cols={1} key={team} team={team} persons={persons} />;
                    }
                    return null;
                  })}
            </div>
          </div>
        ))}
      </div>
    </div>
  
</section>


      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 flex flex-col relative" id="faqs">
      <img src={hootowImg} className="dissapearWhenSmall globe_img top-30 z-0 w-120 mb-160 right-20 absolute" alt="Hoover Tower" />
        <div className="items-center flex flex-col">
          <h1 className='text-center font-Raleway font-extrabold mb-8 bg-clip-text' style={{color: '#232323', fontSize: '36px', lineHeight: '1.2'}}>
                FAQs
          </h1>   
          <p className='description font-bold pb-10 px-4 text-center font-Raleway' style={{color: '#585858', fontSize: '18px', width: '80%'}}>
                Email us at hi@uottahack.ca if we missed anything!
          </p>
        </div>

        <div className="faqSection">
        {FAQData.map((faq, index) => (
          <div key={index} class="font-CerealBK text-lg text-black pt-5">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p className='mb-2 description font-semibold text-left font-Raleway text-sm' style={{color: '#585858', width: '80%'}}>
                {faq.question}
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className='bg-[#c4b8cc] p-5 mb-2 description font-semibold text-left font-Raleway text-sm' style={{borderRadius: '20px', color: '#585858'}}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
        </div>

      </section>


      <div className="w-full py-10 flex flex-col relative overflow-hidden border-b">
        <h1 className='font-semibold text-md font-CerealBK text-black text-center'>Made with ❤️ by the uOttaHack team</h1>
      </div>
    </div >
  );
}

export default App;
