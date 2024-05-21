import { shortTokens } from './mocks/theme.json.mock';
import { extractObjectsWithKeys, extractTopLevelElements, extractTypes, groupItemsByParent, tailwindConfigBuilder } from './tailwindConfigBuilder';

describe('tailwindConfigBuilder', () => {
    describe('extractTopLevelElements', () => {
        const result = extractTopLevelElements(shortTokens) as unknown as { keyTitle: string; parent: string | null; }[];
        it('should return an array', () => {
            const topLevelValue = {
                keyTitle: "Tertiary 90%",
                parent : null,
                value: "#fdcc4ae6",
                type: "color",
            };

            const nestedValue = {
                   keyTitle: "Secondary 90%",
                    parent: "Secondary",
                    type: "color",
                    value: "#fdcc4ae6",
                  }


            const topLevel = result.filter((item) => item.keyTitle === "Tertiary 90%");
            const nestedLevel = result.filter((item) => item.keyTitle === "Secondary 90%");

            expect(topLevel).toEqual(expect.arrayContaining([topLevelValue]));
            expect(nestedLevel).toEqual(expect.arrayContaining([nestedValue]));
        });
    });
    describe('objectHasTypeKey', () => { 
        const result = extractObjectsWithKeys(shortTokens, 'type');
        const keys = result.map((d: Record<string, unknown>) => d.type || null);
        it('should return an array', () => {
            expect(result.length).toEqual(19);

            const expectedResults = [{
                keyTitle: "source-sans-pro",
                type: "fontFamilies",
                value: "Source Sans Pro",
              }];
            expect(result).toEqual(expect.arrayContaining(expectedResults));
        });
        it.each([keys])('should return an array of strings', (key) => {
            expect(keys).toEqual(expect.arrayContaining([key]));
        }   );
    });

    describe('extractTypes', () => {
        const result = extractTypes(shortTokens, 'color');

        it('should return an array of colors', () => {
            const color = result.map((d) => d.type || null);
            expect(result.length).toEqual(5);
            expect(color).toEqual(expect.arrayContaining(['color']));
        });
    });

    describe('groupItemsByParent', () => { 
        it('should return an object with parent keys', () => {
            const extractedTypes = extractTypes(shortTokens, 'color');
            expect(extractedTypes.length).toEqual(5);

            const result = groupItemsByParent(extractedTypes);
            expect(result).toEqual(
                expect.objectContaining({
                    primary: expect.objectContaining({ 100: "#e86c00", "90": "#e86c00e6" }),
                    secondary: expect.objectContaining({ 100: "#fdcc4a", "90": "#fdcc4ae6" }),
                    tertiary90: "#fdcc4ae6" 
                })
            );
        });
    });

    describe('tailwindConfigBuilder', () => {
        const result = tailwindConfigBuilder(shortTokens, 'color');
        const keys = Object.keys(result);
        it('should return an object', () => {
            expect(keys).toEqual(expect.arrayContaining(['colors']));
            expect(keys.length).toEqual(1);
        });
    }); 

    
});