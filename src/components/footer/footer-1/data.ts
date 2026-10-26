/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 14 August 2026
|-----------------------------------------
*/

import { importPageRoutes } from "@/lib/defaults/import-data";

export type FooterLink = { id: string; label: string; url: string; visible: boolean };
export type FooterOneData = {
  variant: "footer-1";
  isVisible: boolean;
  forceUpdate: boolean;
  background: string;
  foreground: string;
  accent: string;
  brand: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
  showLogo: boolean;
  showContact: boolean;
  disabledPaths: string[];
  columns: { title: string; links: FooterLink[] }[];
  phone: string;
  whatsappNumber: string;
  facebookUrl: string;
  facebookGroupUrl: string;
  copyright: string;
  showLegalBar: boolean;
  legalBackground: string;
  legalLinks: FooterLink[];
};

export const defaultData: FooterOneData = {
  variant: "footer-1",
  isVisible: true,
  forceUpdate: true,
  background: "#ffffff",
  foreground: "#292524",
  accent: "#111827",
  brand: "NexaMart",
  description:
    "Bangladesh's online learning platform for IELTS preparation, study-abroad guidance, and kids' spoken English.",
  logoUrl: "/Logo.png",
  logoAlt: "NexaMart logo",
  showLogo: true,
  showContact: true,
  disabledPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
  phone: "01711111111",
  whatsappNumber: "01711111111",
  facebookUrl: "https://www.facebook.com/example/",
  facebookGroupUrl: "https://www.facebook.com/groups/example",
  copyright: `All Rights Reserved © ${new Date().getFullYear()} - NexaMart`,
  showLegalBar: true,
  legalBackground: "#fffaf0",
  legalLinks: [
    { id: "privacy", label: "Privacy Policy", url: importPageRoutes.privacy.path, visible: true },
    { id: "terms", label: "Terms & Conditions", url: importPageRoutes.terms.path, visible: true },
    { id: "refund", label: "Refund Policy", url: importPageRoutes.refund.path, visible: true },
    { id: "faq", label: "Frequently Asked Questions", url: importPageRoutes.faq.path, visible: true },
  ],
  columns: [
    {
      title: "Explore",
      links: [
        { id: "home", label: "Home", url: importPageRoutes.home.path, visible: true },
        { id: "about", label: "About NexaMart", url: importPageRoutes.about.path, visible: true },
        { id: "contact", label: "Contact", url: importPageRoutes.contact.path, visible: true },
      ],
    },
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
  ],
};
