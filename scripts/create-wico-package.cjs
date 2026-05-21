const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "dist-wico");
const packageJsonPath = path.join(rootDir, "package.json");

const rootPackage = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const packageName = `${rootPackage.name}-wico`;

const wicoPackage = {
  name: packageName,
  version: rootPackage.version,
  description: "Autocomplete metadata bundle for mftsccs-browser.",
  type: "module",
  main: "wico-metadata.bundle.js",
  types: "types/wico.d.ts",
  exports: {
    ".": {
      types: "./types/wico.d.ts",
      default: "./wico-metadata.bundle.js",
    },
  },
  files: [
    "wico-metadata.bundle.js",
    "types/wico.d.ts",
    "types/Metadata/AutocompleteMetadata.d.ts",
    "README.md",
    "package.json",
  ],
  sideEffects: false,
  keywords: [...new Set([...(rootPackage.keywords ?? []), "wico", "autocomplete", "metadata"])],
  author: rootPackage.author,
  license: rootPackage.license,
  repository: rootPackage.repository,
  bugs: rootPackage.bugs,
  homepage: rootPackage.homepage,
};

const readme = `# ${packageName}

Lean autocomplete metadata package generated from \`${rootPackage.name}\`.

\`\`\`ts
import { getTsccsAutocompleteMetadata } from "${packageName}";

const metadata = getTsccsAutocompleteMetadata();
\`\`\`
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "package.json"), `${JSON.stringify(wicoPackage, null, 2)}\n`, "utf8");
fs.writeFileSync(path.join(outputDir, "README.md"), readme, "utf8");

console.log(`Generated ${packageName} package metadata in ${path.relative(rootDir, outputDir)}`);
