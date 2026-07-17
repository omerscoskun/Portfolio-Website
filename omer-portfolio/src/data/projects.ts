export type Project = {
  id: string;
  featured?: boolean;

  title: { tr: string; en: string };
  summary: { tr: string; en: string };

  tags: string[]; // örn: ["AI", "Backend", "Mobile"]
  tech?: string[]; // örn: ["C#", ".NET", "EF Core"]

  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
};

export const projects: Project[] = [
  {
    id: "g-app",
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
    tech: ["React Native", "Expo", "TypeScript", "Redis", "RabbitMQ", "Jenkins", "CI/CD"],
  },
  {
    id: "forest-fire",
    featured: true,
    title: {
      tr: "Orman Yangınları Risk Analizi ve Tahmin Sistemi (TÜBİTAK)",
      en: "Forest Fire Risk Analysis & Prediction System (TÜBİTAK)",
    },
    summary: {
      tr: "TÜBİTAK kapsamında bir ekip arkadaşımla geliştirmekte olduğumuz bitirme projesi. Hava durumu, insan etkisi, coğrafi katmanlar, uydu verileri ve geçmiş yangın kayıtlarını birleştirerek harita tabanlı risk görselleştirmesi ile bugün, yarın ve bir haftaya kadar yangın riski tahmini üretir. Sistem; ASP.NET Core REST API, React dashboard, PostgreSQL/PostGIS veritabanı ve Python tabanlı makine öğrenmesi katmanlarından oluşur. Geliştirme süreci devam ediyor (2027 yazı hedefleniyor). (Private repository).",
      en: "A graduation project developed with a teammate under TÜBİTAK. It combines weather, human impact, geographic layers, satellite data and historical fire records to produce map-based risk visualization and fire-risk predictions for today, tomorrow and up to one week ahead. The system consists of an ASP.NET Core REST API, a React dashboard, a PostgreSQL/PostGIS database and Python-based machine learning layers. Development is ongoing (targeting summer 2027). (Private repository).",
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
    id: "mavera",
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
