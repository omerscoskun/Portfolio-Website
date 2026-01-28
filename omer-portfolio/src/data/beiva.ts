export type Localized = { tr: string; en: string };

export type Book = {
  id: string;
  title: Localized;
  logline: Localized; // 1 cümlelik tanım
  status?: Localized; // örn: "Yazım aşamasında" / "In progress"
  links?: {
    page?: string; // kitap sayfası / blog
    buy?: string; // satış linki
    excerpt?: string; // örnek bölüm
  };
};

export type MediaLink = {
  id: string;
  title: Localized;
  note?: Localized; // kısa açıklama
  links: {
    youtube?: string;
    spotify?: string;
    soundcloud?: string;
    instagram?: string;
    other?: string;
  };
  tags?: string[]; // örn: ["OST", "Lyric Video", "Review"]
};

export const beiva = {
  featured: {
    // Home'da göstereceğimiz seçimler
    bookId: "beiva-1",
    musicId: "music-1",
    youtubeId: "yt-1",
  },

  intro: {
    tr: "BEIVA; romanlar, dünya inşası, çizimler ve müziklerle büyüyen bir bilimkurgu evreni. Bu sayfada içerikleri kategoriler halinde bulabilirsin.",
    en: "BEIVA is a sci-fi universe expanding through novels, worldbuilding, visual art, and music. This page collects the work by category.",
  },

  books: [
    {
      id: "beiva-1",
      title: { tr: "BEIVA — Kitap I", en: "BEIVA — Book I" },
      logline: {
        tr: "Bilinmezlikten bilinmezliğe sürüklenen bir karakterin, parçalanmış anılarla kendi gerçeğini arayışı.",
        en: "A protagonist pushed from one unknown to another, searching for truth through fractured memories.",
      },
      status: { tr: "Geliştirme/Yazım", en: "In progress" },
      links: {
        page: "https://example.com",
        excerpt: "https://example.com",
      },
    },
    {
      id: "beiva-2",
      title: { tr: "BEIVA — Kitap II", en: "BEIVA — Book II" },
      logline: {
        tr: "Evrenin sırları derinleşirken, isimler ve inançlar yeni bir anlam kazanır.",
        en: "As the universe’s secrets deepen, names and beliefs take on new meaning.",
      },
      status: { tr: "Taslak", en: "Draft" },
      links: { page: "https://example.com" },
    },
  ] satisfies Book[],

  art: [
    // Şimdilik link bazlı tutuyoruz. İleride local görsel dosyalarına geçebiliriz.
    {
      id: "art-1",
      title: {
        tr: "Karakter Taslağı — Örnek",
        en: "Character Sketch — Sample",
      },
      note: { tr: "Seçili konsept çizim.", en: "A selected concept piece." },
      links: { instagram: "https://example.com", other: "https://example.com" },
      tags: ["Concept Art"],
    },
    {
      id: "art-2",
      title: { tr: "Ortam Taslağı — Örnek", en: "Environment Sketch — Sample" },
      note: { tr: "Sahne atmosfer çalışması.", en: "Scene atmosphere study." },
      links: { instagram: "https://example.com" },
      tags: ["Environment"],
    },
  ] satisfies MediaLink[],

  music: [
    {
      id: "music-1",
      title: { tr: "BEIVA OST — Örnek Parça", en: "BEIVA OST — Sample Track" },
      note: {
        tr: "Evrenin temasına uygun kısa bir müzik örneği.",
        en: "A short sample track aligned with the universe theme.",
      },
      links: { youtube: "https://example.com", spotify: "https://example.com" },
      tags: ["OST"],
    },
  ] satisfies MediaLink[],

  youtube: [
    {
      id: "yt-1",
      title: {
        tr: "Kitap İnceleme & Geliştirme — Seri",
        en: "Book Review & Development — Series",
      },
      note: {
        tr: "Genç yazarların metinlerine yapıcı eleştiri ve geliştirme önerileri.",
        en: "Constructive critique and improvement suggestions for young writers.",
      },
      links: { youtube: "https://example.com" },
      tags: ["Review"],
    },
    {
      id: "yt-2",
      title: {
        tr: "BEIVA Evren İçerikleri — Seçkiler",
        en: "BEIVA Universe — Highlights",
      },
      note: {
        tr: "Lore, karakterler, sahneler: evrenin parçaları.",
        en: "Lore, characters, scenes: pieces of the universe.",
      },
      links: { youtube: "https://example.com" },
      tags: ["Lore"],
    },
  ] satisfies MediaLink[],
};
