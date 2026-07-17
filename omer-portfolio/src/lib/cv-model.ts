import type { Lang } from "../i18n/utils";
import {
  cvProfile,
  education,
  experiences,
  languages,
  personalProject,
  skillGroups,
  formatMonthRange,
  formatPeriod,
} from "../data/cv";
import { projects } from "../data/projects";

export type CvEntry = {
  heading: string;
  meta?: string;
  body?: string;
  bullets: string[];
  tech?: string;
  url?: string;
};

export type CvSection = {
  heading: string;
  entries?: CvEntry[];
  lines?: string[];
};

export type CvModel = {
  name: string;
  title: string;
  contact: string[];
  summaryHeading: string;
  summary: string;
  sections: CvSection[];
  preparedFor?: string;
  fileBaseName: string;
};

export type Requester = {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
};

const labels = {
  tr: {
    summary: "Özet",
    experience: "İş Deneyimi",
    education: "Eğitim",
    skills: "Yetenekler",
    projects: "Projeler",
    languages: "Diller",
    tech: "Teknolojiler:",
    gpa: "Not ortalaması:",
    preparedFor: (who: string) => `${who} için hazırlanmıştır`,
  },
  en: {
    summary: "Summary",
    experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    languages: "Languages",
    tech: "Technologies:",
    gpa: "GPA:",
    preparedFor: (who: string) => `Prepared for ${who}`,
  },
} as const;

export function buildCvModel(lang: Lang, requester: Requester = {}): CvModel {
  const L = labels[lang];

  const contact = [
    cvProfile.email,
    cvProfile.location,
    ...cvProfile.links.map((l) => l.url),
  ];

  const experienceEntries: CvEntry[] = experiences.map((exp) => ({
    heading: exp.organization[lang],
    meta: `${exp.role[lang]} • ${formatPeriod(exp, lang)} • ${exp.location[lang]}`,
    bullets: exp.bullets.map((b) => b[lang]),
    tech: exp.tech.length ? `${L.tech} ${exp.tech.join(", ")}` : undefined,
    url: exp.url,
  }));

  const educationEntries: CvEntry[] = education.map((ed) => {
    const meta = [
      ed.program[lang],
      formatMonthRange(ed, lang),
      ed.location[lang],
    ];
    const bullets: string[] = [];
    if (ed.note) bullets.push(ed.note[lang]);
    if (ed.gpa) bullets.push(`${L.gpa} ${ed.gpa}`);
    return { heading: ed.school[lang], meta: meta.join(" • "), bullets };
  });

  const skillLines = skillGroups.map((group) => {
    const items = group.items.map((item) => {
      const names = item.names.join(", ");
      return item.note ? `${names} (${item.note[lang]})` : names;
    });
    return `${group.title[lang]}: ${items.join(" • ")}`;
  });

  const ordered = [...projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured),
  );

  const projectEntries: CvEntry[] = ordered.map((p) => ({
    heading: p.title[lang],
    body: p.summary[lang],
    bullets: [],
    tech: p.tech?.length ? `${L.tech} ${p.tech.join(", ")}` : undefined,
    url: p.links?.github ?? p.links?.demo ?? p.links?.video,
  }));

  projectEntries.push({
    heading: personalProject.title[lang],
    body: personalProject.summary[lang],
    bullets: [],
    url: personalProject.url,
  });

  const sections: CvSection[] = [
    { heading: L.experience, entries: experienceEntries },
    { heading: L.education, entries: educationEntries },
    { heading: L.skills, lines: skillLines },
    { heading: L.projects, entries: projectEntries },
    {
      heading: L.languages,
      lines: languages.map((l) => `${l.name[lang]}: ${l.level[lang]}`),
    },
  ];

  const who = requester.company?.trim() || requester.name?.trim();

  return {
    name: cvProfile.name,
    title: cvProfile.title[lang],
    contact,
    summaryHeading: L.summary,
    summary: cvProfile.summary[lang],
    sections,
    preparedFor: who ? L.preparedFor(who) : undefined,
    fileBaseName: buildFileName(cvProfile.name, lang),
  };
}

function buildFileName(name: string, lang: Lang): string {
  const ascii = name
    .replace(/ı/g, "i")
    .replace(/İ/g, "I")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "S")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "G")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "C")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "O")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "U")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${ascii}-${lang === "tr" ? "CV" : "Resume"}`;
}
