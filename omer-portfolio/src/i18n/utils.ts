import { tr } from "./tr";
import { en } from "./en";

export type Lang = "tr" | "en";
const dict = { tr, en };

export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith("/tr") ? "tr" : "en";
}

export function t(lang: Lang) {
  return dict[lang];
}

export function switchLangPath(pathname: string): string {
  if (pathname.startsWith("/tr/")) return pathname.replace("/tr/", "/en/");
  if (pathname === "/tr") return "/en";
  if (pathname.startsWith("/en/")) return pathname.replace("/en/", "/tr/");
  if (pathname === "/en") return "/tr";
  return "/tr";
}
