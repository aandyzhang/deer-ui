<h1 align="center">
Deer-ui
</h1>

<h4 align="center">
  🦌 deer-ui 一个简单高效轻量级的React组件库
</h4>
<p>
    <a href="https://www.npmjs.com/package/deer-ui" title="npm">
      <img
        src="https://img.shields.io/npm/dm/deer-ui.svg?style=for-the-badge"
        alt="npm"
      />
    </a>
    <a href="https://isitmaintained.com/project/zhangboyang123/deer-ui">
      <img src="https://img.shields.io/github/issues/zhangboyang123/deer-ui.svg?style=for-the-badge" />
    </a>
    <a href="https://github.com/deer-ui/deer-ui">
      <img src="https://img.shields.io/github/stars/zhangboyang123/deer-ui.svg?style=for-the-badge" />
    </a>
  </p>

  <h2>当前版本</h2>
  <p>
    <a href="https://badge.fury.io/js/deer-ui" title="npm">
      <img
        src="https://img.shields.io/npm/v/deer-ui.svg?style=for-the-badge"
        alt="npm version"
      />
    </a>
  </p>

##  预览
- [Deer-ui 组件库文档地址](https://zhangboyang123.github.io/deer-ui)

##  安装
> 使用 npm 
```
npm install deer-ui --D
```

> 使用 yarn
```
yarn add deer-ui
```

## 如何使用
> 1. srcipt引入
  ```
   <script src="https://cdn.jsdelivr.net/npm/deer-ui@1.1.5/dist/index.min.js"></script>
  ```
> 2. 全部引入

```jsx
import React,{Component} from "react"
import { Button } from "deer-ui"
import "deer-ui/dist/deer-ui.min.css"

class App extends Component {
  render(){
    return (
      <Button type="success">deer-ui</Button>
    )
 }
}
```

> 3. 按需引入

```js
import Button from 'deer-ui/es/button';
import 'deer-ui/es/button/style.less';
```

> 4. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```js
// 单独使用在.babelrc.js中配置
module.exports = {
  plugins: [
    ["import", {
      "libraryName": "deer-ui",
      "libraryDirectory": "es",
      "style": true'
    },'deer-ui'], 
  ]
}

// 多个组件库,例如antd
module.exports = {
  plugins: [
    ["import", {
      "libraryName": "deer-ui",
      "libraryDirectory": "es",    
      "style": true            
    },'deer-ui'], 
    
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true  
    },'antd'], 
  ]
}


```
> 5. 配合create-react-app使用按需加载

```js
在babel-loader的options中配置如下

 options: {
    plugins: [
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        style: true
      },'antd'],
      ["import", {
        "libraryName": "deer-ui",
        "libraryDirectory": "es",
        "style": true
      },'deer-ui'],
      
```

##  定制主题

1. Deer-ui使用less作为样式开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。
以下是一些最常用的通用变量，所有样式变量可以在  [这里](https://github.com/zhangboyang123/deer-ui/tree/master/components/styles/themes.less) 找到。
```
@primary-color: #31c27c;   //全局色
@warning-color: #fca130;    //警告色
@error-color: #f93e3e;      //失败色
@success-color: #35C613;    //成功色
@info-color: #61affe;       //信息展示色
@default-color: #d9d9d9;    //默认色
@border-color: #e8e8e8;     //边框颜色
@border-radius: 4px;        //边框圆角
@font-size: 14px;           //默认组件字体大小
@font-size-small: 12px;     //小字体
@font-size-large: 16px;     //大字体
@bg-color: #FAFAFA;         //组件背景色
@font-color: rgba(0, 0, 0, .65);    //字体颜色
@disabled-font-color: fade(@font-color, 30%);  //禁用字体颜色

```
2. 主题定制原理上是使用 less 提供的 modifyVars 的方式进行覆盖变量。使用webpack中配置less-loader的options。注意javascriptEnabled要打开。

```
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       modifyVars: {
+         'primary-color': '#1DA57A',
+         'info-color': '#1DA57A',
+         'font-size': '12px',
+         // or
+         'hack': `true; @import "your-less-file-path.less";`, // 或者引用本地样式文件覆盖
+       },
+       javascriptEnabled: true,
+     },
    }],
  }],
}

注意,定制主题后，less-loader 的处理范围不能过滤掉 node_modules 下的 deer-ui 包。
```

##  更新日志

[CHANGELOG](https://github.com/zhangboyang123/deer-ui/blob/master/CHANGELOG.md)


## ui设计思路

参考 Ant-Design组件库交互和视觉设计，实现AntDesign大部分组件。最终目的是：我全都要😝

## 谁在使用

- 快乐风男
- 我自己
- [自己开源cms后台系统](https://www.webfamily.cn)

## 后续开发计划
1. 第一阶段组件已经开发完毕，基本完成message,input,radio,button,table,checkbox,collapse,tabs,empty.loading,icon,divider等基础组件的开发;完成Deer-ui组件库框架搭建，实现自动化打包部署，增加stylelint,eslint,commitlint,自动生成changelog，组件库测试环境搭建，组件库官方文档网站搭建，以及主题定制等功能。
2. 后续增加组件库的自动化测试，国际化功能。
3. 继续完成后面组件的开发。
4. 最后畅想下，使用ts完成组件库的重构。

## 开发组件

> 请首先安装 node,npm


1. 安装依赖

```
git clone https://github.com/zhangboyang123/deer-ui

cd deer-ui


npm install --registry https://registry.npm.taobao.org 

```
2. 调试组件，组件库提供两种方案

```js
1.第一种
  源码中搭建了一个react环境，在example文件夹下，使用npm run dev，即可打开调试环境，引入编写的组件即可.
2.第二种
  源码中搭建了一套组件库的文档部署环境，使用命令npm run storybook，即可进入文档模式，引入编写的组件即可.
  
 import { Button, Tabs } from "../../src";
 import '../components/button/style.less';
```
3. 开发一个组件
    以Button组件为例子  cd components 目录下，新建文件夹button,在下面创建Button.js,index.js,style.less三个文件夹 

例如Button.js
```js
创建button.js
class Button extends Component {
    render(){
        reurn <div>button</div>
    }
}
export default Button;

在components文件夹下index.js中导出该组件

export { default as Button } from './button';
```
4.发布

框架提供了自动化发布命令，打包，发版，lint,日志等功能，命令如下
```js
npm run pub:prod    //自动完成css，js,es,lin,umd打包，自动生成changelog,发布npm仓库，为修订版版本号。1.0.*

npm run pub:major  //都会完成上述不同，唯一区别是，打的npm版本号不同，此命令是打主版本号，不经常用 *.0.0

npm run pub:minor  //都会完成上述不同，唯一区别是，打的npm版本号不同，此命令是打次版本号，不经常用 1.*.0

发布组件库文档，框架提供两种方式

1.执行npm run pub:docs   //采用storybook的方式去发布

2.npm run deploy  //该命令会执行脚本deploy.sh文件，打包并发布组件库文档

```

版本号区别查看文章[npm如何管理依赖包的版本](https://www.jianshu.com/p/1470c5d7b8c3)

## 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [cuke-ui](https://github.com/cuke-ui/cuke-ui)
- [zarm-web](https://github.com/JeromeLin/zarm-web)


##  License

[MIT](https://github.com/zhangboyang123/deer-ui/blob/master/LICENSE)

