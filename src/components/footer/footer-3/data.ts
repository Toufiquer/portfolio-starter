/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 16 August 2026
|-----------------------------------------
*/

import { importPageRoutes } from "@/lib/defaults/import-data";

export type FooterThreeLink = { id: string; label: string; url: string; visible: boolean };
export type FooterThreeData = {
  variant: "footer-3";
  isVisible: boolean;
  forceUpdate: boolean;
  background: string;
  foreground: string;
  accent: string;
  logoUrl: string;
  logoAlt: string;
  showLogo: boolean;
  brand: string;
  description: string;
  disabledPaths: string[];
  destinations: FooterThreeLink[];
  services: FooterThreeLink[];
  phone: string;
  email: string;
  whatsappNumber: string;
  facebookUrl: string;
  facebookGroupUrl: string;
  copyright: string;
  legalLinks: FooterThreeLink[];
  showLegalBar: boolean;
  legalBackground: string;
};

export const defaultData: FooterThreeData = {
  variant: "footer-3",
  isVisible: true,
  forceUpdate: true,
  background: "#ffffff",
  foreground: "#1c1917",
  accent: "#dc2626",
  logoUrl: "/Logo.png",
  logoAlt: "NexaMart logo",
  showLogo: true,
  brand: "NexaMart",
  description: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
  disabledPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
  destinations: [{ id: "shop", label: "Browse shopping", url: importPageRoutes.home.path, visible: true }],
  services: [
    { id: "about", label: "About NxMart", url: importPageRoutes.about.path, visible: true },
    { id: "contact", label: "Contact", url: importPageRoutes.contact.path, visible: true },
  ],
  phone: "01711111111",
  email: "example@gmail.com",
  whatsappNumber: "01711111111",
  facebookUrl: "https://www.facebook.com/example",
  facebookGroupUrl: "https://www.facebook.com/groups/example",
  copyright: `All Rights Reserved © ${new Date().getFullYear()} - NexaMart`,
  legalLinks: [],
  showLegalBar: true,
  legalBackground: "#000000",
};
