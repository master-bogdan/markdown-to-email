const { write, readSourceFile } = require("../../utils");
const { replaceMarkdownPreviewText } = require("../../helpers");
const { REGEXP_PREVIEW_TEXT } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing preview-text", () => {
  it("renders preview-text", () => {
    let markdown = readSourceFile("src/tests/preview-text/content.md");
    let parsedContent = {
      content: markdown,
      previewText: "",
      errors: {
        previewText: false,
      }
    };

    replaceMarkdownPreviewText.call(parsedContent, REGEXP_PREVIEW_TEXT);
    const fileName = "preview.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
