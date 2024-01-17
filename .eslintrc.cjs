const { configure, presets } = require('eslint-kit');

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  presets: [
    presets.imports({
      sort: {
        newline: 'always',
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Library imports
          ['^[^@\\.]'],
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    }),
    presets.prettier({
      trailingComma: 'es5',
      arrowParens: 'always',
      bracketSpacing: true,
      endOfLine: 'lf',
      insertPragma: false,
      proseWrap: 'preserve',
      quoteProps: 'as-needed',
      semi: true,
      semicolons: true,
      singleQuote: true,
      tabWidth: 2,
    }),
    presets.react({ version: 'detect' }),
    presets.typescript({ tsconfig: 'tsconfig.json' }),
    presets.node(),
  ],
  extend: {
    rules: {
      'unicorn/no-nested-ternary': 'off',
    },
  },
});
