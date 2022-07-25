# eslint-config-beita

ESLint config for React/Vue/TypeScript projects

## 安装

```shell
pnpm add @baberat/eslint-config-beita -D
```

## 使用

.eslintrc.js

### javascript

```js
module.exports = {
    extends: ['@baberat/beita'],
    rules: {},
}
```

### typescript + vue

```js
module.exports = {
    extends: ['@baberat/beita', '@baberat/beita/typescript', '@baberat/beita/vue'],
    rules: {},
}
```

### typescript + react

```js
module.exports = {
    extends: ['@baberat/beita', '@baberat/beita/typescript', '@baberat/beita/react'],
    rules: {},
}
```
