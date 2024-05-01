import StyleDictionary from "style-dictionary";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  source: [resolve(__dirname, "tokens.json")],
  platforms: {
    scss: {
      transformGroup: "scss",
      prefix: "sd",
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

const sd = StyleDictionary.extend(config);

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
