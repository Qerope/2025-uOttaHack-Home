import React from "react";

import styles from "../styles/MainFooter.module.css";
import Insta from "../assets/insta.svg";
import Linkedin from "../assets/linkedin.svg";
import Discord from "../assets/discord.svg";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
interface MainFooterProps {}

const MainFooter: React.FC<MainFooterProps> = () => {
  const Headline = styled(ReactMarkdown as any)`
    font-family: Inter;
    font-weight: 800;
    color: white;
  `;
  const Wordmark = styled(Headline)`
    font-family: "Harabara";
    line-height: 100%;
    margin-bottom: 4px;
    color: white;
  `;
  return (
    <section
      className={` flex flex-col   w-full text-white bg-[#1F4172] w-full h-full flex`}
    >
      <div className="md:pl-48 md:pr-48 md:justify-center   pt-20 flex flex-col md:flex-row w-full md:justify-between items-center ">
        <div className="flex md:justify-center items-center flex-col">
          <Wordmark className="text-6xl ">uOttaHack 7</Wordmark>
          <p>The capital of Canada's largest hackathon.</p>
        </div>
        <div className="grid grid-cols-1  underline  underline-offset-4 md:grid-cols-2 gap-4 p-10 md:p-0">
          <a
            href="https://mlh.io/privacy"
            className="text-center md:text-start text-white "
          >
            Privacy
          </a>
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            className="text-center md:text-start text-white "
          >
            Policy Code of Conduct
          </a>
          <a
            href="https://github.com/uOttaHack"
            className="text-center md:text-start text-white "
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:hi@uottahack.ca"
            className="text-center md:text-start text-white "
          >
            Contact
          </a>
        </div>
      </div>
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
          Made with 💓 in Ottawa, Ontario by the uOttaHack team!
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
