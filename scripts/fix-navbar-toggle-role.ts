const outputDir = Deno.env.get("QUARTO_PROJECT_OUTPUT_DIR") || "_site";
const togglePattern = /(<button\s+class="navbar-toggler"[^>]*?)\s+role="menu"([^>]*>)/g;

async function* htmlFiles(directory: string): AsyncGenerator<string> {
  for await (const entry of Deno.readDir(directory)) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory) {
      yield* htmlFiles(path);
    } else if (entry.isFile && entry.name.endsWith(".html")) {
      yield path;
    }
  }
}

let corrected = 0;

for await (const path of htmlFiles(outputDir)) {
  const html = await Deno.readTextFile(path);
  if (!html.includes('class="navbar-toggler"')) continue;

  const matches = [...html.matchAll(togglePattern)];
  if (matches.length !== 1) {
    throw new Error(
      `Expected one navbar toggle with role="menu" in ${path}; found ${matches.length}.`,
    );
  }

  const updated = html.replace(togglePattern, "$1$2");
  await Deno.writeTextFile(path, updated);
  corrected += 1;
}

if (corrected === 0) {
  throw new Error(`No rendered navbar toggles were corrected in ${outputDir}.`);
}

console.log(`Corrected navbar button semantics in ${corrected} rendered HTML files.`);
