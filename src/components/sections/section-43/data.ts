/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface Section43Benefit {
  id: string;
  title: string;
  description: string;
}

export interface ISection43Data {
  id: string;
  title: string;
  introduction: string;
  benefits: Section43Benefit[];
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
  accentColor: string;
}

export type Section43Data = ISection43Data;

export interface Section43Payload extends Section43Data {
  paddingX: number;
  paddingY: number;
}

export interface Section43Props {
  data?: Section43Data | Section43Payload | string;
}

export const defaultDataSection43: Section43Data = {
  id: "section-uid-43",
  title: "Exploring Higher Education in the United Kingdom",
  introduction:
    "The United Kingdom may be one option for students exploring overseas study. Compare courses, costs, learning format, location, and personal suitability before making a decision.",
  benefits: [
    {
      id: "benefit-universities",
      title: "Institution research:",
      description:
        "Research institutions and programmes directly to confirm eligibility, course content, costs, and application routes.",
    },
    {
      id: "benefit-research",
      title: "Course planning:",
      description:
        "Compare teaching methods, assessment, facilities, and student support using current information from each institution.",
    },
    {
      id: "benefit-community",
      title: "Living arrangements:",
      description:
        "Research accommodation, cost of living, health cover, and local support before committing to a destination.",
    },
    {
      id: "benefit-work",
      title: "Student visa rules:",
      description:
        "Work rights, visa conditions, and post-study options vary. Confirm current information through official UK government and institution sources.",
    },
  ],
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "Study destination placeholder image",
  backgroundColor: "#f8f9fb",
  headingColor: "#24349a",
  textColor: "#202641",
  accentColor: "#ef0b5b",
};

export const defaultData = defaultDataSection43;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
