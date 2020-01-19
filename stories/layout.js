import React from "react";
import { storiesOf } from "@storybook/react";
import { CodeView, Row, Col,Layout } from "../components";
require("../components/row/style.less");
require("../components/col/style.less");
require("../components/layout/style.less");
require("./style/grid.less");
require("../components/codeview/style.less");
storiesOf("布局组件", module).add("栅格布局", () => (
  <div>
    <h4>基本使用</h4>
    <p>使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。</p>
    <div style={{ marginBottom: "30px" }}>
      <Row className="row">
        <Col span={24} className="col">
          <span>col-24</span>
        </Col>
      </Row>
      <Row className="row" gutter={0}>
        <Col span={12} className="col">
          <span>col-12</span>
        </Col>
        <Col span={12} className="col">
          <span>col-12</span>
        </Col>
      </Row>
      <Row className="row" gutter={0}>
        <Col span={8} className="col">
          <span>col-8</span>
        </Col>
        <Col span={8} className="col">
          <span>col-8</span>
        </Col>
        <Col span={8} className="col">
          <span>col-8</span>
        </Col>
      </Row>
      <Row className="row" gutter={0}>
        <Col span={2} className="col">
          <span>col-2</span>
        </Col>
        <Col span={10} className="col">
          <span>col-10</span>
        </Col>
        <Col span={6} className="col">
          <span>col-6</span>
        </Col>
        <Col span={6} className="col">
          <span>col-6</span>
        </Col>
      </Row>
    </div>
    <CodeView
      value={`
        import { Row, Col } from 'deer-ui'
        <Row className="row">
        <Col span={24} className="col">
          <span>col-24</span>
        </Col>
      </Row>
      <Row className="row" gutter={0}>
        <Col span={12} className="col">
          <span>col-12</span>
        </Col>
        <Col span={12} className="col">
          <span>col-12</span>
        </Col>
      </Row>
      <Row className="row" gutter={0}>
        <Col span={8} className="col">
          <span>col-8</span>
        </Col>
        <Col span={8} className="col">
          <span>col-8</span>
        </Col>
        <Col span={8} className="col">
          <span>col-8</span>
        </Col>
      </Row>
      <Row className="row" gutter={0}>
        <Col span={2} className="col">
          <span>col-2</span>
        </Col>
        <Col span={10} className="col">
          <span>col-10</span>
        </Col>
        <Col span={6} className="col">
          <span>col-6</span>
        </Col>
        <Col span={6} className="col">
          <span>col-6</span>
        </Col>
      </Row>
      `}
    ></CodeView>
    <h4>gutter区块间隔</h4>
    <p>栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)</p>
    <div style={{ marginBottom: "30px" }}>
      <Row className="row" gutter={32}>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
      </Row>
      <Row className="row" gutter={16}>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
      </Row>
    </div>
    <CodeView
      value={`
        import { Row, Col } from 'deer-ui'
        <Row className="row" gutter={16}>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
        <Col span={8} className="col">
          <span>8</span>
        </Col>
      </Row>
      `}
    ></CodeView>
      <h4>左右偏移</h4>
      <h5>列偏移</h5>
    <p>使用 offset 可以将列向右侧偏。例如，offset={8} 将元素向右侧偏移了 8 个列（column）的宽度。</p>
    <div style={{ marginBottom: "30px" }}>
        <Row className="row">
            <Col span={8} className="col">
                <span> col-8</span>
            </Col>
            <Col span={8} offset={8} className="col">
               <span> col-offset-8</span>
            </Col>
        </Row>
        <Row className="row">
            <Col span={6} className="col">
                <span> col-6</span>
            </Col>
            <Col span={6} offset={12} className="col">
               <span> col-offset-12</span>
            </Col>
        </Row>
    </div>
    <CodeView
      value={`
        import { Row, Col } from 'deer-ui'
        <Row className="row">
        <Col span={8} className="col"><span> col-8</span></Col>
        <Col span={8} offset={8} className="col">
           <span> col-8</span>
        </Col>
        </Row>
      `}
    ></CodeView>
  </div>
))
.add("layout布局", () => (
    <div>
      <h4>默认宽度-1200px</h4>
      <p>layout组件，所有组件需包裹在该组件下。</p>
      <div style={{ marginBottom: "30px" }}>
        <Layout>Layout </Layout>
      </div>
      <CodeView
        value={`
          import { Layout } from 'deer-ui'
          <Layout>Layout </Layout>
        `}
      ></CodeView>
     <h4>设置容器宽度</h4>
      <div style={{ marginBottom: "30px" }}>
        <Layout width={1000}>Layout </Layout>
      </div>
      <CodeView
        value={`
          import { Layout } from 'deer-ui'
          <Layout width="1000">Layout </Layout>
        `}
      ></CodeView>
     <h4>容器居中</h4>
      <div style={{ marginBottom: "30px" }}>
        <Layout width={800} center={true}>Layout </Layout>
      </div>
      <CodeView
        value={`
          import { Layout } from 'deer-ui'
          <Layout width={800} center={true}>Layout </Layout>
        `}
      ></CodeView>
    </div>
  ))
