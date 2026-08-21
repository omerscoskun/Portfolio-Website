export type Project = {
  id: string;
  featured?: boolean;
  logo?: string;
  logoAlt?: string;

  title: { tr: string; en: string };
  summary: { tr: string; en: string };

  tags: string[];
  tech?: string[];

  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
};

export const projects: Project[] = [
  {
    id: "keskal",
    featured: true,
    title: {
      tr: "Keskal – Keşfedilmemiş Kalemler (Yayın Platformu)",
      en: "Keskal – Keşfedilmemiş Kalemler (Publishing Platform)",
    },
    summary: {
      tr: "Henüz geniş bir okur kitlesine ulaşmamış yazarların eserlerini yayımlayabildiği, okurların ise bu eserleri keşfedip okuyabildiği web platformu. Bir arkadaşımla birlikte kurduk; o marka ve pazarlama tarafını yürütürken yazılım geliştirmenin tamamını solo developer olarak ben üstleniyorum. Yazarlık paneli, zengin metin editörü, otomatik kayıt ve revizyon geçmişi, editör inceleme kuyruğu, değerlendirme akışı ve rol bazlı okuma yetkileriyle yayınlama modüllerini içeren internal alpha sürümü tamamlandı; geliştirme devam ediyor. (Private repository).",
      en: "A web platform where authors who have not yet reached a wide readership can publish their work and readers can discover and read it. Founded together with a friend; he runs branding and marketing while I own all software development as the solo developer. The internal alpha is complete — author dashboard, rich-text editor, autosave and revision history, editorial review queue, decision workflow and the publishing module with role-based reading permissions — and development continues. (Private repository).",
    },
    tags: ["Web", "Full-Stack", "Backend"],
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
      "Tiptap",
      "JWT",
      "RBAC",
    ],
  },
  {
    id: "g-app",
    logo: "/logos/gapp.svg",
    logoAlt: "G-App Logo",
    featured: true,
    title: {
      tr: "G-App (Fotoğraflı Günlük Uygulaması)",
      en: "G-App (Photo Journal App)",
    },
    summary: {
      tr: "Kullanıcıların fotoğraflı günlük oluşturabildiği, çalışır durumda bir mobil uygulama. Bir ekip arkadaşımla birlikte geliştirdik. Mobil istemci React Native, Expo ve TypeScript ile geliştirildi; güvenli kimlik doğrulama, Redis tabanlı önbellekleme, RabbitMQ worker yapısı ve Jenkins tabanlı CI/CD süreçleri içerir. Uygulama çalışıyor ancak henüz App Store / Google Play'de yayımlanmadı. (Private repository).",
      en: "A working mobile app where users can create photo-based journals. Built together with a teammate. The mobile client is developed with React Native, Expo and TypeScript, featuring secure authentication, Redis-based caching, a RabbitMQ worker structure and Jenkins-based CI/CD. The app is functional but not yet published on the App Store / Google Play. (Private repository).",
    },
    tags: ["Mobile", "Backend"],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redis",
      "RabbitMQ",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    id: "forest-fire",
    logo: "/logos/forest-fire.png",
    logoAlt: "Forest Fire Logo",
    featured: true,
    title: {
      tr: "Orman Yangınları Risk Analizi ve Tahmin Sistemi (TÜBİTAK)",
      en: "Forest Fire Risk Analysis & Prediction System (TÜBİTAK)",
    },
    summary: {
      tr: "Bir ekip arkadaşımla geliştirdiğim, bitirme projesi olarak tamamlanan ve TÜBİTAK kapsamında geliştirilmeye devam eden sistem. Hava durumu, insan etkisi, coğrafi katmanlar, uydu verileri ve geçmiş yangın kayıtlarını birleştirerek harita tabanlı risk görselleştirmesi ile bugün, yarın ve bir haftaya kadar yangın riski tahmini üretir. Sistem; ASP.NET Core REST API, React dashboard, PostgreSQL/PostGIS veritabanı ve Python tabanlı makine öğrenmesi katmanlarından oluşur. TÜBİTAK süreci devam ediyor (2027 yazı hedefleniyor). (Private repository).",
      en: "A system built with a teammate, completed as my graduation project and still being developed under TÜBİTAK. It combines weather, human impact, geographic layers, satellite data and historical fire records to produce map-based risk visualization and fire-risk predictions for today, tomorrow and up to one week ahead. The system consists of an ASP.NET Core REST API, a React dashboard, a PostgreSQL/PostGIS database and Python-based machine learning layers. The TÜBİTAK process is ongoing (targeting summer 2027). (Private repository).",
    },
    tags: ["AI", "Backend", "GIS"],
    tech: [
      "ASP.NET Core",
      "React",
      "PostgreSQL",
      "PostGIS",
      "Python",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "GeoPandas",
      "Shapely",
      "QGIS",
    ],
  },
  {
    id: "beware",
    featured: false,
    title: {
      tr: "BeWare (TMDB Film Uygulaması)",
      en: "BeWare (TMDB Movie App)",
    },
    summary: {
      tr: "MAPEG stajı sırasında bir gün içinde geliştirdiğim full-stack film keşif uygulaması. TMDB API üzerinden film verilerini çekip listeleyen uygulamanın backend tarafı .NET, frontend tarafı ise ilk kez denediğim Angular ile yazıldı. Veritabanı için PostgreSQL, sık kullanılan verilerin önbelleklenmesi için Redis kullanıldı; servisler Docker ile ayağa kaldırılıyor ve API uçları Swagger üzerinden dokümante ediliyor.",
      en: "A full-stack movie discovery app I built in a single day during my MAPEG internship. It pulls and lists movie data from the TMDB API, with a .NET backend and an Angular frontend — a framework I was trying for the first time. PostgreSQL handles persistence and Redis caches frequently used data; the services run via Docker and the API endpoints are documented with Swagger.",
    },
    tags: ["Web", "Backend"],
    tech: [
      ".NET",
      "C#",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Swagger",
    ],
    links: { github: "https://github.com/omerscoskun/BeWare" },
  },
  {
    id: "mavera",
    logo: "/logos/mavera.png",
    logoAlt: "Mavera Logo",
    featured: false,
    title: { tr: "Mavera (Konsept Uygulama)", en: "Mavera (Concept App)" },
    summary: {
      tr: "Konum tabanlı sosyal deney için prototip. Harita üzerinde keşif ve içerik paylaşımı gibi fikirleri test ettim. Arkadaşlarımızla birlikte geliştirdik. (Private repository).",
      en: "A prototype for a location-based social experience. Explores map discovery and content sharing concepts. Developed with friends. (Private repository).",
    },
    tags: ["Mobile"],
    tech: ["Kotlin", "Jetpack Compose"],
    links: { github: "https://github.com/Doukank-api/Mavera.git" },
  },
  {
    id: "editor-desk",
    featured: false,
    title: { tr: "EditorDesk (Araç)", en: "EditorDesk (Tool)" },
    summary: {
      tr: "Başvuru/inceleme süreçlerini düzenlemek için masaüstü araç fikri ve temel mimari denemeleri.",
      en: "A desktop tool concept to organize submissions/review workflows, with early architecture experiments.",
    },
    tags: ["Backend", "Tools"],
    tech: ["C#", ".NET"],
    links: { github: "https://github.com/omerscoskun/4KEditorUygulamasi.git" },
  },
  {
    id: "ml-experiment",
    featured: false,
    title: { tr: "ML Deneyleri", en: "ML Experiments" },
    summary: {
      tr: "Farklı veri setleriyle model denemeleri ve değerlendirme notları.",
      en: "Model experiments with different datasets and evaluation notes.",
    },
    tags: ["AI"],
    tech: ["Python"],
    links: {
      github:
        "https://github.com/omerscoskun/Yapay-Zeka-Ve-Bilgisayarli-Goru.git",
    },
  },
];
