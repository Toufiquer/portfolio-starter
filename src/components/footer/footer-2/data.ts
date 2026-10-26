/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 26 October 2026
|-----------------------------------------
*/

import { importPageRoutes } from "@/lib/defaults/import-data";

export type FooterTwoData = {
  variant: "footer-2";
  isVisible: boolean;
  forceUpdate: boolean;
  background: string;
  foreground: string;
  accent: string;
  brand: string;
  tagline: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
  showLogo: boolean;
  phone: string;
  whatsappNumber: string;
  facebookUrl: string;
  facebookGroupUrl: string;
  disabledPaths: string[];
  columns: { title: string; links: { id: string; label: string; url: string; visible: boolean }[] }[];
  links: { id: string; label: string; url: string; visible: boolean }[];
  copyright: string;
  showLegalBar: boolean;
  legalBackground: string;
  legalLinks: { id: string; label: string; url: string; visible: boolean }[];
};

export const defaultData: FooterTwoData = {
  variant: "footer-2",
  isVisible: true,
  forceUpdate: true,
  background: "#ffffff",
  foreground: "#292524",
  accent: "#b45309",
  brand: "NexaMart",
  tagline: "Learn, prepare, and move forward from anywhere in Bangladesh.",
  description:
    "TPC provides online IELTS preparation, personalized study-abroad guidance, and kids' spoken English courses.",
  logoUrl: "/Logo.png",
  logoAlt: "NexaMart logo",
  showLogo: true,
  phone: "01711111111",
  whatsappNumber: "01711111111",
  facebookUrl: "https://www.facebook.com/example/",
  facebookGroupUrl: "https://www.facebook.com/groups/example",
  disabledPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
  columns: [
    {
      title: "Programs",
      links: [
        { id: "ielts", label: "IELTS Preparation", url: importPageRoutes.ielts.path, visible: true },
        {
          id: "kids-spoken",
          label: "TPC Kids Spoken English",
          url: importPageRoutes.kidsSpokenEnglish.path,
          visible: true,
        },
      ],
    },
    {
      title: "Explore",
      links: [
        { id: "home", label: "Home", url: importPageRoutes.home.path, visible: true },
        { id: "about", label: "About NexaMart", url: importPageRoutes.about.path, visible: true },
        { id: "faq", label: "Frequently Asked Questions", url: importPageRoutes.faq.path, visible: true },
      ],
    },
  ],
  links: [
    { id: "contact", label: "Contact", url: importPageRoutes.contact.path, visible: true },
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/example/", visible: true },
  ],
  copyright: `© ${new Date().getFullYear()} NexaMart. All rights reserved.`,
  showLegalBar: true,
  legalBackground: "#f8fafc",
  legalLinks: [
    { id: "refund", label: "Refund Policy", url: importPageRoutes.refund.path, visible: true },
    { id: "privacy", label: "Privacy Policy", url: importPageRoutes.privacy.path, visible: true },
    { id: "terms", label: "Terms & Conditions", url: importPageRoutes.terms.path, visible: true },
    { id: "security", label: "Security", url: importPageRoutes.security.path, visible: true },
    { id: "cookies", label: "Cookie Policy", url: importPageRoutes.cookiePolicy.path, visible: true },
  ],
};
