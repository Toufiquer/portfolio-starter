/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface ISection41Data {
  id: string;
  title: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
}

export type Section41Data = ISection41Data;

export interface Section41Payload extends Section41Data {
  paddingX: number;
  paddingY: number;
}

export interface Section41Props {
  data?: Section41Data | Section41Payload | string;
}

export const defaultDataSection41: Section41Data = {
  id: "section-uid-41",
  title: "Study in United States from Bangladesh for Higher Education",
  paragraphs: [
    "The United States may be one option for students exploring overseas study. Compare courses, costs, learning format, location, and personal suitability before making a decision.",
    "Admission and student-visa requirements, funding evidence, work rules, and post-study options vary by institution and immigration rules. Confirm current information directly with the relevant official sources.",
  ],
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "Study destination placeholder image",
  backgroundColor: "#f6f7f9",
  headingColor: "#252d8f",
  textColor: "#202641",
};

export const defaultData = defaultDataSection41;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
