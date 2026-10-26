/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2026
|-----------------------------------------
*/

export interface IServiceFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface Section30Data {
  id: string;
  badgeText: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  features: IServiceFeature[];
  ctaText: string;
  ctaUrl: string;
  rightCardBadge: string;
  locationLabel: string;
  destinationLabel: string;
}

export interface Section30Payload extends Section30Data {
  paddingX: number;
  paddingY: number;
}

export interface Section30Props {
  data?: Section30Data | Section30Payload | string;
}

export const defaultDataSection30: Section30Data = {
  id: "section-uid-30",
  badgeText: "NexaMart",
  headingPrefix: "Online",
  headingHighlight: "Shopping",
  headingSuffix: "Across Bangladesh",
  features: [
    {
      title: "Online shopping",
      description: "NexaMart is an online shopping platform.",
      iconName: "Users",
    },
    {
      title: "Service area",
      description: "NexaMart serves customers across Bangladesh.",
      iconName: "Award",
    },
    {
      title: "Contact NexaMart",
      description: "Contact us by phone, WhatsApp, email, or Facebook.",
      iconName: "BookOpen",
    },
  ],
  ctaText: "Contact us",
  ctaUrl: "/contact-us",
  rightCardBadge: "NexaMart",
  locationLabel: "Service area",
  destinationLabel: "Across Bangladesh",
};

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
