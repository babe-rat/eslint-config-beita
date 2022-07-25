module.exports = {
    extends: ['plugin:@typescript-eslint/recommended'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    String: false,
                    Boolean: false,
                    Number: false,
                    Symbol: false,
                    '{}': false,
                    Object: false,
                    object: false,
                    Function: false,
                },
                extendDefaults: true,
            },
        ],
        '@typescript-eslint/no-this-alias': 'off',
    },
}
