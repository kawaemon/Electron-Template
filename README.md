# Electron-Template

Electron の開発環境を毎回整えるのが辛くなってきたので、自分がよく使う構成でテンプレートを作りました。
[`electron-webpack-quick-start`](https://github.com/electron-userland/electron-webpack-quick-start)
がベースです。

## 使用させていただいた主なパッケージ

- Electron
- Webpack
- ESLint
- Prettier
- Typescript
- React
- Material-ui

## Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```
