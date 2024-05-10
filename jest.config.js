/** @type {import('ts-jest').JestConfigWithTsJest} */
// export default {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   transform: {
//     // "^.+\\.tsx?$": "ts-jest",
//     "^.+\\.scss$": "jest-css-modules-transform",
//     '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.jest.js' }],
//   },
//   moduleNameMapper: {
//     "\\.(css|less|sass|scss)$": "identity-obj-proxy",
//   },
// };





export default {
  // ...other Jest configuration options
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ['./setup-tests.js'],
};