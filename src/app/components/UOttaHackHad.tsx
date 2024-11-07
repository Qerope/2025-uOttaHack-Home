import React from "react";
import styles from "../styles/UOttaHackHad.module.css";
import RectangleImage from "../assets/Rectangle 1280.png";
import road from "../assets/Road.png";
import maps from "../assets/Maps.png";
import { useEffect } from "react";

import Car1 from "../assets/car1.svg";
import Car2 from "../assets/car2.svg";
import Car3 from "../assets/car3.svg";
import Car4 from "../assets/car4.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const UOttaHackHad: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when the element comes into view

  useEffect(() => {
    // Function to handle orientation change
    const handleOrientationChange = () => {
      window.location.reload(); // Refresh the page
    };

    // Check if matchMedia is supported
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    if (mediaQuery.addEventListener) {
      // Modern browsers
      mediaQuery.addEventListener("change", handleOrientationChange);
    } else if (mediaQuery.addListener) {
      // Older browsers
      mediaQuery.addListener(handleOrientationChange);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleOrientationChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleOrientationChange);
      }
    };
  }, []);
  return (
    <section
      className=" w-full  -mt-[20%]"
      style={{
        background: "linear-gradient(180deg, #366ACF 0%, #74A0F6 100%)",
      }}
      id="pastevent"
    >
      <div className="w-full h-full pb-5 ">
        {/* <div className="absolute z-4  -mt-[20%] z-0 overflow-hidden">
          {/* <img
            src={RectangleImage.src}
            alt="UOttaHack Background"
            className=""
          /> 
        </div> */}

        <div
          className={` relative z-1 text-white w-full pt-10 sm:mt-[1%] md:mt[-40%] lg:mt-[1%]`}
        >
          <h1
            className={`${styles.heading} md:text-8xl  w-full flex justify-center items-center`}
            style={{
              paddingTop: "clamp(20%, 2vw, 10%)",
            }}
          >
            uOttaHack 2024 had...
          </h1>

          <div
            className={`flex flex-row justify-between items-center`}
            style={{
              fontSize: "clamp(0.7rem, 2vw, 3rem)",
              paddingLeft: "clamp(1%, 8vw, 40%)",
              paddingRight: "clamp(1%, 8vw, 40%)",
              paddingBottom: "clamp(5%, 2vw, 20%)",
              paddingTop: "clamp(5%, 2vw, 20%)",
            }}
          >
            <div className={`  flex flex-col jsutify-center  items-center `}>
              <h2>2000+</h2>
              <p>Applications</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh]  bg-white"></div>
            <div className={` flex flex-col jsutify-center items-center `}>
              <h2>650</h2>
              <p>Hackers</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh] bg-white"></div>
            <div className={` flex flex-col jsutify-center items-center `}>
              <h2>30+</h2>
              <p>Schools</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh] bg-white"></div>
            <div className={`  flex flex-col jsutify-center items-center `}>
              <h2>8</h2>
              <p>Doggos</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh] bg-white"></div>
            <div className={`  flex flex-col jsutify-center items-center `}>
              <h2>17.1k</h2>
              <p>Prizes</p>
            </div>
          </div>

          <div
            className=" relative w-full pt-[10%] pb-48"
            style={{
              paddingBottom: "clamp(5%, 2vw, 10%)",
            }}
          >
            {/* <img src={road.src} alt="Road" className={styles.roadImage} />
            <img src={maps.src} alt="Maps" className={styles.mapImage} /> */}
            <div className="  relative z-3 h-full w-full flex overflow-hidden ">
              <img
                src={road.src}
                alt="Road"
                className="w-[120%] overflow-hidden"
              />
              {/* Car SVG Overlay */}
              {/* Car SVG Overlay with Animation */}
              <motion.div
                className="absolute bottom-[30%] w-full left-0"
                animate={{ x: ["-10%", "100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Car1 className="w-4 md:w-16 h-auto" />
              </motion.div>
              <motion.div
                className="absolute bottom-[30%] w-full left-0"
                animate={{ x: ["-10%", "100%"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 3,
                }}
              >
                <Car4 className="w-4 md:w-16 h-auto" />
              </motion.div>
              <motion.div
                className="absolute bottom-[60%] w-full  left-0 "
                animate={{ x: ["100%", "-20%"] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0,
                }}
              >
                <Car2
                  className="w-4 md:w-16 h-auto"
                  style={{ transform: "scaleX(-1)" }} // Flip car horizontally
                />
              </motion.div>
              <motion.div
                className="absolute bottom-[60%] w-full  left-0 "
                animate={{ x: ["100%", "-20%"] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
              >
                <Car3
                  className="w-4 md:w-16 h-auto"
                  style={{ transform: "scaleX(-1)" }} // Flip car horizontally
                />
              </motion.div>
            </div>
            <div className="relative z-4 top-0 flex justify-center w-full -mt-[16%] ">
              <img
                src={maps.src}
                alt="Maps"
                className="w-[50%] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UOttaHackHad;