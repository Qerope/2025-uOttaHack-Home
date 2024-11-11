import React from "react";
import styles from "../styles/TracksSection.module.css";
import TracksImageTop from "../assets/track-yellow-bg.svg";
import TrainStation from "../assets/Train-Station-mini.svg";
import RectangleImage from "../assets/Rectangle 1280.png";
import { useRef, useEffect, useLayoutEffect, useState } from "react";

import Seperation from "../assets/Seperation.svg";
import { image } from "framer-motion/client";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";
import UOttaHackHad from "./UOttaHackHad";
import useIsMobile from "../hooks/useInMobile";

const TracksSection: React.FC = () => {
  const imageRef = useRef<any | null>(null);
  const sectionRef = useRef(null);
  const { ref, isInView } = useInView({ threshold: 0.01 });
  const isMobile = useIsMobile();

  const [minHeight, setMinHeight] = useState("0"); // Initial value as full screen height

  useLayoutEffect(() => {
    const handleResize = () => {
      // console.log("handleResize called");
      // console.log("imageRef.current:", imageRef.current); // Debugging

      if (imageRef.current) {
        const svgHeight = imageRef.current.clientHeight;
        // console.log("SVG Height:", svgHeight);
        setMinHeight(`${svgHeight}px`);
      } else {
        // console.warn("imageRef.current is null");
      }
    };

    // Delay initial measurement to ensure SVG is mounted
    requestAnimationFrame(handleResize);

    // Update on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageRef.current]);
  return (
    <div className="overflow-hidden ">
      <section
        id="tracks"
        className="relative    w-full font-jost  "
        style={{ height: minHeight, background: "#FFAF00" }} // Apply the dynamically calculated minHeight
      >
        <div className="flex w-full ">
          <div className="h-full  ">
            <div
              className=" absolute z-[2] w-full"
              ref={imageRef} // Attach the ref to the image
            >
              <TracksImageTop
                // src={TracksImageTop.src}
                // alt="Top Tracks Image"
                className=" md:h-[86vw] h-[65vh] relative z-[0] bg-cover"
              />
            </div>
          </div>
          <div
            className="relative w-full overflow-hidden  flex    items-end z-[2] "
            style={{ height: minHeight }}
          >
            <div className="   w-full  ">
              <TrainStation className="md:w-[100vw]  overflow-hidden   relative " />
            </div>
          </div>
          <div
            className="  flex justify-end items-end absolute z-[4] "
            style={{ height: minHeight }}
          >
            <Seperation
              // alt="Seperation Image"
              // // style={{ marginTop: '-260px' }}
              className="w-[160vw] z-[4] top-[7vw] -translate-x-[10%] relative"
              // className="w-[240%] z-[4] -translate-x-[2%] md:-mt-[63%]  relative h-auto "
            />
          </div>
          {minHeight != "0" ? (
            <div
              className=" absolute z-[3] md:w-[40%] w-[] p-5 md:p-10 flex flex-col md:top-[20%]  top-0  text-white"
              style={{ minHeight }}
            >
              <h1
                ref={ref}
                className={`font-bold text-white [text-shadow:_6px_0px_0px_rgb(0_0_0_/_0.5)] ${
                  isMobile || isInView
                    ? "visible" // Immediately visible on mobile, or if in view on larger screens
                    : "hidden"
                } ${
                  !isMobile && isInView
                    ? "animate-flip-down animate-once animate-duration-1000 animate-delay-200 animate-ease-in"
                    : ""
                }`}
                style={{
                  fontSize: "clamp(3rem, 7vw, 10rem)", // Set the origin to the top for a flip-down effect
                }}
              >
                TRACKS
              </h1>

              <p
                ref={ref}
                className={` text-white  md:text-2xl text-sm ${
                  isInView
                    ? "animate-fade-right animate-once animate-duration-500 animate-ease-out"
                    : ""
                }`}
              >
                <span className="font-light">
                  Whether you&apos;re passionate about
                </span>{" "}
                <strong>health, fintech, AI, or sustainability</strong>
                <span className="font-light">
                  , see what we can offer for the perfect platform to focus your
                  creativity and build impactful solutions.
                </span>{" "}
                <u>Choose your challenge</u>, collaborate, and{" "}
                <strong>
                  <em>explore your limits!</em>
                </strong>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
      <UOttaHackHad />
    </div>
  );
};

export default TracksSection;
