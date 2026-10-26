/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2026
|-----------------------------------------
*/

export interface IFeatureItem {
  title: string;
  description: string;
  iconName: string;
  gradient: string;
}

export interface Section28Data {
  id: string;
  title: string;
  subtitle: string;
  features: IFeatureItem[];
}

export interface Section28Payload extends Section28Data {
  paddingX: number;
  paddingY: number;
}

export interface Section28Props {
  data?: Section28Data | Section28Payload | string;
}

export const defaultDataSection28: Section28Data = {
  id: "section-uid-28",
  title: "NexaMart online shopping",
  subtitle: "Serving customers across Bangladesh",
  features: [
    {
      title: "Online shopping",
      description: "NexaMart is an online shopping platform.",
      iconName: "Users",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Across Bangladesh",
      description: "NexaMart serves customers across Bangladesh.",
      iconName: "Award",
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Contact NexaMart",
      description: "Reach NexaMart by phone, WhatsApp, email, or Facebook.",
      iconName: "BookOpen",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Online platform",
      description: "Shop online with NexaMart.",
      iconName: "Star",
      gradient: "from-red-500 to-red-600",
    },
  ],
};

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};
