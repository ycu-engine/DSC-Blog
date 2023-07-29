/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:jsdoc/recommended-typescript-error',
  ],
  plugins: ['jsdoc'],
  rules: {
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
  },
}
