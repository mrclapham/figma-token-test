import StyleDictionaryPackage from "style-dictionary";
import fs from "fs";

const jsonExport = "typescript/customFormat";

StyleDictionaryPackage.registerFormat({
  name: jsonExport,
  formatter: function (dictionary) {
    return `export const tokens = ${JSON.stringify(dictionary.properties, null, 2)};`;
  },
});

const config = {
  source: ["tokens/tokens.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      prefix: "rh",
      buildPath: "build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "build/ts/",
      files: [
        {
          destination: "tokens.ts",
          format: jsonExport,
        },
      ],
    },
  },
};

const styleDictionary = StyleDictionaryPackage.extend(config);
styleDictionary.cleanAllPlatforms();
styleDictionary.buildAllPlatforms();

// Read the generated TypeScript file
const tsFile = fs.readFileSync("build/ts/tokens.ts", "utf-8");

// Log the generated TypeScript code
console.log(tsFile);
