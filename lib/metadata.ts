import { profile } from "@/content/profile";

export function absoluteUrl(path = "/") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? profile.siteUrl;
  return new URL(path, siteUrl).toString();
}
