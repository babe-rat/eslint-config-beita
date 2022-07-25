module.exports = {
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 2020,
        // ECMAScript modules 模式
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    rules: {
        'no-new': 'off',
        'no-shadow': 'off',
        'no-bitwise': 'off',
        'func-names': 'off',
        'no-plusplus': 'off',
        'default-case': 'off',
        'prefer-template': 'off',
        'consistent-return': 'off',
        'no-param-reassign': 'off',
        'no-nested-ternary': 'off',
        'no-underscore-dangle': 'off',
        'no-restricted-syntax': 'off',
        'no-unused-expressions': 'off',
        'no-restricted-globals': 'off',
        'class-methods-use-this': 'off',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'arrow-body-style': 'off',
        camelcase: 'off',
        'guard-for-in': 'off',
        'global-require': 'off',
        'prefer-destructuring': 'off',
        // eslint-plugin-import
        'import/order': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-dynamic-require': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
}
