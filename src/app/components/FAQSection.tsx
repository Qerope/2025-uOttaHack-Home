import React, { useState } from "react";

import styles from "../styles/FAQSection.module.css";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import InsideTrainSVG from "../assets/Interior_3.svg";
interface FAQSectionProps {
  question: string;
  answer: string;
}
const Markdown = styled(ReactMarkdown as any)`
  * {
    font-family: Inter;
    font-size: 14px;
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
    answer: `No. After 2 years the hackathon will be hosted on the beautiful campus of the University of Ottawa and will take place from February 10th - 12th, 2023. Don’t worry about getting lost! We'll have plenty of signage and volunteers around campus to guide you. We can't wait to see you there!`,
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

  return (
    <section
      className={`${styles.container}  text-white overflow-hidden`}
      id="faq"
    >
      <div
        className={`pl-10 md:pt-48 pt-10 flex md:pl-48 flex-row items-center`}
      >
        <h2 className="font-jose font-bold text-6xl md:text-8xl ">FAQ</h2>
        <h3
          className={`font-jose text-md md:text-6xl font-light italic   text-inline `}
        >
          - Frequently asked questions
        </h3>
      </div>
      <div
        className={`${styles.faqContainer} backdrop-blur-lg  rounded p-10  md:p-48 flex justify-center text-sm items-center h-full`}
      >
        {faqs.map((faq, index) => (
          <div key={index} className={`${styles.faqItem} pt-5`}>
            <div
              className={styles.faqQuestionContainer}
              onClick={() => toggleDropdown(index)}
            >
              <h4 className={styles.faqQuestion}>{faq.question}</h4>
              <div
                className={`${styles.triangle} ${
                  openIndex === index ? styles.open : ""
                }`}
              ></div>
            </div>
            {openIndex === index && (
              <p className={` ${styles.faqAnswer} pt-10 leading-wider`}>
                <Markdown>{faq.answer}</Markdown>
              </p>
            )}
          </div>
        ))}
      </div>
      <div className=" flex   flex-row pt-[10%] flex-end justify-center w-full h-full items-end">
        <div className="flex  w-full flex-col justify-center flex-end items-center">
          <InsideTrainSVG className="w-[200%] h-auto sm:w-[400%] -translate-x-[27%] sm:translate-x-0 md:w-full mx-auto" />{" "}
          <p>Still got questions?</p>
          <p>
            Contact{" "}
            <a href="mailto:hi@uottahack.ca">
              <u>hi@uottahack.ca</u>
            </a>{" "}
            or any of our socials
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
