/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface Section44Requirement {
  id: string;
  title: string;
  description: string;
}

export interface ISection44Data {
  id: string;
  title: string;
  introduction: string;
  requirements: Section44Requirement[];
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
  accentColor: string;
}

export type Section44Data = ISection44Data;

export interface Section44Payload extends Section44Data {
  paddingX: number;
  paddingY: number;
}

export interface Section44Props {
  data?: Section44Data | Section44Payload | string;
}

export const defaultDataSection44: Section44Data = {
  id: "section-uid-44",
  title: "United Kingdom Student Visa Requirements",
  introduction:
    "This is a general planning checklist, not legal or immigration advice. UK Student visa requirements can change and vary by applicant, so confirm the current requirements through official UK government and institution sources before applying.",
  requirements: [
    {
      id: "requirement-admission",
      title: "Official Admission:",
      description:
        "Confirm the current admission evidence required by your selected institution and the official visa guidance.",
    },
    {
      id: "requirement-finance",
      title: "Proof of Financial Support:",
      description:
        "Confirm the current financial-evidence rules, amounts, timing, and accepted documents through official sources.",
    },
    {
      id: "requirement-language",
      title: "Language Proficiency:",
      description: "Confirm your chosen programme's current English-language requirements and accepted evidence.",
    },
    {
      id: "requirement-records",
      title: "Clear Records & Medicals:",
      description:
        "Confirm the current passport, health, biometric, and supporting-document requirements through official sources.",
    },
  ],
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "Study destination placeholder image",
  backgroundColor: "#f8f9fb",
  headingColor: "#24349a",
  textColor: "#202641",
  accentColor: "#ef0b5b",
};

export const defaultData = defaultDataSection44;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
