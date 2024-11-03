import React from "react";
import styles from "../styles/UOttaHackHad.module.css";
import RectangleImage from "../assets/Rectangle 1280.png";
import road from "../assets/Road.png";
import maps from "../assets/Maps.png";
import { useEffect } from "react";

const UOttaHackHad: React.FC = () => {
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
    <section className=" w-full    ">
      <div className="w-full h-full">
        <div className="absolute z-4  -mt-[20%] z-0 overflow-hidden">
          <img
            src={RectangleImage.src}
            alt="UOttaHack Background"
            className=""
          />
        </div>

        <div
          className={` relative z-1 text-white w-full  sm:mt-[1%] md:mt[-40%] lg:mt-[1%]`}
        >
          <h1
            className={`${styles.heading} md:text-8xl   w-full flex justify-center items-center`}
          >
            uOttaHack 2024 had...
          </h1>

          <div
            className={`flex flex-row font-light justify-between items-center p-5  `}
            style={{
              fontSize: "clamp(1rem, 2vw, 10rem)",
              fontFamily: "Sulphur Point, sans-serif",
              padding: "clamp(5%, 2vw, 10%)",
            }}
          >
            <div
              className={`  flex flex-col jsutify-center pt=l-10 items-center `}
            >
              <h2>2000+</h2>
              <p>Applications</p>
            </div>
            <div className="w-[1px] h-[5vh] bg-white"></div>
            <div className={` flex flex-col jsutify-center items-center `}>
              <h2>650</h2>
              <p>Hackers</p>
            </div>
            <div className="w-[1px] h-[5vh] bg-white"></div>
            <div className={` flex flex-col jsutify-center items-center `}>
              <h2>30+</h2>
              <p>Schools</p>
            </div>
            <div className="w-[1px] h-[5vh] bg-white"></div>
            <div className={`  flex flex-col jsutify-center items-center `}>
              <h2>8</h2>
              <p>Doggos</p>
            </div>
            <div className="w-[1px] h-[5vh] bg-white"></div>
            <div className={`  flex flex-col jsutify-center items-center `}>
              <h2>17.1k</h2>
              <p>Prizes</p>
            </div>
          </div>

          <div
            className=" relative w-full pt-[10%] pb-10"
            style={
              {
                // paddingTop: "clamp(5%, 2vw, 1%)",
              }
            }
          >
            {/* <img src={road.src} alt="Road" className={styles.roadImage} />
            <img src={maps.src} alt="Maps" className={styles.mapImage} /> */}
            <div className="  relative z-3 h-full flex overflow-hidden ">
              <img
                src={road.src}
                alt="Road"
                className="w-[120%] overflow-hidden"
              />
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
