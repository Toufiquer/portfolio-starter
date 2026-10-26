/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2026
|-----------------------------------------
*/

export interface IEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  description: string;
  actionText: string;
}
export interface Section13Data {
  id: string;
  sectionUid: string;
  paddingX: number;
  paddingY: number;
  title: string;
  badge: string;
  showEyebrow: boolean;
  subTitle: string;
  description: string;
  categories: string[];
  events: IEvent[];
}
export interface Section13Props {
  data?: Section13Data | string;
}
export const defaultEvent: Omit<IEvent, "id" | "category"> = {
  title: "New session",
  date: "",
  location: "Online",
  image: "",
  description: "Add confirmed details.",
  actionText: "Contact NexaMart",
};
export const defaultDataSection13: Section13Data = {
  sectionUid: "section-uid-13",
  id: "section-uid-13",
  paddingX: 0,
  paddingY: 0,
  title: "Online",
  badge: "NexaMart",
  showEyebrow: true,
  subTitle: "Sessions",
  description: "Online shopping for customers across Bangladesh.",
  categories: [],
  events: [],
};
