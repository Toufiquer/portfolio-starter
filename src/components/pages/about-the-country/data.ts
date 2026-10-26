/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

import type { PageTemplateData } from "../shared/page-types";

export type IAboutTheCountryData = PageTemplateData;

export interface AboutTheCountryPayload extends IAboutTheCountryData {
  paddingX: number;
  paddingY: number;
}

export type AboutTheCountryProps = { data?: IAboutTheCountryData | AboutTheCountryPayload | string };

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataAboutTheCountry: IAboutTheCountryData = {
  pageUid: "about-the-country-uid",
  pageName: "NexaMart",
  eyebrow: "Online shopping",
  title: "NexaMart serves customers across Bangladesh.",
  subtitle: "NexaMart (NxMart) is an online shopping platform.",
  primaryAction: "Contact NexaMart",
  secondaryAction: "Shop online",
  sections: [],
};
