/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 29 August, 2026
|-----------------------------------------
*/

export type AboutSection = {
  id: string;
  eyebrow: string;
  showEyebrow: boolean;
  title: string;
  description: string;
};

export const defaultSections: AboutSection[] = [
  {
    id: "purpose",
    eyebrow: "Our purpose",
    showEyebrow: true,
    title: "Learning opportunities should be accessible from anywhere.",
    description:
      "NexaMart helps learners across Bangladesh prepare for IELTS, explore study-abroad options, and build confident spoken English skills online.",
  },
  {
    id: "learning",
    eyebrow: "How we support learners",
    showEyebrow: true,
    title: "Clear guidance for every next step.",
    description:
      "Our online support combines focused learning, practical resources, and friendly guidance so students and families can move forward with confidence.",
  },
  {
    id: "programs",
    eyebrow: "Our programs",
    showEyebrow: true,
    title: "Skills and guidance for ambitious futures.",
    description:
      "From IELTS preparation and study-abroad planning to kids' spoken English, TPC creates useful learning paths for different goals and ages.",
  },
  {
    id: "promise",
    eyebrow: "Our promise",
    showEyebrow: true,
    title: "Helpful, honest, and learner-focused support.",
    description:
      "We make information easier to understand, communicate clearly online, and help each learner choose a practical next step.",
  },
];

export const defaultAboutSection: Omit<AboutSection, "id"> = {
  eyebrow: "New section",
  showEyebrow: true,
  title: "New section",
  description: "Add a short description of how NexaMart supports learners.",
};

export const defaultData = {
  eyebrow: "About NexaMart",
  showEyebrow: "true",
  title: "Online learning and guidance for Bangladesh's future learners.",
  intro:
    "NexaMart (TPC) is an online business platform offering IELTS preparation, study-abroad guidance, and TPC Kids Spoken English across Bangladesh.",
  image: "/images/all-pages-placeholder.png",
  sectionsJson: JSON.stringify(defaultSections),
  paddingX: "0",
  paddingY: "0",
};
