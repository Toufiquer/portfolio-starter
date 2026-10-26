/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface ISection40Data {
  id: string;
  eyebrow: string;
  showEyebrow: boolean;
  title: string;
  highlightedTitle: string;
  paragraphs: string[];
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  onlineAppointmentImage: string;
  physicalAppointmentImage: string;
  backgroundColor: string;
  headingColor: string;
  accentColor: string;
  textColor: string;
  buttonColor: string;
}

export type Section40Data = ISection40Data;

export interface Section40Payload extends Section40Data {
  paddingX: number;
  paddingY: number;
}

export interface Section40Props {
  data?: Section40Data | Section40Payload | string;
}

export const defaultDataSection40: Section40Data = {
  id: "section-uid-40",
  eyebrow: "NexaMart Consultation",
  showEyebrow: true,
  title: "Get Your",
  highlightedTitle: "Consultation",
  paragraphs: [
    "Request a NexaMart consultation to discuss your study-abroad goals, destination research, and next preparation steps.",
    "NexaMart supports customers across Bangladesh through online consultation, without requiring unnecessary travel.",
    "Bring your academic information and questions so the conversation can focus on clear, relevant next steps. Requirements vary, so confirm current information through official sources.",
  ],
  primaryButtonText: "Book Consultation",
  primaryButtonUrl: "/contact-us",
  secondaryButtonText: "Ask Question",
  secondaryButtonUrl: "/contact-us",
  onlineAppointmentImage: "https://placehold.co/720x520/dbeafe/1d4ed8?text=Online+Appointment",
  physicalAppointmentImage: "https://placehold.co/720x520/e2e8f0/475569?text=In-Person+Consultation",
  backgroundColor: "#ffffff",
  headingColor: "#050505",
  accentColor: "#2477f2",
  textColor: "#5f6780",
  buttonColor: "#2477f2",
};

export const defaultData = defaultDataSection40;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
