module.exports = api => {
  const isTest = api.env('test');

  const presets = ['module:metro-react-native-babel-preset'];
  if (isTest) {
    presets.concat([
      ['@babel/preset-env', {targets: {node: 'current'}}],
      [
        'module:@babel/plugin-proposal-private-property-in-object',
        {loose: true},
      ],
    ]);
  }

  return {
    presets,
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      'tailwindcss-react-native/babel',
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@api': ['./src/api'],
            '@constants': './src/constants',
            '@configs': ['./src/configs'],
            '@utils': ['./src/utils'],
            '@ui': ['./src/ui'],
          },
        },
      ],
    ],
  };
};
