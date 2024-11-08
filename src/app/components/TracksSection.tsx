import React from "react";
import styles from "../styles/TracksSection.module.css";
import TracksImageTop from "../assets/track-yellow-bg.svg";
import TracksImageBottom from "../assets/Train Station.png";
import RectangleImage from "../assets/Rectangle 1280.png";
import { useRef, useEffect, useLayoutEffect, useState } from "react";

import SeperationImage from "../assets/Seperation.png";
import { image } from "framer-motion/client";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";
import UOttaHackHad from "./UOttaHackHad";

const TracksSection: React.FC = () => {
  const imageRef = useRef<any | null>(null);
  const sectionRef = useRef(null);
  const { ref, isInView } = useInView({ threshold: 0.01 });

  const [minHeight, setMinHeight] = useState("0"); // Initial value as full screen height

  useLayoutEffect(() => {
    const handleResize = () => {
      console.log("handleResize called");
      console.log("imageRef.current:", imageRef.current); // Debugging

      if (imageRef.current) {
        const svgHeight = imageRef.current.clientHeight;
        console.log("SVG Height:", svgHeight);
        setMinHeight(`${svgHeight}px`);
      } else {
        console.warn("imageRef.current is null");
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
    <div className="overflow-hidden h-auto ">
      <section
        id="tracks"
        className="relative z-10  w-full font-jost  "
        style={{ minHeight }} // Apply the dynamically calculated minHeight
        // style={{ background: "#FFAF00" }}
      >
        <div className="flex w-full  bg-[#FFAF00]">
          <div className="h-full  ">
            <div
              className=" absolute z-1 w-full"
              ref={imageRef} // Attach the ref to the image
            >
              <TracksImageTop
                // src={TracksImageTop.src}
                // alt="Top Tracks Image"
                className="w-[100%] relative z-[0] bg-cover"
              />
            </div>
          </div>
          <div className="absolute w-full  z-2 ">
            <div className="w-full justify-end items-end  flex">
              <img
                src={TracksImageBottom.src}
                alt="Bottom Tracks Image"
                className=" w-[83%]   "
              />
            </div>
            <div className="absolute top-[77%] ">
              <img
                src={SeperationImage.src}
                alt="Seperation Image"
                // style={{ marginTop: '-260px' }}
                className=" "
              />
            </div>
          </div>

          {minHeight != "0" ? (
            <div
              className=" absolute z-2 md:w-[40%] w-[50%] md:space-y-10 p-5 md:p-10 flex flex-col  md:justify-center  h-full  text-white"
              style={{ minHeight }}
            >
              <h1
                ref={ref}
                // className="font-bold text-white animate-flip-down animate-once animate-duration-1000 animate-ease-out [text-shadow:_6px_0px_0px_rgb(0_0_0_/_0.5)]"
                className={`font-bold text-white [text-shadow:_6px_0px_0px_rgb(0_0_0_/_0.5)] ${
                  isInView
                    ? " visible animate-flip-down animate-once animate-duration-1000-delay-200 animate-ease-in"
                    : "hidden"
                }`}
                style={{
                  fontSize: "clamp(1rem, 7vw, 10rem)", // Set the origin to the top for a flip-down effect
                }}
              >
                TRACKS
              </h1>

              <p
                ref={ref}
                className={` text-white  ${
                  isInView
                    ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                    : ""
                }`}
                style={{ fontSize: "clamp(0.7rem, 2vw, 1.3rem)" }}
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
