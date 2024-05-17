import { shortTokens } from './mocks/theme.json.mock';
import { extractObjectsWithKeys } from './tailwindConfigBuilder';

describe('tailwindConfigBuilder', () => {
    describe('objectHasTypeKey', () => { 
        const result = extractObjectsWithKeys(shortTokens, 'type');
        it('should return an array', () => {
            expect(result.length).toEqual(18);

            const expectedResults = [{
                keyTitle: "source-sans-pro",
                type: "fontFamilies",
                value: "Source Sans Pro",
              }];
            expect(result).toEqual(expect.arrayContaining(expectedResults));
        });

    });

});