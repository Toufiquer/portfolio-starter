/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 19 August, 2026
|-----------------------------------------
*/

export const defaultQuestions = [
  {
    question: "What does NexaMart offer?",
    answer: "NexaMart is an online shopping platform serving customers across Bangladesh.",
  },
  {
    question: "Where does NexaMart serve customers?",
    answer: "NexaMart serves customers across Bangladesh.",
  },
  {
    question: "How can I ask about a product or order?",
    answer: "Contact NexaMart by phone, WhatsApp, email, or Facebook.",
  },
  {
    question: "How can I contact NexaMart?",
    answer: "Call or WhatsApp 01711111111, email example@gmail.com, or use the Facebook links on this site.",
  },
];

export const defaultData = {
  title: "Frequently Asked Questions",
  intro:
    "Find answers about NexaMart online shopping and how to contact us.",
  questionsJson: JSON.stringify(defaultQuestions),
};
