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
  email: string;
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
  tagline: "Online shopping across Bangladesh.",
  description: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
  logoUrl: "/Logo.png",
  logoAlt: "NexaMart logo",
  showLogo: true,
  phone: "01711111111",
  email: "example@gmail.com",
  whatsappNumber: "01711111111",
  facebookUrl: "https://www.facebook.com/example",
  facebookGroupUrl: "https://www.facebook.com/groups/example",
  disabledPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
  columns: [
    {
      title: "Shop",
      links: [{ id: "shop", label: "Browse shopping", url: importPageRoutes.home.path, visible: true }],
    },
    {
      title: "Explore",
      links: [
        { id: "home", label: "Home", url: importPageRoutes.home.path, visible: true },
        { id: "about", label: "About NxMart", url: importPageRoutes.about.path, visible: true },
        { id: "faq", label: "Frequently Asked Questions", url: importPageRoutes.faq.path, visible: true },
      ],
    },
  ],
  links: [
    { id: "contact", label: "Contact", url: importPageRoutes.contact.path, visible: true },
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/example", visible: true },
  ],
  copyright: `© ${new Date().getFullYear()} NexaMart. All rights reserved.`,
  showLegalBar: true,
  legalBackground: "#f8fafc",
  legalLinks: [],
};
