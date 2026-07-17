import type { Lang } from "../i18n/utils";

export type Localized = { tr: string; en: string };

export type SkillItem = {
  names: string[]; // vurgulanan teknoloji adları
  note?: Localized; // parantez içinde gösterilen açıklama
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
  start: string; // ISO tarih
  end: string | null; // null = devam ediyor
  bullets: Localized[];
  tech: string[];
  url?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: { tr: "Diller", en: "Languages" },
    items: [
      { names: ["C#"], note: { tr: "backend / uygulamalar", en: "backend / apps" } },
      { names: ["TypeScript / JavaScript"] },
      { names: ["Python"], note: { tr: "ML / veri işleme", en: "ML / data processing" } },
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
        note: { tr: "REST API, katmanlı mimari", en: "REST API, layered architecture" },
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
        note: { tr: "dokümantasyon, sürdürülebilir kod", en: "documentation, sustainable code" },
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
        note: { tr: "birlikte kullanımı (EF Core / Dapper)", en: "usage (EF Core / Dapper)" },
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
      { names: ["Python"], note: { tr: "ile veri işleme / analiz", en: "data processing / analysis" } },
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
      { tr: "SOLID yapısını öğrenme ve uygulama.", en: "Learned and applied SOLID principles." },
      { tr: "Şirket içi işlenişi öğrenme.", en: "Observed internal company processes." },
      { tr: "Backend temelleri üzerine çalışmalar.", en: "Worked on backend fundamentals." },
      {
        tr: "İstenilen projeyi geliştirme: 4kEditorUygulaması / EditorDesk.",
        en: "Built the requested project: 4kEditorUygulaması / EditorDesk.",
      },
    ],
    tech: [".NET Core", "ASP.NET", "C#", "Docker", "PostgreSQL", "Postman"],
    url: "https://www.kuzeymarmaraotoyolu.com/",
  },
];

export function formatPeriod(exp: Experience, lang: Lang): string {
  const locale = lang === "tr" ? "tr-TR" : "en-US";
  const fmt = (iso: string) =>
    new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));

  const end = exp.end ? fmt(exp.end) : lang === "tr" ? "Devam ediyor" : "Present";
  return `${fmt(exp.start)} – ${end}`;
}
