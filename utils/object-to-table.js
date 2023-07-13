const fs = require("fs/promises");

const obj = {}

async function generateMarkdownTable(obj, key) {
  let markdownTable =
    "| Campo | Tipo | Obrigatório | Observações |\n|---|---|---|---|\n";
  const fields = obj[key].fields;

  for (let key in fields) {
    if (fields.hasOwnProperty(key)) {
      let required = fields[key].required ? ":heavy_check_mark:" : "";
      markdownTable += `| ${key} | ${fields[key].type} | ${required} | |\n`;
    }
  }
  await fs.appendFile("result.md", `\n\n## ${key}\n\n`);
  await fs.appendFile("result.md", markdownTable);
  return markdownTable;
}


(async () => {  
  for (let key in obj) {
    await generateMarkdownTable(obj, key)
  }
})()


