## 国际化
---
deer-ui 目前的默认文案是中文，如果需要使用其他语言，可以参考下面的方案。

## 如何使用

deer-ui 提供了一个 React 组件 ConfigProvider 用于全局配置国际化文案。


```js

import { LocaleProvider } from "deer-ui"
import zhCN from 'deer-ui/es/locale/lang/zh_cn';
return (
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>
);

```
注： 目前支持中文和英文
