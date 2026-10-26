/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface ISection42Data {
  id: string;
  title: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
}

export type Section42Data = ISection42Data;

export interface Section42Payload extends Section42Data {
  paddingX: number;
  paddingY: number;
}

export interface Section42Props {
  data?: Section42Data | Section42Payload | string;
}

export const defaultDataSection42: Section42Data = {
  id: "section-uid-42",
  title: "Study in the United Kingdom from Bangladesh for Higher Education",
  paragraphs: [
    "The United Kingdom may be one option for students exploring overseas study. Compare courses, costs, learning format, location, and personal suitability before making a decision.",
    "Admission and student-visa requirements, funding evidence, work rules, and post-study options vary by institution and immigration rules. Confirm current information directly with the relevant official sources.",
  ],
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "Study destination placeholder image",
  backgroundColor: "#f6f7f9",
  headingColor: "#252d8f",
  textColor: "#202641",
};

export const defaultData = defaultDataSection42;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
