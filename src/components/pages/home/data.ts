/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 19 August, 2026
|-----------------------------------------
*/

export type HomeCard = {
  title: string;
  description: string;
};

export type HomeData = {
  forceUpdate: "true" | "false";
  paddingX: number;
  paddingY: number;
  eyebrow: string;
  title: string;
  intro: string;
  imageUrl: string;
  imageAlt: string;
  sectionsJson: string;
};

export const defaultCards: HomeCard[] = [
  {
    title: "Online shopping",
    description: "Shop online with NexaMart.",
  },
  {
    title: "Serving Bangladesh",
    description: "NexaMart serves customers across Bangladesh.",
  },
  {
    title: "Get in touch",
    description: "Contact NexaMart by phone, WhatsApp, email, or Facebook.",
  },
];

export const defaultHomeCard: HomeCard = {
  title: "New section",
  description: "Add confirmed information about NexaMart online shopping.",
};

export const defaultData: HomeData = {
  forceUpdate: "false",
  paddingX: 0,
  paddingY: 0,
  eyebrow: "NexaMart (NxMart)",
  title: "Online shopping across Bangladesh.",
  intro: "NexaMart is an online shopping platform serving customers across Bangladesh.",
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "NexaMart online shopping",
  sectionsJson: JSON.stringify(defaultCards),
};
