/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface WhatsAppFaqItem {
  question: string;
  answer: string;
}

export interface IWhatsAppFaqData {
  pageUid: string;
  pageName: string;
  heading: string;
  whatsappLabel: string;
  whatsappNumber: string;
  faqs: WhatsAppFaqItem[];
}

export interface WhatsAppFaqPayload extends IWhatsAppFaqData {
  paddingX: number;
  paddingY: number;
}

export interface WhatsAppFaqProps {
  data?: IWhatsAppFaqData | WhatsAppFaqPayload | string;
}

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataWhatsAppFaq: IWhatsAppFaqData = {
  pageUid: "whatsapp-faq-uid",
  pageName: "WhatsApp FAQ",
  heading: "Ask NexaMart on WhatsApp",
  whatsappLabel: "Chat with NexaMart",
  whatsappNumber: "01711111111",
  faqs: [
    {
      question: "What does NexaMart offer?",
      answer:
        "NexaMart is an online shopping platform serving customers across Bangladesh.",
    },
    {
      question: "Where does NexaMart serve customers?",
      answer:
        "NexaMart serves customers across Bangladesh.",
    },
    {
      question: "How can I contact NexaMart?",
      answer:
        "Call or WhatsApp 01711111111, email example@gmail.com, or use the Facebook links on this site.",
    },
  ],
};

export const defaultWhatsAppFaqItem: WhatsAppFaqItem = {
  question: "New question",
  answer: "Add a confirmed answer for NexaMart customers.",
};
