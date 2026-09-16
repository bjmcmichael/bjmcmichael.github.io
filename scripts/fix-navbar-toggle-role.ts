const outputDir = Deno.env.get("QUARTO_PROJECT_OUTPUT_DIR") || "_site";
const outputFiles = Deno.env.get("QUARTO_PROJECT_OUTPUT_FILES");
const togglePattern = /<button\s+class="navbar-toggler"[^>]*>/g;
const erroneousRolePattern = /\s+role="menu"/g;

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

function currentHtmlFiles(files: string): string[] {
  return files
    .split(/\r?\n/)
    .map((file) => file.trim())
    .filter((file) => file.endsWith(".html"));
}

function correctNavbarToggle(html: string, path: string, strict: boolean): boolean {
  if (!html.includes('class="navbar-toggler"')) return false;

  const toggles = [...html.matchAll(togglePattern)];
  if (toggles.length !== 1) {
    throw new Error(
      `Expected one native navbar toggle in ${path}; found ${toggles.length}.`,
    );
  }

  const toggle = toggles[0][0];
  const toggleIndex = toggles[0].index;
  if (toggleIndex === undefined) {
    throw new Error(`Could not locate the navbar toggle in ${path}.`);
  }

  const erroneousRoles = [...toggle.matchAll(erroneousRolePattern)];
  if (erroneousRoles.length > 1 || (strict && erroneousRoles.length !== 1)) {
    const expectation = strict ? "one" : "at most one";
    throw new Error(
      `Expected ${expectation} role="menu" on the navbar toggle in ${path}; found ${erroneousRoles.length}.`,
    );
  }

  if (erroneousRoles.length === 0) return false;

  const correctedToggle = toggle.replace(erroneousRolePattern, "");
  const updated = html.slice(0, toggleIndex) + correctedToggle +
    html.slice(toggleIndex + toggle.length);
  Deno.writeTextFileSync(path, updated);
  return true;
}

let corrected = 0;
let inspected = 0;

if (outputFiles !== undefined) {
  for (const path of currentHtmlFiles(outputFiles)) {
    const html = await Deno.readTextFile(path);
    if (!html.includes('class="navbar-toggler"')) continue;

    inspected += 1;
    if (correctNavbarToggle(html, path, true)) corrected += 1;
  }
} else {
  for await (const path of htmlFiles(outputDir)) {
    const html = await Deno.readTextFile(path);
    if (!html.includes('class="navbar-toggler"')) continue;

    inspected += 1;
    if (correctNavbarToggle(html, path, false)) corrected += 1;
  }
}

console.log(
  `Corrected navbar button semantics in ${corrected} of ${inspected} rendered HTML files.`,
);
