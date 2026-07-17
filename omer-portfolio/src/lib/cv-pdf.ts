import type { CvModel } from "./cv-model";

const ACCENT = "#4338ca";
const MUTED = "#555555";

let pdfMakePromise: Promise<any> | null = null;

function loadPdfMake(): Promise<any> {
  pdfMakePromise ??= (async () => {
    const [pdfMakeMod, vfsMod] = await Promise.all([
      import("pdfmake/build/pdfmake"),
      import("pdfmake/build/vfs_fonts"),
    ]);

    const pdfMake = (pdfMakeMod as any).default ?? pdfMakeMod;
    const vfs = (vfsMod as any).default ?? vfsMod;

    if (typeof pdfMake.addVirtualFileSystem !== "function") {
      throw new Error(
        "pdfmake sürümü beklenen addVirtualFileSystem API'sini sunmuyor.",
      );
    }
    pdfMake.addVirtualFileSystem(vfs);

    return pdfMake;
  })();

  return pdfMakePromise;
}

export async function buildCvPdf(model: CvModel): Promise<Blob> {
  const pdfMake = await loadPdfMake();

  const content: any[] = [
    { text: model.name, style: "name" },
    { text: model.title, style: "role" },
    { text: model.contact.join("  |  "), style: "contact" },
    {
      canvas: [
        {
          type: "line",
          x1: 0,
          y1: 0,
          x2: 515,
          y2: 0,
          lineWidth: 1,
          lineColor: "#dddddd",
        },
      ],
      margin: [0, 8, 0, 10],
    },
    { text: model.summaryHeading, style: "section" },
    { text: model.summary, style: "body", margin: [0, 0, 0, 4] },
  ];

  for (const section of model.sections) {
    content.push({ text: section.heading, style: "section" });

    for (const line of section.lines ?? []) {
      const [head, ...rest] = line.split(": ");
      content.push({
        text: [{ text: `${head}: `, bold: true }, rest.join(": ")],
        style: "body",
        margin: [0, 0, 0, 3],
      });
    }

    for (const entry of section.entries ?? []) {
      content.push({ text: entry.heading, style: "entryHead" });
      if (entry.meta) content.push({ text: entry.meta, style: "meta" });
      if (entry.body)
        content.push({ text: entry.body, style: "body", margin: [0, 2, 0, 0] });
      if (entry.bullets.length) {
        content.push({
          ul: entry.bullets,
          style: "body",
          margin: [0, 3, 0, 0],
        });
      }
      if (entry.tech) content.push({ text: entry.tech, style: "tech" });
      if (entry.url)
        content.push({ text: entry.url, style: "link", link: entry.url });
      content.push({ text: "", margin: [0, 0, 0, 6] });
    }
  }

  const doc = {
    info: { title: model.fileBaseName, author: model.name },
    pageSize: "A4",
    pageMargins: [40, 40, 40, 44] as [number, number, number, number],
    content,
    footer: (page: number, total: number) => ({
      columns: [
        { text: model.preparedFor ?? "", style: "footer" },
        { text: `${page} / ${total}`, style: "footer", alignment: "right" },
      ],
      margin: [40, 12, 40, 0],
    }),
    defaultStyle: {
      font: "Roboto",
      fontSize: 9.5,
      lineHeight: 1.25,
      color: "#1a1a1a",
    },
    styles: {
      name: { fontSize: 22, bold: true, color: ACCENT },
      role: { fontSize: 11.5, margin: [0, 2, 0, 4], color: MUTED },
      contact: { fontSize: 8.5, color: MUTED },
      section: {
        fontSize: 12,
        bold: true,
        color: ACCENT,
        margin: [0, 10, 0, 5],
      },
      entryHead: { fontSize: 10.5, bold: true },
      meta: { fontSize: 8.5, color: MUTED, margin: [0, 1, 0, 0] },
      body: { fontSize: 9.5 },
      tech: { fontSize: 8.5, color: MUTED, margin: [0, 3, 0, 0] },
      link: { fontSize: 8.5, color: ACCENT, margin: [0, 2, 0, 0] },
      footer: { fontSize: 7.5, color: "#999999" },
    },
  };

  return pdfMake.createPdf(doc).getBlob();
}
