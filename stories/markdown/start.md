# 快速上手
---

## 安装

使用 npm 
```
npm install deer-ui --D
```

使用 yarn
```
yarn add deer-ui
```


## 如何使用
1. srcipt引入

  ```js
   <script src="https://cdn.jsdelivr.net/npm/deer-ui@1.1.5/dist/index.min.js"></script>
   如果不是最新版本手动修改版本号，获取最新cdn代码
  ```
2. 全部引入

```js
import React from "react"
import { Button } from "deer-ui"
import "deer-ui/dist/deer-ui.min.css"

class Demo extends React.Component {
  render(){
    return (
      <Button type="success">deer-ui</Button>
    )
  }
}
```

3. 按需引入

```js
import Button from 'deer-ui/lib/button';
import 'deer-ui/lib/button/style.less';
```

4. 使用 babel-plugin-import

```js
// .babelrc.js
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "deer-ui",
      "libraryDirectory": "es",
      "style": true
    },'deer-ui'], 
  ]
}

// 引入多个组件库
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "deer-ui",
      "libraryDirectory": "es",
      "style": true
    },'deer-ui'], 
    
    ["babel-plugin-import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    },'antd'], 
  ]
}
```

