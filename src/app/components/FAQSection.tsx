import React, { useState } from "react";

import styles from "../styles/FAQSection.module.css";

interface FAQSectionProps {
  question: string;
  answer: string;
}

const faqs: FAQSectionProps[] = [
  { question: "What is a hackathon?", answer: "idk lmao" },
  { question: "How many people can be on my team?", answer: "idk lmao" },
  { question: "When will I get my acceptance?", answer: "idk lmao" },
  { question: "Who can participate?", answer: "idk lmao" },
  { question: "How much does it cost to attend?", answer: "idk lmao" },
  { question: "What are mentors?", answer: "idk lmao" },
  {
    question: "Can I use a pre-existing project I'm working on?",
    answer: "idk lmao",
  },
  {
    question: "What workshops and activities will there be?",
    answer: "idk lmao",
  },
  { question: "Can I reuse my past hackathon projects?", answer: "idk lmao" },
  { question: "Where do I submit my projects?", answer: "idk lmao" },
  { question: "Is there an age restriction?", answer: "idk lmao" },
  { question: "How do I apply?", answer: "idk lmao" },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles.container} text-white`}>
      <div className={styles.titles}>
        <h2 className={styles.title}>FAQ -</h2>
        <h3 className={styles.subtitle}>Frequently asked questions</h3>
      </div>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
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
              <p className={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className={styles.moreQuestions}>
        <p>Still got questions?</p>
        <p>
          Contact{" "}
          <a href="mailto:hi@uottahack.ca">
            <u>hi@uottahack.ca</u>
          </a>{" "}
          or any of our socials
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
