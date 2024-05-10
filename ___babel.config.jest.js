import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import styleXPlugin from 'vite-plugin-stylex';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// export default {
//   plugins: [
//     [
//       styleXPlugin,
//       {
//         dev: true,
//         // Set this to true for snapshot testing
//         // default: false
//         test: true,
//         // Required for CSS variable support
//         unstable_moduleResolution: {
//           // type: 'commonJS' | 'haste'
//           // default: 'commonJS'
//           type: 'commonJS',
//           // The absolute path to the root directory of your project
//           rootDir: dirname(fileURLToPath(import.meta.url)),
//         },
//       },
//     ],
//   ],
//   presets: [
//     '@babel/preset-env',
//     '@babel/preset-react',
//     '@babel/preset-typescript',
//   ]
// };


export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: true,
        test: true,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: dirname(fileURLToPath(import.meta.url)),
        },
      },
    ],
  ],
};