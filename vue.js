module.exports = {
    extends: ['plugin:vue/vue3-essential'],
    rules: {
        'vue/no-v-html': 'off',
        'vue/attributes-order': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index'],
            },
        ],
        'vue/html-indent': ['error', 4],
    },
}
