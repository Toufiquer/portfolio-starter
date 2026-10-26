/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 26 October, 2026
|-----------------------------------------
*/

import type { HomeData } from "../home/data";
import { neutralizeTemplateData } from "../shared/neutralize-template-data";

const ieltsPreparationSeed: HomeData = {
  forceUpdate: "false",
  paddingX: 0,
  paddingY: 0,
  eyebrow: "NexaMart",
  title: "Online shopping across Bangladesh.",
  intro: "NexaMart is an online shopping platform serving customers across Bangladesh.",
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "NexaMart online shopping",
  sectionsJson: "[]",
};

const kidsSpokenEnglishSeed: HomeData = {
  forceUpdate: "false",
  paddingX: 0,
  paddingY: 0,
  eyebrow: "NexaMart",
  title: "Online shopping across Bangladesh.",
  intro: "NexaMart is an online shopping platform serving customers across Bangladesh.",
  imageUrl: "/images/all-pages-placeholder.png",
  imageAlt: "NexaMart online shopping",
  sectionsJson: "[]",
};

export const defaultIeltsPreparationData = neutralizeTemplateData(ieltsPreparationSeed);
export const defaultKidsSpokenEnglishData = neutralizeTemplateData(kidsSpokenEnglishSeed);
