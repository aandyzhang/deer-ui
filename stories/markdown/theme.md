# 主题定制
Deer-ui 默认提供了一套UI主题，并且可以在一定程度上自定义新主题，满足自定义业务需求。
### 定制原理
主题定制原理上是使用 less 提供的 modifyVars 的方式进行覆盖变量。使用webpack中配置less-loader的options。注意javascriptEnabled要打开。

## Deer-ui样式变量

Deer-ui使用less作为样式开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。
以下是一些最常用的通用变量，但不仅限于此。所有样式变量可以在  [这里](https://github.com/zhangboyang123/deer-ui/tree/master/components/styles/themes.less) 查看。

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

### 在webpack中定制
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

注意,定制主题后，less-loader 的处理范围不能过滤掉 node_modules 下的 deer-ui 包，负责组件样式不生效。
```
