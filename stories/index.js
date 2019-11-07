import React from "react";
import { storiesOf } from "@storybook/react";
const { name, repository } = require("../package.json");
import { FaGithub } from "react-icons/fa";
// import Button from "../src/components/button";
import ReactMarkDown from "react-markdown";
import CodeBlock from "./codeBlock";
import startMd from './markdown/start.md'

storiesOf("综述", module)
  .add("介绍", () => (
    <article style={{ padding: 20 }}>
      <h1 style={{ fontSize: 40, padding: 0, margin: 0 }}>
        {name}

        <a href={repository} target="_blank" style={{ marginLeft: 20 }}>
          <FaGithub style={{ fontSize: 30, color: "#444" }} />
        </a>
      </h1>
      <p>
        <img src="https://cdn.lijinke.cn/logo.png" width={120} />
      </p>
      <p>
        <a href="https://www.npmjs.com/package/cuke-ui" title="npm">
          <img
            src="https://img.shields.io/npm/dm/cuke-ui.svg?style=for-the-badge"
            alt="npm"
          />
        </a>
        {"  "}
        <a href="https://isitmaintained.com/project/cuke-ui/cuke-ui">
          <img src="https://img.shields.io/github/issues/cuke-ui/cuke-ui.svg?style=for-the-badge" />
        </a>
        {"  "}
        <a href="https://github.com/cuke-ui/cuke-ui">
          <img src="https://img.shields.io/github/stars/cuke-ui/cuke-ui.svg?style=for-the-badge" />
        </a>
      </p>

      <h2>当前版本</h2>
      <p>
        <a href="https://badge.fury.io/js/cuke-ui" title="npm">
          <img
            src="https://img.shields.io/npm/v/cuke-ui.svg?style=for-the-badge"
            alt="npm version"
          />
        </a>
      </p>

      <h2>在线示例</h2>
      <iframe
        src="https://codesandbox.io/embed/nn6yr2m94?autoresize=1&hidenavigation=1"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h2>名字由来</h2>
      <p>
        cuke(黄瓜), 常见的一种蔬菜,
        希望这个项目也成为常见的一个依赖(虽然这是不可能的), 其中黄瓜也符合
        这个组件库的 宗旨 : 即插即用 其次 cuke 谐音 (cool ke) 很酷的李金珂的
        意思 主题色 采用 黄瓜绿, 清新又可爱, 组件借鉴(抄袭)了 有牌面的 Ant
        Design, 抱着学习的目的,开发了这个组件库,
        所以建议不要用于生产环境,可能心情不好就不维护了
      </p>

      <h2>参考轮子</h2>
      <ul>
        <li>
          <a href="https://github.com/ant-design/ant-design">Ant-Design</a>
        </li>
        <li>
          <a href="https://github.com/FrankFang/gulu">gulu</a>
        </li>
        <li>
          <a href="https://github.com/JeromeLin/dragon-ui">dragon-ui</a>
        </li>
      </ul>
    </article>
  ))
  .add("按钮", () => (
    <div>
      {/* <Button>按钮</Button>
      <Button type="success">按钮</Button> */}
      <ReactMarkDown
        source={startMd}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  ))
  .add("使用说明", () => (
    <div className="change-log">
      <ReactMarkDown
        source={startMd}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  ));
