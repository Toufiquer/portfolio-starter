/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 30 August, 2026
|-----------------------------------------
*/

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

export const defaultDataPage8: IPage8Data = {
  pageUid: "page-uid-tema-member",
  pageName: "Team",
  eyebrow: "NexaMart",
  showEyebrow: true,
  title: "Meet the NexaMart team",
  description:
    "A learner-focused team providing online IELTS preparation, study-abroad guidance, and TPC Kids Spoken English support across Bangladesh.",
  founderLabel: "NexaMart Team",
  showFounderLabel: true,
  ceo: {
    id: "ceo",
    name: "NexaMart Team",
    title: "Online Service Team",
    bio: "Provides practical online services and guidance from anywhere in Bangladesh.",
    image: "",
  },
  rows: [],
};
