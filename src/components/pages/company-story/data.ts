/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

import type { PageTemplateData, PageTemplateSection } from "../shared/page-types";

export interface CompanyStorySection extends PageTemplateSection {
  showEyebrow?: boolean;
}

export interface ICompanyStoryData extends Omit<PageTemplateData, "sections"> {
  /** Missing flags remain visible so older saved pages stay backward compatible. */
  showEyebrow?: boolean;
  sections: CompanyStorySection[];
}

export interface CompanyStoryPayload extends ICompanyStoryData {
  paddingX: number;
  paddingY: number;
}

export type CompanyStoryProps = { data?: ICompanyStoryData | CompanyStoryPayload | string };

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataCompanyStory: ICompanyStoryData = {
  pageUid: "company-story-uid",
  pageName: "About NexaMart",
  eyebrow: "About NexaMart",
  showEyebrow: true,
  title: "NexaMart online shopping across Bangladesh.",
  subtitle:
    "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
  primaryAction: "Shop online",
  secondaryAction: "Contact NexaMart",
  sections: [
    {
      eyebrow: "Story",
      showEyebrow: true,
      title: "Who we are",
      description:
        "NexaMart provides online shopping for customers across Bangladesh.",
      items: ["Online shopping", "Service across Bangladesh", "NexaMart contact channels"],
    },
    {
      eyebrow: "Mission",
      showEyebrow: true,
      title: "Online shopping across Bangladesh",
      description: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
      items: ["Shop online with NexaMart", "Contact NexaMart by phone or WhatsApp", "Connect through Facebook"],
    },
    {
      eyebrow: "Values",
      showEyebrow: true,
      title: "NexaMart",
      description: "Shop online with NexaMart.",
      items: ["Online shopping", "Across Bangladesh", "Contact NexaMart"],
    },
    {
      eyebrow: "Experience",
      showEyebrow: true,
      title: "Online shopping with NexaMart",
      description: "NexaMart is an online shopping platform serving customers across Bangladesh.",
      items: ["Online shopping", "Across Bangladesh", "Contact by phone, WhatsApp, email, or Facebook"],
    },
  ],
};
