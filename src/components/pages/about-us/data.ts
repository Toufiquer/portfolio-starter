/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 29 August, 2026
|-----------------------------------------
*/

export type AboutSection = {
  id: string;
  eyebrow: string;
  showEyebrow: boolean;
  title: string;
  description: string;
};

export const defaultSections: AboutSection[] = [
  {
    id: "purpose",
    eyebrow: "About NexaMart",
    showEyebrow: true,
    title: "Online shopping for customers across Bangladesh.",
    description: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
  },
  {
    id: "learning",
    eyebrow: "Our platform",
    showEyebrow: true,
    title: "Shop online with NexaMart.",
    description: "Explore NexaMart online shopping and contact us with questions.",
  },
  {
    id: "programs",
    eyebrow: "Our service",
    showEyebrow: true,
    title: "Online shopping across Bangladesh.",
    description: "NexaMart provides an online shopping platform for customers across Bangladesh.",
  },
  {
    id: "promise",
    eyebrow: "Contact",
    showEyebrow: true,
    title: "Questions about NexaMart?",
    description: "Call, message, or email NexaMart using the contact details on our Contact page.",
  },
];

export const defaultAboutSection: Omit<AboutSection, "id"> = {
  eyebrow: "New section",
  showEyebrow: true,
  title: "New section",
  description: "Add confirmed information about NexaMart.",
};

export const defaultData = {
  eyebrow: "About NexaMart",
  showEyebrow: "true",
  title: "About NexaMart.",
  intro: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
  image: "/images/all-pages-placeholder.png",
  sectionsJson: JSON.stringify(defaultSections),
  paddingX: "0",
  paddingY: "0",
};
