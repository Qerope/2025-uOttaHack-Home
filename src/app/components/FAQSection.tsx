import React, { useState } from "react";

import styles from "../styles/FAQSection.module.css";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import InsideTrainSVG from "../assets/Interior_3.svg";
import { motion, AnimatePresence } from "framer-motion";

interface FAQSectionProps {
  question: string;
  answer: string;
}
const Markdown = styled(ReactMarkdown as any)`
  * {
    font-family: Inter;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const faqs: FAQSectionProps[] = [
  {
    question: "What is uOttaHack?",
    answer: `uOttaHack is an MLH hackathon hosted by University of Ottawa students! It's a sprint-like event where students from all across North America will come to turn their ideas into real projects through hardware and software. However, they only have 36 hours to accomplish their goal... Hackers will receive mentorship, learn about new job opportunities, get some cool swag, and have fun along the way!`,
  },
  {
    question: "Will uOttaHack happen in person or virtually?",
    answer: `The hackathon will be hosted on the beautiful campus of the University of Ottawa and will take place from January 17th - 19th, 2025. Don’t worry about getting lost! We'll have plenty of signage and volunteers around campus to guide you. We can't wait to see you there!`,
  },
  {
    question: "Who can participate?",
    answer: `Any students, at any skill level, from any field of study are welcome! The only thing you need is an interest in building something amazing and the motivation to learn!

\\
**Are you a recent grad?** No worries - as long as you've graduated in the last 12 months, you're welcome to apply and attend!`,
  },
  {
    question: "How much will it cost me?",
    answer: `uOttaHack has no admission fees and all meals and benefits during the hackathon are free. Did we also mention that each hacker will be getting an amazing swag bag?`,
  },
  {
    question: "What if I've never been to a hackathon before?",
    answer: `There's a first time for everything, right? Hackathons are all about learning new things, meeting people, and having an amazing experience. 
    We'll have plenty of workshops and mentors during the event to help you out! At our last iteration, 30% of our participants were first-time hackers!`,
  },
  {
    question: "Can I start working on a project before the event?",
    answer: `All projects must be started from scratch at the event, but you're free to start brainstorming ideas beforehand!`,
  },
  {
    question: "Can I participate as part of a team?",
    answer: `**Yes**! Hacking can be done solo, or in a team of up to four participants.`,
  },
  {
    question: "Can high school students come?",
    answer: `**Absolutely!** We highly encourage high school students to apply! Minors attending will be asked to have waivers signed by their parents/guardians.`,
  },
  {
    question: "Sounds great, but what do I win?",
    answer: `We started uOttaHack to empower students in creating innovative, fun, and awesome projects, without the stress of a regular semester's weekend. The biggest rewards you will get are the friends you make that will last a lifetime and an experience you won't forget.
**But, with that said** - you'll have the chance to demo to our stellar panel of judges and the top teams will be awarded sweet prizes! There will also be smaller prizes for specific categories and some given out by our sponsors! In the past, hackers have won DJI drones, Nintendo Switches, and Fitbit smart watches!`,
  },
  {
    question: "What is Major League Hacking?",
    answer: `[Major League Hacking](https://mlh.io/) is the official student hackathon league in North America & Europe. They work with over 200 member events and empower over 70,000 students every year.`,
  },
  {
    question: "Is there a code of conduct?",
    answer: `Yes there is. The organizers care deeply about everyone's experience and ensuring they get to hack in a comfortable and safe environment. You can find it [here](https://static.mlh.io/docs/mlh-code-of-conduct.pdf).`,
  },
  {
    question: "I don't live in Ottawa, can I still go?",
    answer: `uOttaHack will be providing partial reimbursement to most major cities in and surrounding Ontario! Accepted attendees will need to confirm ahead of time should reimbursement services be required, and will need to submit a project. Otherwise travelling to uOttaHack will be at the expense of the participant. This info will be sent to you if you are accepted!`,
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const columnOneFAQs = faqs.filter((_, i) => i % 2 === 0);
  const columnTwoFAQs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className={` bg-[#1f4172]  text-white overflow-hidden`} id="faq">
      <div className={`pl-10  pt-10 flex  flex-row items-center`}>
        <h2 className="font-jost font-bold text-6xl md:text-6xl ">FAQ</h2>
        <h3
          className={`font-jost text-md md:text-[3vw] font-light italic   text-inline `}
        >
          - Frequently asked questions
        </h3>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 backdrop-blur-lg relative p-10 rounded w-full h-full gap-8">
        {/* Column One */}
        <div>
          {columnOneFAQs.map((faq, index) => (
            <AnimatePresence key={index} initial={false}>
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
                className="md:text-[1.6vw] pt-[2vw] text-sm"
              >
                <div
                  className="flex w-full items-center font-jost"
                  onClick={() => toggleDropdown(index)}
                >
                  <h4 className="w-3/4">{faq.question}</h4>
                  <div
                    className={`${styles.triangle} m-2 ${
                      openIndex === index ? styles.open : ""
                    }`}
                  ></div>
                </div>

                {openIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 1, height: 1 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4, ease: "easeInOut" },
                    }}
                    className="flex flex-col mt-5 h-auto m-10 pl-1 md:pl-3 italic md:text-lg w-[80%] bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl"
                  >
                    <div className="flex h-[full] pl-5 bg-[#1f4172] flex-row">
                      <Markdown>{faq.answer}</Markdown>
                    </div>
                  </motion.div>
                )}

                {/* Line under each question */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: openIndex === index ? 0.1 : 0,
                  }}
                  className="w-[80%] shadow-4xl shadow-indigo-red rounded-lg mt-4 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
                  style={{ transformOrigin: "left" }}
                ></motion.div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        {/* Column Two */}
        <div>
          {columnTwoFAQs.map((faq, index) => (
            <AnimatePresence key={index + columnOneFAQs.length} initial={false}>
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
                className="md:text-[1.6vw] pt-[2vw] text-sm"
              >
                <div
                  className="flex w-full items-center font-jost"
                  onClick={() => toggleDropdown(index + columnOneFAQs.length)}
                >
                  <h4 className="w-3/4">{faq.question}</h4>
                  <div
                    className={`${styles.triangle} m-2 ${
                      openIndex === index + columnOneFAQs.length
                        ? styles.open
                        : ""
                    }`}
                  ></div>
                </div>

                {openIndex === index + columnOneFAQs.length && (
                  <motion.div
                    layout
                    initial={{ opacity: 1, height: 1 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4, ease: "easeInOut" },
                    }}
                    className="flex flex-col mt-5 h-auto m-10 pl-1 md:pl-3 italic md:text-lg w-[80%] bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl"
                  >
                    <div className="flex h-[full] pl-5 bg-[#1f4172] flex-row">
                      <Markdown>{faq.answer}</Markdown>
                    </div>
                  </motion.div>
                )}

                {/* Line under each question */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: openIndex === index + columnOneFAQs.length ? 0.1 : 0,
                  }}
                  className="w-[80%] shadow-4xl shadow-indigo-red rounded-lg mt-4 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
                  style={{ transformOrigin: "left" }}
                ></motion.div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
      <div className=" flex   flex-row  flex-end justify-center w-full h-full items-end">
        <div className="flex  w-full flex-col justify-center flex-end items-center">
          <div className="flex flex-col italic justify-center items-center  font-light font-jost p-10 md:pt-20 text-sm md:text-lg items-center">
            <p>Still got questions?</p>
            <p>
              Contact{" "}
              <a href="mailto:hi@uottahack.ca">
                <u>hi@uottahack.ca</u>
              </a>{" "}
              or any of our socials
            </p>
          </div>
          <InsideTrainSVG className="w-[200%] h-auto sm:w-[400%] -translate-x-[27%] sm:translate-x-0 md:w-full mx-auto" />{" "}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
