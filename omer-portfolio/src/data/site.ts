import { number } from "astro:schema";

export type SocialLink = {
  id: string;
  label: string; // ekranda görünen
  url: string;
};

export const site = {
  name: "Ömer Sait Coşkun",
  email: "omersaitcoskun@gmail.com", // TODO: gerçek mailinle değiştir
  number: "+90 507 217 12 02", // TODO: gerçek telefon numaranla değiştir
  location: "Türkiye", // opsiyonel

  url: "https://example.com", // TODO: kendi domainin veya GitHub Pages URL'n
  defaultDescription: {
    tr: "Engineering + BEIVA portföyü. Projeler, kitaplar, çizimler ve müzikler.",
    en: "Engineering + BEIVA portfolio. Projects, novels, art, and music.",
  },
  socialImage: "/og.png",

  socials: [
    { id: "github", label: "GitHub", url: "https://github.com/omerscoskun" },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/omer-sait-coskun-2066a9344/",
    },
    {
      id: "youtube",
      label: "YouTube",
      url: "https://www.youtube.com/@beiva.universe",
    },
    {
      id: "linktree",
      label: "Linktree",
      url: "https://linktr.ee/beiva",
    },
  ] satisfies SocialLink[],
};
