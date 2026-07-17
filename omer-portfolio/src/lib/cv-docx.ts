import type { CvModel } from "./cv-model";

const ACCENT = "4338CA";
const MUTED = "555555";

export async function buildCvDocx(model: CvModel): Promise<Blob> {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } =
    await import("docx");

  const children: any[] = [
    new Paragraph({
      children: [new TextRun({ text: model.name, bold: true, size: 44, color: ACCENT })],
    }),
    new Paragraph({
      children: [new TextRun({ text: model.title, size: 23, color: MUTED })],
    }),
    new Paragraph({
      children: [new TextRun({ text: model.contact.join("  |  "), size: 17, color: MUTED })],
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 6, color: "DDDDDD", space: 6 },
      },
      spacing: { after: 200 },
    }),
  ];

  const sectionHeading = (text: string) =>
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 240, after: 100 },
      children: [new TextRun({ text, bold: true, size: 24, color: ACCENT })],
    });

  children.push(sectionHeading(model.summaryHeading));
  children.push(
    new Paragraph({ children: [new TextRun({ text: model.summary, size: 19 })] })
  );

  for (const section of model.sections) {
    children.push(sectionHeading(section.heading));

    for (const line of section.lines ?? []) {
      const [head, ...rest] = line.split(": ");
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: `${head}: `, bold: true, size: 19 }),
            new TextRun({ text: rest.join(": "), size: 19 }),
          ],
        })
      );
    }

    for (const entry of section.entries ?? []) {
      children.push(
        new Paragraph({
          spacing: { before: 120 },
          children: [new TextRun({ text: entry.heading, bold: true, size: 21 })],
        })
      );

      if (entry.meta) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: entry.meta, size: 17, color: MUTED })],
          })
        );
      }

      if (entry.body) {
        children.push(
          new Paragraph({
            spacing: { before: 40 },
            children: [new TextRun({ text: entry.body, size: 19 })],
          })
        );
      }

      for (const bullet of entry.bullets) {
        children.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [new TextRun({ text: bullet, size: 19 })],
          })
        );
      }

      if (entry.tech) {
        children.push(
          new Paragraph({
            spacing: { before: 40 },
            children: [new TextRun({ text: entry.tech, size: 17, color: MUTED })],
          })
        );
      }

      if (entry.url) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: entry.url, size: 17, color: ACCENT })],
          })
        );
      }
    }
  }

  if (model.preparedFor) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 400 },
        children: [new TextRun({ text: model.preparedFor, size: 15, color: "999999" })],
      })
    );
  }

  const doc = new Document({
    creator: model.name,
    title: model.fileBaseName,
    sections: [{ children }],
  });

  return Packer.toBlob(doc);
}
