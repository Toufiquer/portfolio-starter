/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface CookiePolicySection {
  title: string;
  description?: string;
  items?: string[];
}

export interface ICookiePolicyData {
  pageUid: string;
  pageName: string;
  title: string;
  lastUpdatedLabel: string;
  sections: CookiePolicySection[];
  contactTitle: string;
  contactDescription: string;
  supportEmail: string;
  supportPhone: string;
}

export interface CookiePolicyPayload extends ICookiePolicyData {
  paddingX: number;
  paddingY: number;
}

export interface CookiePolicyProps {
  data?: ICookiePolicyData | CookiePolicyPayload | string;
}

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataCookiePolicy: ICookiePolicyData = {
  pageUid: "cookie-policy-uid",
  pageName: "Cookie Policy",
  title: "Cookie Policy",
  lastUpdatedLabel: "",
  sections: [],
  contactTitle: "Cookie information",
  contactDescription: "Cookie details have not been provided. Contact NexaMart at example@gmail.com or 01711111111.",
  supportEmail: "example@gmail.com",
  supportPhone: "01711111111",
};

export const defaultCookiePolicySection: CookiePolicySection = {
  title: "New Cookie Policy Section",
  description: "Write the cookie policy details for this section.",
  items: [],
};
