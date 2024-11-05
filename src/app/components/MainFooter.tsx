import React from "react";

import styles from "../styles/MainFooter.module.css";
import Insta from "../assets/insta.svg";
import Linkedin from "../assets/linkedin.svg";
import Discord from "../assets/discord.svg";
interface MainFooterProps {}

const MainFooter: React.FC<MainFooterProps> = () => {
  return (
    <section
      className={` flex flex-col  justify-center items-center w-full text-white bg-[#1F4172] w-full h-full flex`}
    >
      <div className="p-3 italic  w-full flex flex-col items-center">
        <p>Follow our socials</p>
        <div className=" bottom-0   bg-transparent p-6 w-[170px] rounded-t-sm flex justify-center items-center space-x-8">
          <a href="https://ca.linkedin.com/company/uottahack" target="_blank">
            <Linkedin className="w-7 h-7" />
          </a>
          <a href="https://www.instagram.com/uottahack" target="_blank">
            <Insta className="w-7 h-7" />
          </a>
          <a href="https://discord.gg/XDQ94xsDwB" target="_blank">
            <Discord className="w-7 h-7" />
          </a>
        </div>
        <div className="flex flex-end justify-center items-center pt-10 italic font-light w-full h-full">
          Made with 💓 in Ottawa, Ontario
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
