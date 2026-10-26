/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface Section45Document {
  id: string;
  text: string;
}

export interface ISection45Data {
  id: string;
  title: string;
  introduction: string;
  documents: Section45Document[];
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
  accentColor: string;
}

export type Section45Data = ISection45Data;

export interface Section45Payload extends Section45Data {
  paddingX: number;
  paddingY: number;
}

export interface Section45Props {
  data?: Section45Data | Section45Payload | string;
}

export const defaultDataSection45: Section45Data = {
  id: "section-uid-45",
  title: "Student-visa document research checklist",
  introduction:
    "This is a general planning checklist, not legal or immigration advice. Requirements vary by applicant and can change, so confirm the current document list through official UK government and institution sources.",
  documents: [
    { id: "document-passport", text: "Confirm current passport requirements through official sources" },
    { id: "document-acceptance", text: "Confirm current admission evidence required for your selected institution" },
    {
      id: "document-finance",
      text: "Confirm current financial-evidence rules, amounts, and accepted documents",
    },
    {
      id: "document-academic",
      text: "Confirm academic records and translations requested by the institution or authority",
    },
    { id: "document-language", text: "Confirm the programme's current language-evidence requirements" },
    { id: "document-sop", text: "Prepare statements or plans only where the institution or authority requests them" },
    {
      id: "document-insurance",
      text: "Confirm any current health, biometric, insurance, or supporting-evidence requirements",
    },
  ],
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "Study destination placeholder image",
  backgroundColor: "#f8f9fb",
  headingColor: "#24349a",
  textColor: "#202641",
  accentColor: "#ef0b5b",
};

export const defaultData = defaultDataSection45;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
