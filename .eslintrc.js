module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'constants',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'configs',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'ui',
            group: 'internal',
          },
          {
            pattern: 'assets',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
      },
    ],
  },
  overrides: [
    {
      env: {
        jest: true,
      },
    },
  ],
};
