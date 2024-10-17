import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../styles/HeroCTA.module.css"

import CTA from '../assets/cta.svg';
import BELL from '../assets/bell.svg';

interface HeroCTAProps {
  buttonText: string;
  buttonLink: string;
  isNewsLetterActive: boolean;
}

const HeroCTA: React.FC<HeroCTAProps> = ({ buttonText, buttonLink, isNewsLetterActive }) => {
  const [email, setEmail] = useState<string>('');
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [emailFailed, setEmailFailed] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email) {
      return;
    }
  
    try {
      await addDoc(collection(db, "emails"), {
        email: email,
        timestamp: new Date(),
      });
  
      setEmail("");
      alert("Email added successfully!");
    } catch (error) {
      console.error("Error adding email: ", error);
      alert("Failed to add email, please try again later.");
    }
  };  

  return (
    <>
      {isNewsLetterActive && (
        <div className="button-container text-center mt-0">
          <form onSubmit={handleEmailSubmit}>
            <div>
              <button type="submit" className={`text-center cta font-bold pr-12 ${styles.cta} font-bold bg-[#F4A701]`}>
                {emailSubmitted ? (
                  <p>Thank you for subscribing!</p>
                ) : (
                  <>
                    <input
                      type="email"
                      placeholder="Subscribe to our newsletter"
                      value={email}
                      onChange={handleEmailChange}
                      className="mr-2"
                    />
                    {emailFailed && !emailSubmitted ? (
                      <div style={{ display: 'inline' }}>Try Again!</div>
                    ) : (
                      <div style={{ display: 'inline' }}>Get Notified! ✉️</div>
                    )}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="button-container text-center mt-0">
        <button className={`text-center ${styles.cta} cta font-bold bg-[#F4A701]`}>
          <a target="_blank" rel="noopener noreferrer" href={buttonLink}>
            {buttonText} 
          </a>
        </button>
      </div>
    </>
  );
};

// Example state-based usage
interface QuickHeroSectionStateProps {
  mainState: number;
}

const QuickHeroSectionState: React.FC<QuickHeroSectionStateProps> = ({ mainState }) => {
  const sectionComponents: { [key: number]: JSX.Element | null } = {
    0: <HeroCTA isNewsLetterActive={true} buttonText="Visit 2024" buttonLink="https://2024.uottahack.ca/" />,
    1: <HeroCTA isNewsLetterActive={true} buttonText="Visit 2025" buttonLink="https://2025.uottahack.ca/" />,
    2: <HeroCTA isNewsLetterActive={false} buttonText="Apply!" buttonLink="https://apply.uottahack.ca/" />,
    3: <HeroCTA isNewsLetterActive={false} buttonText="Live" buttonLink="https://live.uottahack.ca/" />,
    4: null
  };

  return <>{sectionComponents[mainState]}</>;
};

export default QuickHeroSectionState;
