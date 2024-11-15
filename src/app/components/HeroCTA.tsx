import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../styles/HeroCTA.module.css";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CTA from "../assets/cta.svg";
import BELL from "../assets/bell.svg";

interface HeroCTAProps {
  buttonText: string;
  buttonLink: string;
  isNewsLetterActive: boolean;
}

const HeroCTA: React.FC<HeroCTAProps> = ({
  buttonText,
  buttonLink,
  isNewsLetterActive,
}) => {
  const [email, setEmail] = useState<string>("");
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailFailed, setEmailFailed] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when the element comes into view

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      try {
        await addDoc(collection(db, "emails"), {
          email: email,
          timestamp: new Date(),
        });
        setIsSubmitted(true);
        setEmail("");
        enqueueSnackbar("Email successfully submitted!", {
          variant: "success",
        });
      } catch (error) {
        console.error("Error adding email: ", error);
        enqueueSnackbar("Email submission failed. Please try again.", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("Please enter a valid email address.", {
        variant: "warning",
      });
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      {isNewsLetterActive && (
        <div className=" flex w-full flex-col items-center">
          <form
            onSubmit={handleEmailSubmit}
            className="flex items-center h-14 p-1 backdrop-blur-md bg-white/70 rounded-lg overflow-hidden w-full max-w-md shadow-xl"
          >
            <>
              {emailSubmitted ? (
                <p className="text-black text-center w-full font-light">
                  Thank you for subscribing!
                </p>
              ) : (
                <div className="flex w-full  items-center  flex-row">
                  <input
                    type="email"
                    placeholder="Subscribe to our newsletter"
                    value={email}
                    onChange={handleEmailChange}
                    className="flex-grow px-4 py-3 w-full mt-[2px] text-sm text-[#4375B6] placeholder-[#4375B6] bg-transparent outline-none leading-none"
                  />

                  <button
                    type="submit"
                    className="flex items-center justify-center bg-[#F4A701] hover:bg-[#3D6CA9] bg-opacity-90 text-white w-12 h-12 md:w-14 md:h-30 rounded-lg transition-all m-1"
                  >
                    {isSubmitted ? (
                      <FaCheck className="w-4 h-4 md:w-4 md:h-4" />
                    ) : (
                      <FaArrowRightLong className="w-4 h-4 md:w-4 md:h-4" />
                    )}
                  </button>
                </div>
              )}
            </>
          </form>
        </div>
      )}
      <div className={`button-container p-10 text-center mt-0 ${ styles.closerButton}`}>
        <motion.button
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Starting state: faded out and below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and in place
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Animation duration and easing
          className={`text-center font-bold cta ${
            (buttonText === "Visit 2024" || buttonText === "Apply Now!") ? styles.enlargeOnHover : ""}`}
        >
          <a target="_blank" rel="noopener noreferrer" href={buttonLink}>
            {buttonText}
          </a>
        </motion.button>
      </div>
    </div>
  );
};

// Example state-based usage
interface QuickHeroSectionStateProps {
  mainState: number;
}

const QuickHeroSectionState: React.FC<QuickHeroSectionStateProps> = ({
  mainState,
}) => {
  const sectionComponents: { [key: number]: JSX.Element | null } = {
    0: (
      <HeroCTA
        isNewsLetterActive={true}
        buttonText="Visit 2024"
        buttonLink="https://2024.uottahack.ca/"
      />
    ),
    1: (
      <HeroCTA
        isNewsLetterActive={true}
        buttonText="Visit 2025"
        buttonLink="https://2025.uottahack.ca/"
      />
    ),
    2: (
      <HeroCTA
        isNewsLetterActive={false}
        buttonText="Apply Now!"
        buttonLink="https://apply.uottahack.ca/"
      />
    ),
    3: (
      <HeroCTA
        isNewsLetterActive={false}
        buttonText="Live"
        buttonLink="https://live.uottahack.ca/"
      />
    ),
    4: null,
  };

  return <>{sectionComponents[mainState]}</>;
};

export default QuickHeroSectionState;
