/*
|-----------------------------------------
| setting up defaults.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
|-----------------------------------------
*/

export type ImportPageVariant =
  | "all-home"
  | "all-about-us"
  | "all-contact-us"
  | "all-frequently-ask-questions";
export type ImportSidebarDefault = { name: string; url: string; icon: string; children?: ImportSidebarDefault[] };
export type ImportPageDefault = { title: string; path: string; description: string; variant: ImportPageVariant };

/** Public page paths created by the data importer and reused by site navigation defaults. */
export const importPageRoutes = {
  home: { label: "Home", path: "/" },
  about: { label: "About NexaMart", path: "/about-us" },
  contact: { label: "Contact us", path: "/contact-us" },
  faq: { label: "Frequently Asked Questions", path: "/frequently-ask-questions" },
  privacy: { label: "Privacy Policy", path: "/privacy-policy" },
  refund: { label: "Refund Policy", path: "/refund-policy" },
  security: { label: "Security", path: "/security" },
  cookiePolicy: { label: "Cookie Policy", path: "/cookie-policy" },
  teamMembers: { label: "Team Members", path: "/team-member" },
  terms: { label: "Terms and Conditions", path: "/terms-and-condition" },
} as const;

export const sidebarDefaults: ImportSidebarDefault[] = [
  {
    name: "Developer",
    url: "/dashboard/developer",
    icon: "Wrench",
    children: [
      { name: "Users", url: "/dashboard/developer/users", icon: "Users" },
      { name: "Account", url: "/dashboard/developer/account", icon: "CreditCard" },
      { name: "Session", url: "/dashboard/developer/session", icon: "Lock" },
      { name: "Verification", url: "/dashboard/developer/verification", icon: "ShieldCheck" },
      { name: "Sidebar", url: "/dashboard/developer/sidebar", icon: "Menu" },
      { name: "Navigation", url: "/dashboard/developer/navigation", icon: "Navigation" },
    ],
  },
  {
    name: "Admin",
    url: "/dashboard/admin",
    icon: "Settings",
    children: [
      { name: "Access", url: "/dashboard/admin/access", icon: "Lock" },
      { name: "Users", url: "/dashboard/admin/users", icon: "Users" },
      { name: "Role", url: "/dashboard/admin/role", icon: "ShieldCheck" },
      { name: "Footer", url: "/dashboard/admin/footer", icon: "FileText" },
      { name: "Menu", url: "/dashboard/admin/menu", icon: "Menu" },
      { name: "Pages", url: "/dashboard/admin/pages", icon: "FileText" },
      { name: "SEO Settings", url: "/dashboard/admin/seo", icon: "Search" },
      { name: "Top Banner", url: "/dashboard/admin/topbanner", icon: "FileBadge" },
      { name: "Build", url: "/dashboard/admin/build", icon: "BiSolidHourglassBottom" },
      { name: "Tracking", url: "/dashboard/admin/tracking", icon: "Activity" },
      { name: "WhatsApp", url: "/dashboard/admin/whatsapp", icon: "MessageCircle" },
    ],
  },
  {
    name: "Leads",
    url: "/dashboard/leads",
    icon: "Users",
    children: [
      { name: "Overview", url: "/dashboard/leads/overview", icon: "BarChart" },
      { name: "Funnels", url: "/dashboard/leads/funnels", icon: "Filter" },
      { name: "Customers", url: "/dashboard/leads/customers", icon: "Users" },
      { name: "Councilors", url: "/dashboard/leads/councilors", icon: "User" },
      { name: "My Leads", url: "/dashboard/leads/my-leads", icon: "FileText" },
    ],
  },
  { name: "Media", url: "/dashboard/media", icon: "Image" },
  { name: "Profile", url: "/dashboard/profile", icon: "User" },
  { name: "Tutorial", url: "/dashboard/tutorial", icon: "Video" },
  { name: "Category", url: "/dashboard/category", icon: "FolderKanban" },
  { name: "Coupons", url: "/dashboard/coupon", icon: "Tag" },
  { name: "Install", url: "/dashboard/install", icon: "Download" },
];
export const pageDefaults: ImportPageDefault[] = [
  {
    title: "NexaMart Home",
    path: importPageRoutes.home.path,
    description: "NexaMart (NxMart) is an online shopping platform serving customers across Bangladesh.",
    variant: "all-home",
  },
  {
    title: "About NexaMart",
    path: importPageRoutes.about.path,
    description: "Learn about NexaMart, an online shopping platform in Bangladesh.",
    variant: "all-about-us",
  },
  {
    title: "Contact us",
    path: importPageRoutes.contact.path,
    description: "Contact NexaMart by phone, WhatsApp, or email.",
    variant: "all-contact-us",
  },
  {
    title: "Frequently Asked Questions",
    path: importPageRoutes.faq.path,
    description: "Contact NexaMart with questions about online shopping.",
    variant: "all-frequently-ask-questions",
  },
];
