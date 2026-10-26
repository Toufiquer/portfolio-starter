/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 30 August, 2026
|-----------------------------------------
*/

import { neutralizeTemplateData } from "../shared/neutralize-template-data";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface TeamRow {
  id: string;
  label: string;
  showEyebrow?: boolean;
  members: TeamMember[];
}

export interface IPage8Data {
  pageUid: string;
  pageName: string;
  eyebrow: string;
  showEyebrow?: boolean;
  title: string;
  description: string;
  founderLabel: string;
  showFounderLabel?: boolean;
  ceo: TeamMember;
  rows: TeamRow[];
}

export interface Page8Payload extends IPage8Data {
  paddingX: number;
  paddingY: number;
}

export interface Page8Props {
  data?: IPage8Data | Page8Payload | string;
}

export const defaultTeamMember: Omit<TeamMember, "id"> = {
  name: "New Team Member",
  title: "Role / Position",
  bio: "Write a short introduction for this team member.",
  image: "",
};
export const defaultTeamRow: Omit<TeamRow, "id" | "members"> = { label: "New Team Group" };

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

const defaultDataPage8Seed: IPage8Data = {
  pageUid: "page-uid-tema-member",
  pageName: "Team",
  eyebrow: "NexaMart",
  showEyebrow: true,
  title: "NexaMart",
  description: "Team information has not been provided.",
  founderLabel: "",
  showFounderLabel: true,
  ceo: {
    id: "ceo",
    name: "",
    title: "",
    bio: "",
    image: "",
  },
  rows: [],
};


export const defaultDataPage8 = neutralizeTemplateData(defaultDataPage8Seed);
