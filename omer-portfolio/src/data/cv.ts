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
  logo?: string;
  logoAlt?: string;
};

export type LanguageSkill = {
  id: string;
  name: Localized;
  level: Localized;
  logo?: string;
  logoAlt?: string;
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
    tr: "Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği mezunu. .NET/ASP.NET Core ile REST API ve katmanlı mimari üzerine yoğunlaşıyor; React Native, React ve Python tabanlı makine öğrenmesi katmanlarıyla uçtan uca çalışan ürünler geliştiriyor. Hâlen Keskal yayın platformunu Next.js ve NestJS yığınıyla solo geliştirici olarak yürütüyor. Temiz mimari, SOLID ve sürdürülebilir kod pratiklerini önemsiyor.",
    en: "Computer Engineering graduate of Süleyman Demirel University. Focused on REST APIs and layered architecture with .NET/ASP.NET Core; builds end-to-end products spanning React Native, React and Python-based machine learning layers. Currently builds the Keskal publishing platform as its solo developer on a Next.js and NestJS stack. Committed to clean architecture, SOLID and sustainable code practices.",
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
    logo: "/logos/sdu.png",
    logoAlt: "Süleyman Demirel Üniversitesi Logo",
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
    logo: "/logos/british-culture.png",
    logoAlt: "British Culture Logo",
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
  logo?: string;
  logoAlt?: string;
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
    id: "keskal",
    organization: {
      tr: "Keskal (Keşfedilmemiş Kalemler)",
      en: "Keskal (Keşfedilmemiş Kalemler)",
    },
    role: {
      tr: "Kurucu Ortak & Solo Full-Stack Geliştirici",
      en: "Co-founder & Solo Full-Stack Developer",
    },
    location: { tr: "Uzaktan", en: "Remote" },
    start: "2026-07-21",
    end: null,
    bullets: [
      {
        tr: "Yazarların eserlerini yayımladığı, okurların keşfettiği web platformunun tek geliştiricisi olarak frontend, backend, veritabanı ve altyapı katmanlarının tamamını yürütüyorum; kurucu ortağım marka ve pazarlama tarafını üstleniyor.",
        en: "As the sole developer of a web platform where authors publish their work and readers discover it, I own the frontend, backend, database and infrastructure layers; my co-founder handles branding and marketing.",
      },
      {
        tr: "Geliştirmeyi ürün ve mimari dokümantasyonu üzerinden planlı biçimde yürütüyorum: PRD, SAD, ERD, API kontratları, iş kırılım yapısı ve sprint yol haritası.",
        en: "Run development from product and architecture documentation: PRD, SAD, ERD, API contracts, work breakdown structure and a sprint roadmap.",
      },
      {
        tr: "Rol tabanlı erişim kontrolü (RBAC), JWT oturum yönetimi, Argon2id parola saklama ve oturum geçersiz kılma içeren kimlik ve yetkilendirme altyapısını geliştirdim.",
        en: "Built the identity and authorization layer with role-based access control (RBAC), JWT session management, Argon2id password hashing and session invalidation.",
      },
      {
        tr: "Yazarlık paneli, zengin metin editörü, otomatik kayıt ve revizyon geçmişi, editör inceleme kuyruğu, değerlendirme/sonuçlandırma akışı ve rol bazlı okuma yetkileriyle yayınlama modüllerini tamamladım.",
        en: "Delivered the author dashboard, rich-text editor, autosave and revision history, editorial review queue, decision workflow and the publishing module with role-based reading permissions.",
      },
      {
        tr: "Docker tabanlı geliştirme ortamı; birim, entegrasyon ve uçtan uca (E2E) test setleriyle internal alpha sürümünü kullanılabilir hâle getirdim.",
        en: "Shipped a usable internal alpha backed by a Docker-based development environment and unit, integration and end-to-end (E2E) test suites.",
      },
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "JWT",
      "RBAC",
    ],
  },
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
    end: "2026-08-10",
    bullets: [
      {
        tr: "Kurumsal yazılım geliştirme ortamını ve Bilgi İşlem Daire Başkanlığındaki çalışma düzenini, ekip toplantılarına katılarak gözlemleme.",
        en: "Observed the enterprise software development environment and the way the IT department works by joining team meetings.",
      },
      {
        tr: "TMDB API üzerinden çalışan full-stack film uygulamasını (BeWare) bir gün içinde geliştirme: .NET backend, Angular frontend, PostgreSQL, Redis, Docker ve Swagger.",
        en: "Built a full-stack movie application (BeWare) on top of the TMDB API in a single day: .NET backend, Angular frontend, PostgreSQL, Redis, Docker and Swagger.",
      },
      {
        tr: "Keskal web platformunu PRD/SAD dokümantasyonundan internal alpha sürümüne kadar uçtan uca planlama ve geliştirme.",
        en: "Planned and developed the Keskal web platform end to end, from PRD/SAD documentation through to an internal alpha release.",
      },
      {
        tr: "Kimlik ve yetkilendirme altyapısı kurma: RBAC, JWT, Argon2id parola saklama ve oturum geçersiz kılma mekanizmaları.",
        en: "Set up identity and authorization infrastructure: RBAC, JWT, Argon2id password hashing and session invalidation.",
      },
      {
        tr: "Uçtan uca testleri yürütme, tespit edilen hataları önceliklendirerek kayıt altına alma ve internal alpha demosunu teknik olarak sunma.",
        en: "Ran end-to-end tests, logged and prioritized the issues found, and presented the internal alpha demo from a technical standpoint.",
      },
      {
        tr: "Günlük LeetCode pratiğiyle C# ve SQL üzerinden algoritma, veri yapıları ve sorgu çalışmaları.",
        en: "Daily LeetCode practice on algorithms, data structures and queries using C# and SQL.",
      },
    ],
    tech: [
      ".NET",
      "C#",
      "Angular",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Swagger",
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
    ],
    url: "https://www.mapeg.gov.tr/",
    logo: "/logos/mapeg.png",
    logoAlt: "MAPEG Logo",
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
    logo: "/logos/kmo.png",
    logoAlt: "KMO Logo",
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
