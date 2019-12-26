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

> 1. 全部引入

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

> 2 .按需引入

```js
import Button from 'deer-ui/es/button';
import 'deer-ui/es/button/style.less';
```

> 3. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

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
> 4.配合create-react-app使用按需加载

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

## ui设计思路

参考 Ant-Design组件，基本实现AntDesign大部分组件，后续自己在编写其他组件，计划后面使用ts重构组件库

## 谁在使用

- 快乐风男
- 我自己
- [自己的cms系统](https://www.webfamily.cn)

## 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [cuke-ui](https://github.com/cuke-ui/cuke-ui)
- [zarm-web](https://github.com/JeromeLin/zarm-web)


## 开发组件

> 请首先安装 node,npm


1. 安装依赖

```
git clone https://github.com/zhangboyang123/deer-ui

cd deer-ui

使用淘宝镜像
npm install --registry https://registry.npm.taobao.org 

```
2. 调试组件，组件库提供两种方案

```js
1.第一种
  源码中搭建了一个react环境，在examplewe文件夹下，使用npm run dev，即可打开调试环境，引入编写的组件即可.
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
npm run pub:dev    //自动完成css，js,es,lin,umd打包，自动生成changelog,发布npm仓库，是打修订号

npm run pub:prod  //都会完成上述不同，唯一区别是，打的npm版本号不同，此命令是打主版本号，不经常用

发布组件库文档，框架提供两种方式

1.执行npm run pub:docs   //采用storybook的方式去发布

2.npm run deploy  //该命令会执行脚本deploy.sh文件，打包并发布组件库文档

```
版本号区别查看文章[npm如何管理依赖包的版本](https://www.jianshu.com/p/1470c5d7b8c3)
##  License

[MIT](https://github.com/zhangboyang123/deer-ui/blob/master/LICENSE)

