/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface Section46Institution {
  id: string;
  name: string;
  level: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ISection46Data {
  id: string;
  eyebrow: string;
  showEyebrow?: boolean;
  title: string;
  description: string;
  institutions: Section46Institution[];
  backgroundColor: string;
  headingColor: string;
  textColor: string;
  accentColor: string;
  cardColor: string;
  badgeColor: string;
}

export type Section46Data = ISection46Data;

export interface Section46Payload extends Section46Data {
  paddingX: number;
  paddingY: number;
}

export interface Section46Props {
  data?: Section46Data | Section46Payload | string;
}

export const defaultDataSection46: Section46Data = {
  id: "section-uid-46",
  eyebrow: "RESEARCH EXAMPLES",
  showEyebrow: true,
  title: "Research United Kingdom institutions independently",
  description:
    "These examples are not NexaMart partner institutions. Research courses, eligibility, fees, and application routes directly with each institution, and confirm current requirements through official sources.",
  institutions: [
    {
      id: "institution-oxford",
      name: "University of Oxford",
      level: "RESEARCH EXAMPLE",
      imageUrl: "/images/all-pages-placeholder.png",
      imageAlt: "United Kingdom university campus for the University of Oxford",
      buttonText: "Discuss your research →",
      buttonUrl: "/contact-us",
    },
    {
      id: "institution-cambridge",
      name: "University of Cambridge",
      level: "RESEARCH EXAMPLE",
      imageUrl: "/images/all-pages-placeholder.png",
      imageAlt: "United Kingdom university campus for the University of Cambridge",
      buttonText: "Discuss your research →",
      buttonUrl: "/contact-us",
    },
    {
      id: "institution-imperial",
      name: "Imperial College London",
      level: "RESEARCH EXAMPLE",
      imageUrl: "/images/all-pages-placeholder.png",
      imageAlt: "United Kingdom university campus for Imperial College London",
      buttonText: "Discuss your research →",
      buttonUrl: "/contact-us",
    },
    {
      id: "institution-manchester",
      name: "University of Manchester",
      level: "RESEARCH EXAMPLE",
      imageUrl: "/images/all-pages-placeholder.png",
      imageAlt: "United Kingdom university campus for the University of Manchester",
      buttonText: "Discuss your research →",
      buttonUrl: "/contact-us",
    },
    {
      id: "institution-edinburgh",
      name: "University of Edinburgh",
      level: "RESEARCH EXAMPLE",
      imageUrl: "/images/all-pages-placeholder.png",
      imageAlt: "United Kingdom university campus for the University of Edinburgh",
      buttonText: "Discuss your research →",
      buttonUrl: "/contact-us",
    },
  ],
  backgroundColor: "#ffffff",
  headingColor: "#29399b",
  textColor: "#252b47",
  accentColor: "#ed075a",
  cardColor: "#ffffff",
  badgeColor: "#ffffff",
};

export const defaultData = defaultDataSection46;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
