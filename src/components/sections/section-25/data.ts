/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2026
|-----------------------------------------
*/

export interface IFeatureCard {
  title: string;
  description: string;
  iconName: string;
  gradient: string;
}

export interface Section25Data {
  id: string;
  cards: IFeatureCard[];
}

export interface Section25Props {
  data?: Section25Data | Section25Payload | string;
}

export const defaultDataSection25: Section25Data = {
  id: "section-uid-25",
  cards: [
    {
      title: "Online shopping",
      description: "NexaMart is an online shopping platform.",
      iconName: "FileText",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Across Bangladesh",
      description: "NexaMart serves customers across Bangladesh.",
      iconName: "Target",
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Contact NexaMart",
      description: "Reach us by phone, WhatsApp, email, or Facebook.",
      iconName: "BookOpen",
      gradient: "from-purple-500 to-purple-600",
    },
  ],
};

export interface Section25Payload extends Section25Data {
  paddingX: number;
  paddingY: number;
}

export const defaultLayout = { paddingX: 0, paddingY: 0 };
