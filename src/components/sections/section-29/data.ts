/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2026
|-----------------------------------------
*/

export interface Section29Data {
  id: string;
  title: string;
  subtitle: string;
  buttonPrimaryText: string;
  buttonSecondaryText: string;
  contactLabel: string;
  contactNumber: string;
}

export interface Section29Payload extends Section29Data {
  paddingX: number;
  paddingY: number;
}

export interface Section29Props {
  data?: Section29Data | Section29Payload | string;
}

export const defaultDataSection29: Section29Data = {
  id: "section-uid-29",
  title: "Shop online with NexaMart.",
  subtitle: "NexaMart serves customers across Bangladesh.",
  buttonPrimaryText: "Contact NexaMart",
  buttonSecondaryText: "Chat on WhatsApp",
  contactLabel: "Call or WhatsApp NexaMart",
  contactNumber: "01711111111",
};

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
