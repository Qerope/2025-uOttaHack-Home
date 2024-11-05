import React from "react";
import styles from "../styles/TracksSection.module.css";
import TracksImageTop from "../assets/Background 3.png";
import TracksImageBottom from "../assets/Train Station.png";
import RectangleImage from "../assets/Rectangle 1280.png";
import { useRef, useEffect, useState } from "react";
import useInView from "../hooks/useInView";

import SeperationImage from "../assets/Seperation.png";

const TracksSection: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [minHeight, setMinHeight] = useState("100vh"); // Initial value as full screen height
  const { ref, isInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    // Check if the image is loaded and has a height
    if (imageRef.current) {
      const imageHeight = imageRef.current.clientHeight;
      setMinHeight(`${imageHeight}px`); // Set the minHeight dynamically
    }
  }, []);
  return (
    <section
      id="tracks"
      className="relative z-10 w-full  "
      style={{ minHeight }} // Apply the dynamically calculated minHeight
      // style={{ background: "#FFAF00" }}
    >
      <div className="flex w-full  bg=[#FFAF00]">
        <div className="h-full  ">
          <div className=" absolute z-1 ">
            <img
              src={TracksImageTop.src}
              ref={imageRef} // Attach the ref to the image
              alt="Top Tracks Image"
              className="w-[100%]"
            />
          </div>
        </div>
        <div className="absolute w-full  z-2 ">
          <div className="w-full justify-end items-end  flex">
            <img
              src={TracksImageBottom.src}
              alt="Bottom Tracks Image"
              className=" w-[83%]  "
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

        <div className=" absolute z-2 md:w-[40%] w-[50%] md:space-y-10 p-5 md:p-10 flex flex-col  md:justify-center  h-1/2 md:h-full text-white">
          <h1
            ref={ref}
            className={`font-bold  [text-shadow:_6px_0px_0px_rgb(0_0_0_/_0.5)] ${
              isInView ? "animate-flip-down" : ""
            }`}
            style={{ fontSize: "clamp(1rem, 7vw, 10rem)" }}
          >
            TRACKS
          </h1>

          <p
            className="text-white"
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
      </div>
    </section>
  );
};

export default TracksSection;
