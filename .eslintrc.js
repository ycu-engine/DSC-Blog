/**
 * ESLintの設定
 * -
 * - JSDocの入力を必須に @see https://zenn.dev/wakamsha/articles/setup-eslint-plugin-jsdoc
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:jsdoc/recommended-typescript-error',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['jsdoc'],
  rules: {
    /** eslint-plugin-jsdoc */
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: true,

        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
        ],
      },
    ],
    'jsdoc/require-param': [
      'error',
      {
        checkDestructuredRoots: false,
      },
    ],
    'jsdoc/require-description': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'ClassDeclaration',
          'ClassExpression',
          'FunctionDeclaration',
          'FunctionExpression',
          'MethodDefinition',
          'PropertyDefinition',
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
        ],
      },
    ],
    'jsdoc/require-returns': 'off',
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['typescript', 'remarks'],
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    /** Airbnbのルールを上書き */
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
  },
}
