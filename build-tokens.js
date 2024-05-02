import StyleDictionaryPackage from "style-dictionary";

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
  },
};

const styleDictionary = StyleDictionaryPackage.extend(config);
styleDictionary.cleanAllPlatforms();
styleDictionary.buildPlatform("scss");
