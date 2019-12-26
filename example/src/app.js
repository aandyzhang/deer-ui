import React from "react";
import { Button, Tabs } from "../../components";
// require("./index.css");
const TabPane  = Tabs.TabPane
function App() {
  return (
    <div className="App">
      <Button type="success">按钮</Button>
      <Tabs defaultKey="1">
        <TabPane key="1" tab="最新文章">
          阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台
        </TabPane>
        <TabPane key="2" tab="最热文章">
          [译] 为什么 React Suspense 将会逆转 Web 应用开发的游戏规则 ？
        </TabPane>
        <TabPane key="3" tab="文章排行">
          闲鱼又一企业级巨著《Flutter in action》开放下载
        </TabPane>
        <TabPane key="4" tab="热门话题">
          MySQL 是怎样运行的：从根儿上理解 MySQL
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
