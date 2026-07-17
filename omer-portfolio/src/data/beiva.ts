export type Localized = { tr: string; en: string };

export type Book = {
  id: string;
  title: Localized;
  logline: Localized;
  status?: Localized;
  cover?: { src: string; alt: Localized };
  links?: {
    page?: string;
    buy?: string;
    excerpt?: string;
  };
};

export type MediaLink = {
  id: string;
  title: Localized;
  note?: Localized;
  links: {
    youtube?: string;
    spotify?: string;
    soundcloud?: string;
    instagram?: string;
    other?: string;
  };
  tags?: string[];
};

export type BeivaImage = {
  id: string;
  title: Localized;
  note?: Localized;
  src: string;
  alt: Localized;
};

export type BeivaClip = {
  id: string;
  title: Localized;
  note?: Localized;
  src: string;
  poster?: string;
};

export const beiva = {
  featured: {
    bookId: "beiva-1",
    musicId: "music-1",
    youtubeId: "yt-1",
    clipsId: "clip-1",
  },

  intro: {
    tr: "BEIVA; romanlar, dünya inşası, çizimler ve müziklerle büyüyen bir bilimkurgu evreni. Bu sayfada içerikleri kategoriler halinde bulabilirsin. Yazar olmak isteyen genç adaylara da inceleme ve değerlendirme videoları çekiyor, paylaşıyoruz.",
    en: "BEIVA is a sci-fi universe expanding through novels, worldbuilding, visual art, and music. This page collects the work by category. We also create and share review and evaluation videos for young aspiring writers.",
  },

  books: [
    {
      id: "beiva-1",
      title: { tr: "BEIVA — Kitap I", en: "BEIVA — Book I" },
      logline: {
        tr: "Bir insan, adını dahi hatırlamıyorsa… gerçekten var olabilir mi? Genç bir kız(?), sonsuza uzanan bir ormanın ortasında gözlerini açtığında, ne geçmişini ne ismini hatırlar. Yalnızlık, ilk anda eksik sayılmaz; ta ki görünmeyen bir ses ona geçici bir kimlik fısıldayana, narin bir çiçek göğsüne nefes olana ve adımlarının yanına sessiz birkaç yürüyüş ekleyenene kadar. Fakat uzatılan her el şefkat taşımaz: bedenlerin dili, merhametin mi yoksa vahşetin mi ağır bastığını acımasızca hatırlatır. Bu dünya gerçekten yaşaması gereken bir yer midir, yoksa çoktan ölmüş olması gereken birinin sığınağı mıdır? O, bu dünyaya tesadüfen mi düşmüştür, yoksa biri onu bilerek mi çağırmıştır? Verdiği kararlar, karşılaştığı canlılarla kurduğu bağlar… gerçekten “doğru” mudur, yoksa bir yerlerde geri dönülmez bir çizgiyi çoktan aşmış mıdır? “BEIVA: Ebediyetten Fâniliğe”, hafızasını kaybetmiş bir yabancının adım adım kendine, çevresindekilere ve bilinmeyen bir düzene dair en ağır sorularla yüzleştiği, felsefi ve duygusal bir yolculuğun ilk halkasıdır. Bu dünyaya adım attığınızda, belki de asıl soruyu kendinize soracaksınız: Korkmanız gereken asıl şey onlar mı… yoksa içinizde saklanan siz misiniz?",
        en: 'If a person can\'t even remember their own name... can they truly exist? A young girl(?), opens her eyes in the middle of an endless forest, remembering neither her past nor her name. Loneliness is not absent at first; until an unseen voice whispers a temporary identity to her, a delicate flower breathes life into her chest, and a few silent walks are added to her steps. But not every outstretched hand carries compassion: the language of bodies mercilessly reminds us whether mercy or savagery prevails. Is this world truly a place to live, or is it a refuge for someone who should have already died? Did she fall into this world by chance, or did \'someone deliberately call her? Are the decisions she makes, the bonds she forms with the living beings she encounters... truly "right," or has she already crossed an irreversible line somewhere?""BEIVA: From Eternity to Mortality" is the first part of a philosophical and emotional journey in which a stranger who has lost her memory confronts the most difficult questions \' about herself, those around her, and an unknown order, step by step. It is a ring. When you step into this world, perhaps you will ask yourself the real question: Are they the ones you should fear... or is it you who is hidden within?',
      },
      status: { tr: "Geliştirme/Yazım", en: "In progress" },
      cover: {
        src: "/beiva/covers/beiva-1.jpg",
        alt: { tr: "BEIVA Kitap I Kapak", en: "BEIVA Book I Cover" },
      },
      links: { page: "https://linktr.ee/beiva" },
    },
    {
      id: "beiva-2",
      title: { tr: "BEIVA — Kitap II", en: "BEIVA — Book II" },
      logline: {
        tr: "Evrenin sırları derinleşirken, isimler ve inançlar yeni bir anlam kazanır. Henüz Taslak Aşamasında",
        en: "As the universe’s secrets deepen, names and beliefs take on new meaning. Currently in Draft Stage",
      },
      status: { tr: "Taslak", en: "Draft" },
      cover: {
        src: "/beiva/covers/beiva-2.jpg",
        alt: { tr: "BEIVA Kitap II Kapak", en: "BEIVA Book II Cover" },
      },
      links: { page: "https://linktr.ee/beiva" },
    },
  ],
  artImages: [
    {
      id: "img-1",
      title: { tr: "Çizim 1 — (Mes-în Chibi)", en: "Art 1 — (Mes-în Chibi)" },
      note: {
        tr: "Ana Karakterin Chibi Çizim Modeli",
        en: "Main character's chibi art model.",
      },
      src: "/beiva/art/art-1.jpg",
      alt: { tr: "BEIVA çizim 1", en: "BEIVA artwork 1" },
    },
    {
      id: "img-2",
      title: { tr: "Çizim 2 — (İlk Uyanış)", en: "Art 2 — (First Awakening)" },
      note: {
        tr: "Kitabın başındaki ilk ormanda uyanış anını temsil ediyor.",
        en: "Represents the awakening moment in the initial forest at the beginning of the book.",
      },
      src: "/beiva/art/art-2.jpg",
      alt: { tr: "BEIVA çizim 2", en: "BEIVA artwork 2" },
    },
  ] satisfies BeivaImage[],

  clips: [
    {
      id: "clip-1",
      title: {
        tr: "Animasyon 1 — (Hareketli Gözler)",
        en: "Animation 1 — (Moving Eyes)",
      },
      note: {
        tr: "Ana Karakterin Gözlerini Hareket Ettiren Kısa Animasyon.",
        en: "A short animation that moves the main character's eyes.",
      },
      src: "/beiva/clips/clip-1.mp4",
    },
    {
      id: "clip-2",
      title: {
        tr: "Animasyon 2 — (Katranlı Kalp Atımı)",
        en: "Animation 2 — (Pitch Black Heartbeat)",
      },
      note: {
        tr: "Ana karakterin kalp atımını simüle eden kısa animasyon.",
        en: "A short animation simulating the main character's heartbeat.",
      },
      src: "/beiva/clips/clip-2.mp4",
    },
  ] satisfies BeivaClip[],

  music: [
    {
      id: "music-1",
      title: { tr: "BEIVA OST — Parça 1", en: "BEIVA OST — Track 1" },
      note: {
        tr: "BEIVA atmosferine uygun bir müzik videosu. Duygusal bir parça.",
        en: "A music video aligned with the BEIVA atmosphere. An emotional track.",
      },
      links: { youtube: "https://youtu.be/QIxSesXIl-w" },
      tags: ["Music Video", "OST"],
    },
    {
      id: "music-2",
      title: { tr: "BEIVA OST — Parça 2", en: "BEIVA OST — Track 2" },
      note: {
        tr: "BEIVA atmosferine uygun ikinci bir müzik videosu. Karamsar bir parça.",
        en: "A second music video aligned with the BEIVA atmosphere. A gloomy track.",
      },
      links: { youtube: "https://youtu.be/d-Nu6pfHSkY" },
      tags: ["Music Video", "OST"],
    },
  ] satisfies MediaLink[],

  youtube: [
    {
      id: "yt-1",
      title: {
        tr: "YouTube Video 1 — (Fukamite)",
        en: "YouTube Video 1 — (Fukamite)",
      },
      note: {
        tr: "İnceleme videolarımızdan birine ait bir video.",
        en: "A video from one of our review videos.",
      },
      links: { youtube: "https://youtu.be/Pd8kCyVj2ac" },
      tags: ["YouTube"],
    },
    {
      id: "yt-2",
      title: {
        tr: "YouTube Video 2 — (Başlık)",
        en: "YouTube Video 2 — (Title)",
      },
      note: {
        tr: "Çizim timelapse videosu",
        en: "Drawing timelapse video",
      },
      links: { youtube: "https://youtu.be/0HziSWjQ06A" },
      tags: ["YouTube"],
    },
  ] satisfies MediaLink[],
};
