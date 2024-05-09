import { processToken } from './processToken';

const preProcess = {
    "core": {
      "size": {
        "sm": {
          "value": "15",
          "type": "sizing",
          "filePath": "tokens/tokens.json",
          "isSource": true,
          "original": {
            "value": "15",
            "type": "sizing"
          },
          "name": "CoreSizeSm",
          "attributes": {
            "category": "core",
            "type": "size",
            "item": "sm"
          },
          "path": [
            "core",
            "size",
            "sm"
          ]
        },
        "md": {
          "value": "20",
          "type": "sizing",
          "filePath": "tokens/tokens.json",
          "isSource": true,
          "original": {
            "value": "20",
            "type": "sizing"
          },
          "name": "CoreSizeMd",
          "attributes": {
            "category": "core",
            "type": "size",
            "item": "md"
          },
          "path": [
            "core",
            "size",
            "md"
          ]
        },
        "lg": {
          "value": "30",
          "type": "sizing",
          "filePath": "tokens/tokens.json",
          "isSource": true,
          "original": {
            "value": "30",
            "type": "sizing"
          },
          "name": "CoreSizeLg",
          "attributes": {
            "category": "core",
            "type": "size",
            "item": "lg"
          },
          "path": [
            "core",
            "size",
            "lg"
          ]
        }
      },
      "color": {
        "primary": {
          "value": "#1df705",
          "type": "color",
          "filePath": "tokens/tokens.json",
          "isSource": true,
          "original": {
            "value": "#1df705",
            "type": "color"
          },
          "name": "CoreColorPrimary",
          "attributes": {
            "category": "core",
            "type": "color",
            "item": "primary"
          },
          "path": [
            "core",
            "color",
            "primary"
          ]
        },
        "secondary": {
          "value": "#a2dd13",
          "type": "color",
          "filePath": "tokens/tokens.json",
          "isSource": true,
          "original": {
            "value": "#a2dd13",
            "type": "color"
          },
          "name": "CoreColorSecondary",
          "attributes": {
            "category": "core",
            "type": "color",
            "item": "secondary"
          },
          "path": [
            "core",
            "color",
            "secondary"
          ]
        }
      }
    },
    "$themes": [],
    "$metadata": {
      "tokenSetOrder": [
        "core"
      ]
    }
  }

const postProcess = {
    "core": {
        "size": {
            "sm": 15,
            "md": 20,
            "lg": 30
        },
        "color": {
            "primary": "#1df705",
            "secondary": "#a2dd13"
        }
    }
}
  
describe(
    "processToken", () => {
        it("should process tokens", () => {
            expect(processToken(preProcess)).toEqual(postProcess);
        });
    }
)

