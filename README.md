# smile-html

> html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# smile-smile-html

# npm run dev

# 一、新建组件

## 1.新建components/toast-->toast.vue + index.js
## 2.src/index.js 引入并注册新建的组件

# 二、打包+发布

## 1.打包npm run build
## 2.package.json修改版本号version(重要！重要！重要！)
## 3.npm adduser/npm login（登录npm）
## 4.发布 npm publish --access=public

# 三、下载(发布完要等会再下载)

## 1.cnpm install smile-html@1.0.0 --save/下载最新版cnpm install smile-html@latest --save
## 2.npm run dev

# 四、使用

# 1.npm 引入
## （1）import smile-html from 'smile-html';
## （2）import 'smile-html/dist/smile-html.min.css';
## （3）'pay-keyboard':smile-html.PayKeyboard,

# 2.本地引入
## （1）import payKeyboard from '@/components/payKeyboard/payKeyboard';
## （2）'pay-keyboard':payKeyboard

