/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2026
|-----------------------------------------
*/

export interface Section6Data {
  sectionUid: string;
  id: string;
  paddingX: number;
  paddingY: number;
  showEyebrow?: boolean;
  universityName: string;
  location: string;
  established: string;
  description: string;
  bannerImage: string;
  logoUrl: string;
  programs: string[];
  subjects: string[];
  tuitionFee: string;
  rating: string;
  totalStudents: string;
  accreditation: string;
  websiteUrl: string;
  applyText: string;
  buttonText: string;
  buttonUrl: string;
  features: string[];
}

export const defaultDataSection6: Section6Data = {
  sectionUid: "section-uid-6",
  id: "section-uid-6",
  paddingX: 0,
  paddingY: 0,
  showEyebrow: true,
  universityName: "Study Abroad Guidance with NexaMart",
  location: "Online support from Bangladesh",
  established: "Online service",
  description:
    "Explore suitable study options with NexaMart. Our online guidance helps students understand destinations, applications, documents, and their next practical step. Requirements vary, so confirm current information through official sources.",
  bannerImage: "https://i.ibb.co/PGXYXwTq/img.jpg",
  logoUrl: "https://i.ibb.co/PGXYXwTq/img.jpg",
  programs: ["Destination planning", "University applications", "Document preparation", "Visa guidance"],
  subjects: ["United Kingdom", "United States", "Canada", "Australia", "Other destinations"],
  tuitionFee: "Confirm fees directly with institutions",
  rating: "Online support",
  totalStudents: "Available across Bangladesh",
  accreditation: "Student-focused guidance",
  websiteUrl: "/contact-us",
  buttonText: "Talk to NexaMart",
  buttonUrl: "/contact-us",
  applyText: "Request study-abroad guidance",
  features: ["Online consultation", "Clear next steps", "Practical document guidance"],
};
