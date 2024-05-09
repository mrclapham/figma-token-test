import { fileURLToPath } from 'url';
import { dirname } from 'path';
import styleXPlugin from '@stylexjs/babel-plugin';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


export default {
  plugins: [
    [
      styleXPlugin,
      {
        dev: true,
        // Set this to true for snapshot testing
        // default: false
        test: true,
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: 'commonJS',
          // The absolute path to the root directory of your project
          rootDir: dirname(fileURLToPath(import.meta.url)),
        },
      },
    ],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ]
};