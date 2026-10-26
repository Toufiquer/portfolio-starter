/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
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
  members: TeamMember[];
}

export interface ILeadershipTeamData {
  pageUid: string;
  pageName: string;
  eyebrow: string;
  title: string;
  description: string;
  founderLabel: string;
  ceo: TeamMember;
  rows: TeamRow[];
}

export interface LeadershipTeamPayload extends ILeadershipTeamData {
  paddingX: number;
  paddingY: number;
}

export interface LeadershipTeamProps {
  data?: ILeadershipTeamData | LeadershipTeamPayload | string;
}

export const defaultLeadershipTeamMember: Omit<TeamMember, "id"> = {
  name: "New Team Member",
  title: "Role / Position",
  bio: "Write a short introduction for this team member.",
  image: "",
};
export const defaultLeadershipTeamRow: Omit<TeamRow, "id" | "members"> = { label: "New Team Group" };

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataLeadershipTeam: ILeadershipTeamData = {
  pageUid: "leadership-team-uid",
  pageName: "Team",
  eyebrow: "NexaMart",
  title: "Meet the NexaMart team",
  description:
    "A learner-focused team providing online IELTS preparation, study-abroad guidance, and TPC Kids Spoken English support across Bangladesh.",
  founderLabel: "NexaMart Team",
  ceo: {
    id: "ceo",
    name: "NexaMart Team",
    title: "Online Service Team",
    bio: "Provides practical online services and guidance from anywhere in Bangladesh.",
    image: "",
  },
  rows: [],
};
