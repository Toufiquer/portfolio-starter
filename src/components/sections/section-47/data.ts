/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface ISection47Data {
  id: string;
  title: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
}

export type Section47Data = ISection47Data;

export interface Section47Payload extends Section47Data {
  paddingX: number;
  paddingY: number;
}

export interface Section47Props {
  data?: Section47Data | Section47Payload | string;
}

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataSection47: Section47Data = {
  id: "section-uid-47",
  title: "Study in United States from Bangladesh for Higher Education",
  paragraphs: [
    "The United States may be one option for students exploring overseas study. Compare courses, costs, learning format, location, and personal suitability before making a decision.",
    "Admission and student-visa requirements, funding evidence, work rules, and post-study options vary by institution and immigration rules. Confirm current information directly with the relevant official sources.",
  ],
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "Statue of Liberty and the United States flag against a blue sky",
  backgroundColor: "#f6f7f9",
  headingColor: "#252d8f",
  textColor: "#202641",
};

export const defaultData = defaultDataSection47;
