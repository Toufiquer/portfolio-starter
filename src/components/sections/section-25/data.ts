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
      title: "Focused Practice",
      description: "Build a practical study routine around the IELTS skills you want to strengthen.",
      iconName: "FileText",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Clear Next Steps",
      description: "Use your practice to identify priorities and plan the next stage of preparation.",
      iconName: "Target",
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Useful Resources",
      description: "Ask about the learning resources and guidance available for your selected service.",
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
