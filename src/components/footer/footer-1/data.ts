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
  email: string;
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
  description: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
  logoUrl: "/Logo.png",
  logoAlt: "NexaMart logo",
  showLogo: true,
  showContact: true,
  disabledPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
  phone: "01711111111",
  email: "example@gmail.com",
  whatsappNumber: "01711111111",
  facebookUrl: "https://www.facebook.com/example",
  facebookGroupUrl: "https://www.facebook.com/groups/example",
  copyright: `All Rights Reserved © ${new Date().getFullYear()} - NexaMart`,
  showLegalBar: true,
  legalBackground: "#fffaf0",
  legalLinks: [],
  columns: [
    {
      title: "Explore",
      links: [
        { id: "home", label: "Home", url: importPageRoutes.home.path, visible: true },
        { id: "about", label: "About NxMart", url: importPageRoutes.about.path, visible: true },
        { id: "contact", label: "Contact", url: importPageRoutes.contact.path, visible: true },
      ],
    },
    {
      title: "Shop",
      links: [{ id: "shop", label: "Browse shopping", url: importPageRoutes.home.path, visible: true }],
    },
  ],
};
