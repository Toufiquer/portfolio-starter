/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2026
|-----------------------------------------
*/

export interface IFeatureItem {
  title: string;
  subtitle: string;
  iconName: string;
  iconColorClass: string;
  bgColorClass: string;
}

export interface IStatItem {
  value: string;
  label: string;
  colorClass: string;
}

export interface ISection24Data {
  sectionUid: string;
  features: IFeatureItem[];
  stats: IStatItem[];
  ctaText: string;
  ctaLink: string;
}

export interface Section24Props {
  data?: ISection24Data | Section24Payload | string;
}

export const defaultDataSection24: ISection24Data = {
  sectionUid: "section-uid-24",
  features: [
    {
      title: "Focused IELTS Practice",
      subtitle: "Build confidence across the four skills",
      iconName: "FileText",
      iconColorClass: "text-red-500",
      bgColorClass: "bg-red-100",
    },
    {
      title: "Clear Study Plan",
      subtitle: "Organise practical next steps",
      iconName: "Clock",
      iconColorClass: "text-orange-500",
      bgColorClass: "bg-orange-100",
    },
    {
      title: "Useful Resources",
      subtitle: "Use materials that support your preparation",
      iconName: "Target",
      iconColorClass: "text-green-500",
      bgColorClass: "bg-green-100",
    },
  ],
  stats: [
    { value: "Online", label: "Practice support", colorClass: "text-red-500" },
    { value: "Four", label: "IELTS skills", colorClass: "text-orange-500" },
    { value: "Clear", label: "Next steps", colorClass: "text-green-500" },
  ],
  ctaText: "EXPLORE IELTS PREPARATION",
  ctaLink: "/ielts-preparation",
};

export const defaultData = defaultDataSection24;

export interface Section24Payload extends ISection24Data {
  paddingX: number;
  paddingY: number;
}

export const defaultLayout = { paddingX: 0, paddingY: 0 };
