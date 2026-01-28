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
    id: "mavera",
    featured: true,
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
    featured: true,
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
