<h1 align="center">
Deer-ui
</h1>

<h4 align="center">
Deer UI : 一个可插拔，轻量级的 React 组件库
</h4>



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
import "deer-ui/dist/main.min.css"

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
import Button from 'deer-ui/es/components/button';
import 'deer-ui/es/components/button/style.scss';
```

> 3. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```js
// 单独使用在.babelrc.js中配置
module.exports = {
  plugins: [
    ["import", {
      "libraryName": "deer-ui",
      "libraryDirectory": "es",
      "style": 'scss'
    },'deer-ui'], 
  ]
}

// 多个组件库,例如antd
module.exports = {
  plugins: [
    ["import", {
      "libraryName": "deer-ui",
      "libraryDirectory": "lib",    //deer-ui是从lib目录下导入
      "style": 'scss'               
    },'deer-ui'], 
    
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true     //或者‘css’
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
        style: "css"
      },'antd'],
      ["import", {
        "libraryName": "deer-ui",
        "libraryDirectory": "lib",
        "style": 'scss'
      },'deer-ui'],
      
```

## ui设计思路

参考 Ant-Design组件，实现ant大部分组件，以及后期编写一些有创意的组件

## 谁在使用

- 快乐风男
- 我自己
- [自己的cms系统](https://www.webfamily.cn)

## 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [cuke-ui](https://github.com/cuke-ui/cuke-ui)
- [zarm-web](https://github.com/JeromeLin/zarm-web)


## 开发组件

> 请首先安装 node,npm,默认大家安装好了


1. 安装依赖

```
git clone https://github.com/zhangboyang123/deer-ui

cd deer-ui

使用淘宝镜像，安装能快点
npm install --registry https://registry.npm.taobao.org 

```
2. 启动项目

```js
npm run dev    //程序在3000端口启动
```
3. 开发一个组件
    以Button组件为例子  cd src/components 目录下，新建文件夹button,然后在下面创建Button.js,index.js,style.scss三个文件夹

例如Button.js
```js
创建button.js
class Button extends Component {
    render(){
        reurn <div>button</div>
    }
}
export default Button;

在src文件夹下index.js中导出该组件

export { default as Button } from './components/button';
```

4. 如何调试组件
```js
找到example文件夹，在app.js中引入刚写好的的组件

import { Button, Tabs } from "../../src";

这样就可以大功告成
```
##  License

[MIT](https://github.com/cuke-ui/cuke-ui/blob/master/LICENSE)

