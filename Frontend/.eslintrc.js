module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    'max-len': ['error', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'linebreak-style': 0,
    'lines-between-class-members': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'implicit-arrow-linebreak': 0,
    "no-param-reassign": 0,
  },
};
