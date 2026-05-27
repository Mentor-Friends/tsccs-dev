const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "src");
const appEntry = path.join(sourceDir, "app.ts");
const outputFile = path.join(sourceDir, "Metadata", "AutocompleteMetadata.ts");

function readSourceFile(filePath) {
  const sourceText = fs.readFileSync(filePath, "utf8");
  return ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true);
}

function hasModifier(node, modifierKind) {
  return Boolean(node.modifiers?.some((modifier) => modifier.kind === modifierKind));
}

function getBindingName(name) {
  if (ts.isIdentifier(name)) return name.text;
  if (ts.isObjectBindingPattern(name)) return "options";
  if (ts.isArrayBindingPattern(name)) return "items";
  return "";
}

function getParameterNames(parameters) {
  return parameters
    .map((parameter) => getBindingName(parameter.name))
    .filter((parameter) => parameter.length > 0);
}

function getLeadingJSDoc(node) {
  const sourceFile = node.getSourceFile();
  const sourceText = sourceFile.getFullText();
  const commentRanges = ts.getLeadingCommentRanges(sourceText, node.pos) ?? [];
  const jsDocRange = [...commentRanges]
    .reverse()
    .find((range) => sourceText.slice(range.pos, range.end).startsWith("/**"));

  return jsDocRange ? sourceText.slice(jsDocRange.pos, jsDocRange.end) : "";
}

function formatJSDoc(rawComment) {
  if (!rawComment) return undefined;

  const lines = rawComment
    .replace(/^\/\*\*/, "")
    .replace(/\*\/$/, "")
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trimEnd());
  const formattedLines = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("@example") || trimmed.startsWith("@see")) break;

    if (trimmed.startsWith("@param")) {
      formattedLines.push(trimmed.replace(/^@param\s+/, "Param: "));
      continue;
    }

    if (trimmed.startsWith("@returns") || trimmed.startsWith("@return")) {
      formattedLines.push(trimmed.replace(/^@returns?\s+/, "Returns: "));
      continue;
    }

    if (!trimmed && formattedLines[formattedLines.length - 1] === "") continue;
    formattedLines.push(trimmed);
  }

  const documentation = formattedLines.join("\n").trim();
  if (/^(Concepts|Connections|Compositions|Deletions)$/i.test(documentation)) return undefined;

  return documentation || undefined;
}

function createMetadataEntry(declaration) {
  return {
    parameters: getParameterNames(declaration.parameters ?? []),
    documentation: formatJSDoc(getLeadingJSDoc(declaration)),
  };
}

function getModulePath(moduleSpecifier) {
  const rawPath = moduleSpecifier.text;
  const directFile = path.resolve(sourceDir, `${rawPath}.ts`);
  const indexFile = path.resolve(sourceDir, rawPath, "index.ts");

  if (fs.existsSync(directFile)) return directFile;
  if (fs.existsSync(indexFile)) return indexFile;
  return null;
}

function collectDeclarations(filePath) {
  const sourceFile = readSourceFile(filePath);
  const declarations = new Map();

  function addDeclaration(name, declaration) {
    if (!name) return;
    declarations.set(name, declaration);
  }

  sourceFile.statements.forEach((statement) => {
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name) addDeclaration(statement.name.text, statement);
      if (hasModifier(statement, ts.SyntaxKind.DefaultKeyword)) addDeclaration("default", statement);
    }

    if (ts.isClassDeclaration(statement)) {
      if (statement.name) addDeclaration(statement.name.text, statement);
      if (hasModifier(statement, ts.SyntaxKind.DefaultKeyword)) addDeclaration("default", statement);
    }

    if (ts.isVariableStatement(statement)) {
      statement.declarationList.declarations.forEach((declaration) => {
        if (!ts.isIdentifier(declaration.name)) return;
        if (
          declaration.initializer &&
          (ts.isArrowFunction(declaration.initializer) || ts.isFunctionExpression(declaration.initializer))
        ) {
          addDeclaration(declaration.name.text, declaration.initializer);
        }
      });
    }
  });

  return declarations;
}

function getClassMethodParameters(classDeclaration) {
  const methods = {};

  classDeclaration.members.forEach((member) => {
    if (ts.isMethodDeclaration(member) && member.name && ts.isIdentifier(member.name)) {
      methods[member.name.text] = createMetadataEntry(member);
    }
  });

  return methods;
}

function getConstructorMetadata(classDeclaration) {
  const constructor = classDeclaration.members.find((member) => ts.isConstructorDeclaration(member));
  if (constructor) return createMetadataEntry(constructor);

  return {
    parameters: [],
    documentation: formatJSDoc(getLeadingJSDoc(classDeclaration)),
  };
}

function sortMetadata(metadata) {
  const sorted = {};

  Object.keys(metadata)
    .sort()
    .forEach((ownerName) => {
      sorted[ownerName] = {};
      Object.keys(metadata[ownerName])
        .sort()
        .forEach((memberName) => {
          sorted[ownerName][memberName] = metadata[ownerName][memberName];
        });
    });

  return sorted;
}

function addFunctionMetadata(metadata, ownerName, exportName, declaration) {
  metadata[ownerName] = metadata[ownerName] ?? {};
  metadata[ownerName][exportName] = createMetadataEntry(declaration);
}

function addClassMetadata(metadata, exportName, classDeclaration) {
  metadata[exportName] = getClassMethodParameters(classDeclaration);
  metadata.tsccs[exportName] = getConstructorMetadata(classDeclaration);
}

function addDeclarationMetadata(metadata, exportName, declaration) {
  if (!declaration) return;

  if (
    ts.isFunctionDeclaration(declaration) ||
    ts.isArrowFunction(declaration) ||
    ts.isFunctionExpression(declaration)
  ) {
    addFunctionMetadata(metadata, "tsccs", exportName, declaration);
    return;
  }

  if (ts.isClassDeclaration(declaration)) {
    addClassMetadata(metadata, exportName, declaration);
  }
}

function readNamedExports(exportClause) {
  if (!exportClause || !ts.isNamedExports(exportClause)) return [];

  return exportClause.elements.map((element) => ({
    importedName: element.propertyName?.text ?? element.name.text,
    exportedName: element.name.text,
  }));
}

function buildMetadata() {
  const metadata = { tsccs: {} };
  const appSource = readSourceFile(appEntry);
  const appDeclarations = collectDeclarations(appEntry);
  const declarationCache = new Map([[appEntry, appDeclarations]]);

  function getDeclarations(filePath) {
    if (!declarationCache.has(filePath)) {
      declarationCache.set(filePath, collectDeclarations(filePath));
    }
    return declarationCache.get(filePath);
  }

  appSource.statements.forEach((statement) => {
    if (ts.isFunctionDeclaration(statement) && hasModifier(statement, ts.SyntaxKind.ExportKeyword) && statement.name) {
      addFunctionMetadata(metadata, "tsccs", statement.name.text, statement);
      return;
    }

    if (!ts.isExportDeclaration(statement)) return;

    const namedExports = readNamedExports(statement.exportClause);
    if (namedExports.length === 0) return;

    if (!statement.moduleSpecifier || !ts.isStringLiteral(statement.moduleSpecifier)) {
      namedExports.forEach(({ importedName, exportedName }) => {
        addDeclarationMetadata(metadata, exportedName, appDeclarations.get(importedName));
      });
      return;
    }

    const modulePath = getModulePath(statement.moduleSpecifier);
    if (!modulePath) return;

    const declarations = getDeclarations(modulePath);
    namedExports.forEach(({ importedName, exportedName }) => {
      addDeclarationMetadata(metadata, exportedName, declarations.get(importedName));
    });
  });

  return sortMetadata(metadata);
}

function writeMetadataFile(metadata) {
  const content = `export type TsccsAutocompleteEntry = {
  parameters: string[];
  documentation?: string;
};

export type TsccsAutocompleteMetadata = Record<string, Record<string, TsccsAutocompleteEntry>>;

export const tsccsAutocompleteMetadata: TsccsAutocompleteMetadata = ${JSON.stringify(metadata, null, 2)};

export function getTsccsAutocompleteMetadata(): TsccsAutocompleteMetadata {
  return tsccsAutocompleteMetadata;
}
`;

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, content, "utf8");
}

const metadata = buildMetadata();
writeMetadataFile(metadata);
console.log(
  `Generated autocomplete metadata for ${Object.keys(metadata.tsccs).length} tsccs exports in ${path.relative(rootDir, outputFile)}`
);
