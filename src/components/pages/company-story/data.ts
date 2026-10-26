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
      eyebrow: "About NexaMart",
      showEyebrow: true,
      title: "Who we are",
      description: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
      items: ["Online shopping", "Across Bangladesh", "Contact NexaMart"],
    },
    {
      eyebrow: "Online shopping",
      showEyebrow: true,
      title: "Shop online with NexaMart",
      description: "NexaMart is an online shopping platform serving customers across Bangladesh.",
      items: ["Online shopping", "Service area: Across Bangladesh"],
    },
    {
      eyebrow: "Contact",
      showEyebrow: true,
      title: "Questions about NexaMart?",
      description: "Contact NexaMart by phone, WhatsApp, email, or Facebook.",
      items: ["01711111111", "example@gmail.com", "Facebook page and group"],
    },
  ],
};
