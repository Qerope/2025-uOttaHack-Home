import React from "react";
import styles from "../styles/MapSection.module.css";
import TrainBord from "../assets/board.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import useInView from "../hooks/useInView";

interface MapSectionProps {}

const MapSection: React.FC<MapSectionProps> = () => {
  const { ref, isInView } = useInView({ threshold: 0.0001 });

  return (
    <section
      className={`${styles.container} bg-[#D5DBE2] w-auto h-auto overflow-hidden`}
      id="location"
    >
      <div
        className={`bg-[#D5DBE2] text-3xl md:text-7xl  font-bold p-1`}
        style={{ fontFamily: "Jost, sans-serif", fontStyle: "italic" }}
      >
        <h2 className="pt-20 text-[#092349] font-jost p-10 md:p-20">
          Where to find us...
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3761884800556!2d-75.6839852877888!3d45.42191753613772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0553301ba91f%3A0x88fbccabd3b90bc4!2sLearning%20Crossroads%20(CRX)!5e0!3m2!1sen!2sca!4v1729473160390!5m2!1sen!2sca"
        width="100%"
        height="700"
        style={{ border: 0, background: "#D5DBE2 " }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div
        ref={ref}
        className={` ${
          isInView
            ? "  animate-flip-down animate-once animate-duration-500 animate-ease-in"
            : ""
        }`}
      >
        <TrainBord className="w-[200%] bg-[#D5DBE2] h-auto -translate-x-[25%] sm:translate-x-0 md:w-full mx-auto" />
      </div>
    </section>
  );
};

export default MapSection;
