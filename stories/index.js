import React from "react";
import { storiesOf } from "@storybook/react";
const { name, repository } = require("../package.json");
import { FaGithub } from "react-icons/fa";
import ReactMarkDown from "react-markdown";
import CodeBlock from "./codeBlock";
import startMd from './markdown/start.md';
import themeMd from './markdown/theme.md';
import LanguageMd from './markdown/language.md';
import changeLogMd from '../CHANGELOG.md';
require('./style/index.less');
storiesOf("综述", module)
  .add("介绍", () => (
    <article style={{ padding: 20 }}>
      <h1 style={{ fontSize: 40, padding: 0, margin: 0 }}>
        <span style={{fontSize: "40px",marginRight: "20px"}}>🦌</span>{name}

        <a href={repository} target="_blank" style={{ marginLeft: 20 }}>
          <FaGithub style={{ fontSize: 30, color: "#444" }} />
        </a>
      </h1>
      <p>
        <a href="https://www.npmjs.com/package/deer-ui" title="npm">
          <img
            src="https://img.shields.io/npm/dm/deer-ui.svg?style=for-the-badge"
            alt="npm"
          />
        </a>
        {"  "}
        {/* <a href="https://isitmaintained.com/project/zhangboyang123/deer-ui">
          <img src="https://img.shields.io/github/issues/zhangboyang123/deer-ui.svg?style=for-the-badge" />
        </a> */}
         <a href="https://badge.fury.io/js/deer-ui" title="npm">
          <img
            src="https://img.shields.io/npm/v/deer-ui.svg?style=for-the-badge"
            alt="npm version"
          />
        </a>
        {"  "}
        <a href="https://github.com/zhangboyang123/deer-ui">
          <img src="https://img.shields.io/github/stars/zhangboyang123/deer-ui.svg?style=for-the-badge" />
        </a>
      </p>
      <p>
        <a href="https://travis-ci.com/zhangboyang123/deer-ui" title="npm">
          <img src="https://travis-ci.com/zhangboyang123/deer-ui.svg?branch=master" alt="travis"/>
        </a>
        <a href="https://coveralls.io/github/zhangboyang123/deer-ui?branch=master?style=for-the-badge" title="Coverage Status">
          <img src="https://coveralls.io/repos/github/zhangboyang123/deer-ui/badge.svg?branch=master" alt="Coverage Status"/>
        </a>
        <a href="https://david-dm.org/zhangboyang123/deer-ui" title="dependencies status">
          <img src="https://david-dm.org/zhangboyang123/deer-ui/status.svg"/>
        </a>
      </p>
      <h3>deer-ui 一个简单高效轻量级的React组件库</h3>
      <h2>当前版本</h2>
      <p>
        <a href="https://badge.fury.io/js/deer-ui" title="npm">
          <img
            src="https://img.shields.io/npm/v/deer-ui.svg?style=for-the-badge"
            alt="npm version"
          />
        </a>
      </p>
      <h2>源码地址</h2>
      <p>
        <a href="https://github.com/zhangboyang123/deer-ui/" title="Deer-ui">Deer-ui</a>
      </p>

      <h2>问题</h2>
      <p>
        如果你在使用deer-ui时遇到了问题,
        欢迎 给我提
        <a href="https://github.com/zhangboyang123/deer-ui/issues"> Issue</a> 或{" "}
        <a href="https://github.com/zhangboyang123/deer-ui/pulls">Pull Request</a>
      </p>

      <h2>组件库设计思路</h2>
      <p>参考 Ant-Design组件库交互和视觉设计，实现AntDesign大部分组件。最终目的是：你有的我也有，而且我全都要😝</p>
      <h2>谁在使用</h2>
      <ul>
        <li> - 我自己 </li>
        <li> - 快乐风男 </li>
        <li>
          {" "}
          - <a href="https://www.webfamily.cn">自己开源cms系统</a>
        </li>
      </ul>

      <h2>参考轮子</h2>
      <ul>
        <li>
          <a href="https://github.com/ant-design/ant-design">Ant-Design</a>
        </li>
        <li>
          <a href="https://github.com/cuke-ui/cuke-ui">cuku-ui</a>
        </li>
        <li>
          <a href="https://github.com/JeromeLin/zarm-web">zarm-web</a>
        </li>
        <li>
          <a href="">vant</a>
        </li>
      </ul>
    </article>
  ))
  .add("快速上手", () => (
    <div>
      <ReactMarkDown
        source={startMd}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  ))
  .add('主题定制',()=> (
    <div>
       <ReactMarkDown
        source={themeMd}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  ))
  .add('国际化',()=> (
    <div>
       <ReactMarkDown
        source={LanguageMd}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  ))
  .add('更新日志',()=> (
    <div>
       <ReactMarkDown
        source={changeLogMd}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  ))
