/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 16 August 2026
|-----------------------------------------
*/

import { importPageRoutes } from "@/lib/defaults/import-data";

export type TopBannerThreeData = {
  variant: "topbanner-3";
  isVisible: boolean;
  text: string;
  ctaLabel: string;
  ctaUrl: string;
  /** Omitted legacy values remain visible. */
  buttonVisible?: boolean;
  background: string;
  foreground: string;
  position: "fixed" | "sticky" | "hide";
  excludedPaths: string[];
};

export const defaultData: TopBannerThreeData = {
  variant: "topbanner-3",
  isVisible: true,
  text: "Shop online with NexaMart, serving customers across Bangladesh.",
  ctaLabel: "Contact us",
  ctaUrl: importPageRoutes.contact.path,
  buttonVisible: true,
  background: "#2563eb",
  foreground: "#fde047",
  position: "sticky",
  excludedPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
};
