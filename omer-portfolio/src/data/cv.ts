import type { Lang } from "../i18n/utils";
import { site } from "./site";

export type Localized = { tr: string; en: string };

export type Education = {
  id: string;
  school: Localized;
  program: Localized;
  note?: Localized;
  location: Localized;
  start: string;
  end: string | null;
  gpa?: string;
};

export type LanguageSkill = {
  id: string;
  name: Localized;
  level: Localized;
};

export const cvProfile = {
  name: site.name,
  title: {
    tr: "Bilgisayar Mühendisi",
    en: "Computer Engineer",
  } satisfies Localized,
  email: site.email,
  location: site.location,
  links: site.socials.filter((s) => s.id === "github" || s.id === "linkedin"),
  summary: {
    tr: "Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği mezunu. .NET/ASP.NET Core ile REST API ve katmanlı mimari üzerine yoğunlaşıyor; React Native, React ve Python tabanlı makine öğrenmesi katmanlarıyla uçtan uca çalışan ürünler geliştiriyor. Temiz mimari, SOLID ve sürdürülebilir kod pratiklerini önemsiyor.",
    en: "Computer Engineering graduate of Süleyman Demirel University. Focused on REST APIs and layered architecture with .NET/ASP.NET Core; builds end-to-end products spanning React Native, React and Python-based machine learning layers. Committed to clean architecture, SOLID and sustainable code practices.",
  } satisfies Localized,
};

export const education: Education[] = [
  {
    id: "sdu",
    school: {
      tr: "Süleyman Demirel Üniversitesi",
      en: "Süleyman Demirel University",
    },
    program: { tr: "Bilgisayar Mühendisliği", en: "Computer Engineering" },
    note: {
      tr: "İngilizce Hazırlık dahil",
      en: "Including English preparatory year",
    },
    location: { tr: "Isparta", en: "Isparta, Türkiye" },
    start: "2021-09-01",
    end: "2026-06-30",
    gpa: "3.07 / 4.00",
  },
];

export const languages: LanguageSkill[] = [
  {
    id: "tr",
    name: { tr: "Türkçe", en: "Turkish" },
    level: { tr: "Ana dil", en: "Native" },
  },
  {
    id: "en",
    name: { tr: "İngilizce", en: "English" },
    level: {
      tr: "C1 (British Culture Dil Okulu)",
      en: "C1 (British Culture Language School)",
    },
  },
];

export type SkillItem = {
  names: string[];
  note?: Localized;
};

export type SkillGroup = {
  id: string;
  title: Localized;
  items: SkillItem[];
};

export type Experience = {
  id: string;
  organization: Localized;
  role: Localized;
  location: Localized;
  start: string;
  end: string | null;
  bullets: Localized[];
  tech: string[];
  url?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: { tr: "Diller", en: "Languages" },
    items: [
      {
        names: ["C#"],
        note: { tr: "backend / uygulamalar", en: "backend / apps" },
      },
      { names: ["TypeScript / JavaScript"] },
      {
        names: ["Python"],
        note: { tr: "ML / veri işleme", en: "ML / data processing" },
      },
      { names: ["Kotlin"], note: { tr: "Android", en: "Android" } },
      { names: ["SQL"] },
    ],
  },
  {
    id: "frameworks",
    title: { tr: "Framework & Platform", en: "Frameworks & Platforms" },
    items: [
      {
        names: [".NET / ASP.NET Core"],
        note: {
          tr: "REST API, katmanlı mimari",
          en: "REST API, layered architecture",
        },
      },
      { names: ["Entity Framework Core", "Dapper"] },
      { names: ["React", "Angular", "Astro"] },
      { names: ["React Native & Expo"], note: { tr: "mobil", en: "mobile" } },
      { names: ["Node.js"] },
      { names: ["Android (Jetpack Compose)"] },
    ],
  },
  {
    id: "tools",
    title: { tr: "Araçlar & DevOps", en: "Tools & DevOps" },
    items: [
      { names: ["Git & GitHub"] },
      { names: ["Docker"] },
      { names: ["Jenkins & CI/CD"] },
      { names: ["Swagger", "Postman"] },
      { names: ["VS Code"] },
    ],
  },
  {
    id: "architecture",
    title: { tr: "Mimari & Pratikler", en: "Architecture & Practices" },
    items: [
      { names: ["RESTful API", "JSON"] },
      {
        names: ["Temiz & Katmanlı Mimari"],
        note: {
          tr: "Domain / Application / Infrastructure",
          en: "Domain / Application / Infrastructure",
        },
      },
      { names: ["OOP", "SOLID", "DRY", "KISS"] },
      {
        names: ["Responsive tasarım"],
        note: {
          tr: "dokümantasyon, sürdürülebilir kod",
          en: "documentation, sustainable code",
        },
      },
    ],
  },
  {
    id: "data",
    title: { tr: "Veri & Mesajlaşma", en: "Data & Messaging" },
    items: [
      { names: ["PostgreSQL / PostGIS", "MySQL", "MongoDB"] },
      { names: ["Redis"], note: { tr: "önbellekleme", en: "caching" } },
      { names: ["RabbitMQ", "Kafka"] },
      {
        names: ["ORM + SQL"],
        note: {
          tr: "EF Core / Dapper ile birlikte",
          en: "EF Core / Dapper together",
        },
      },
    ],
  },
  {
    id: "ai",
    title: { tr: "AI / Makine Öğrenmesi", en: "AI / Machine Learning" },
    items: [
      { names: ["Scikit-learn", "XGBoost", "LightGBM"] },
      {
        names: ["GeoPandas", "Shapely", "QGIS"],
        note: { tr: "coğrafi veri işleme", en: "geospatial data" },
      },
      {
        names: ["Python"],
        note: { tr: "veri işleme / analiz", en: "data processing / analysis" },
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "mapeg",
    organization: {
      tr: "Maden ve Petrol İşleri Genel Müdürlüğü (MAPEG)",
      en: "General Directorate of Mining and Petroleum Affairs (MAPEG)",
    },
    role: {
      tr: "Stajyer / Bilgi İşlem Departmanı",
      en: "Intern / IT Department",
    },
    location: { tr: "Ankara / Çankaya", en: "Ankara / Çankaya" },
    start: "2026-07-13",
    end: null,
    bullets: [],
    tech: [],
    url: "https://www.mapeg.gov.tr/",
  },
  {
    id: "kmo",
    organization: {
      tr: "Kuzey Marmara Otoyolu İşletme A.Ş.",
      en: "Kuzey Marmara Otoyolu İşletme A.Ş.",
    },
    role: { tr: "Stajyer / IT Departmanı", en: "Intern / IT Department" },
    location: { tr: "İstanbul / Sarıyer", en: "Istanbul / Sarıyer" },
    start: "2025-08-04",
    end: "2025-08-29",
    bullets: [
      {
        tr: "SOLID yapısını öğrenme ve uygulama.",
        en: "Learned and applied SOLID principles.",
      },
      {
        tr: "Şirket içi işlenişi öğrenme.",
        en: "Observed internal company processes.",
      },
      {
        tr: "Backend temelleri üzerine çalışmalar.",
        en: "Worked on backend fundamentals.",
      },
      {
        tr: "İstenilen projeyi geliştirme: 4kEditorUygulaması / EditorDesk.",
        en: "Built the requested project: 4kEditorUygulaması / EditorDesk.",
      },
    ],
    tech: [".NET Core", "ASP.NET", "C#", "Docker", "PostgreSQL", "Postman"],
    url: "https://www.kuzeymarmaraotoyolu.com/",
  },
];

type DateRange = { start: string; end: string | null };

export const personalProject = {
  title: {
    tr: "BEIVA (Kişisel Proje)",
    en: "BEIVA (Personal Project)",
  } satisfies Localized,
  summary: {
    tr: "Sıfırdan kurup yürüttüğüm bilimkurgu evreni ve içerik projesi; yazarlık, görsel/işitsel üretim ve yayın süreçlerini kapsıyor. Uzun soluklu bir işi planlama, parçalara bölme ve düzenli olarak yayına çıkarma pratiği kazandırdı.",
    en: "A science-fiction universe and content project I founded and run end to end, covering writing, audiovisual production and publishing. It has built my practice of planning long-running work, breaking it down and shipping on a regular cadence.",
  } satisfies Localized,
  url: "https://linktr.ee/beiva",
};

export function formatPeriod(range: DateRange, lang: Lang): string {
  return formatRange(range, lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatMonthRange(range: DateRange, lang: Lang): string {
  return formatRange(range, lang, { month: "long", year: "numeric" });
}

function formatRange(
  range: DateRange,
  lang: Lang,
  opts: Intl.DateTimeFormatOptions,
): string {
  const locale = lang === "tr" ? "tr-TR" : "en-US";
  const fmt = (iso: string) =>
    new Intl.DateTimeFormat(locale, opts).format(new Date(iso));

  const end = range.end
    ? fmt(range.end)
    : lang === "tr"
      ? "Devam ediyor"
      : "Present";
  return `${fmt(range.start)} – ${end}`;
}
