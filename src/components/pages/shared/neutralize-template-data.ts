/*
|-----------------------------------------
| setting up neutralize-template-data.ts for the App
|-----------------------------------------
*/

const companyDescription = "NexaMart is an online shopping platform serving customers across Bangladesh.";

/** Keep unrelated page editors usable without exposing their previous industry demo content by default. */
export function neutralizeTemplateData<T>(value: T, key = ""): T {
  const neutralize = (current: unknown, currentKey: string): unknown => {
    if (Array.isArray(current)) return [];

    if (current && typeof current === "object") {
      return Object.fromEntries(
        Object.entries(current).map(([childKey, childValue]) => [childKey, neutralize(childValue, childKey)]),
      );
    }

    if (typeof current !== "string") return current;
    if (currentKey === "sectionsJson") return "[]";
    if (/^(id|pageUid|type|variant|region|alignment|position|layout|fontFamily|radius|border|color|textColor|background|foreground|accent|forceUpdate)$/i.test(currentKey))
      return current;
    if (/^(image|imageUrl|imageAlt|logoUrl|href|url|link|flagImage)$/i.test(currentKey))
      return /alt/i.test(currentKey) ? "NexaMart online shopping" : "";
    if (/^(pageName|companyName|brand)$/i.test(currentKey)) return "NexaMart";
    if (/^(companyEmail|supportEmail|email)$/i.test(currentKey)) return "example@gmail.com";
    if (/^(companyContact|phone|contactNumber|whatsappNumber)$/i.test(currentKey)) return "01711111111";
    if (/button|action|cta/i.test(currentKey)) return "Contact NexaMart";
    if (/^(title|heading|headline|label|name|eyebrow|badgeText)$/i.test(currentKey))
      return "Online shopping with NexaMart";
    if (/description|subtitle|intro|text|message|placeholder|emptyMessage|summary|overview|content|paragraph/i.test(currentKey))
      return companyDescription;
    return "";
  };

  return neutralize(value, key) as T;
}
