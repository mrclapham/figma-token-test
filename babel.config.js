let isTest
    
try {
    // eslint-disable-next-line no-undef
    if(process.env.NODE_ENV === 'test'){
        isTest = true
    }
}catch(e){
    isTest = false
}

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
        test: isTest,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: new URL('.', import.meta.url).pathname,
        },
      },
    ],
  ],
};