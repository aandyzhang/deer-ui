import React from "react";
import { storiesOf } from "@storybook/react";
import { CodeView, Spin, Message,Button } from "../components";
import {
  SuccessIcon,
  CloseIcon,
  UserIcon
  //   WarningIcon
} from "../components/icon";
import './style/feedback.less';
import "../components/button/style.less";
import "../components/spin/style.less";
import "../components/message/style.less";
import "../components/codeview/style.less";
import "../components/codeview/style.less";
storiesOf("操作反馈", module)
  .add("Spin 加载中", () => (
    <div>
      <h4>基本使用</h4>
      <div style={{ marginBottom: "30px" }}>
        <Spin />
      </div>
      <CodeView
        value={`
        import { Spin } from 'deer-ui'
        <Spin />
      `}
      ></CodeView>
      <h4 style={{ marginTop: "40px" }}>在容器中使用</h4>
      <div>
        <Spin spinning={true} tip="加载中...">
          <div
            style={{
              marginBottom: "30px",
              height: "200px",
              borderColor: "#fca130"
            }}
          >
            deer-ui是一个轻量级可插拔的react组件库
          </div>
        </Spin>
      </div>
      <CodeView
        value={`
        import { Spin } from 'deer-ui'
        <Spin spinning={true} tip="加载中...">
            <div style={{ marginBottom: "30px",height: "200px",borderColor: '#fca130'}}>
                deer-ui是一个轻量级可插拔的react组件库
            </div>
        </Spin>
      `}
      ></CodeView>
      <h4 style={{ marginTop: "40px" }}>三种大小</h4>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spin size="small" />
        <span style={{ marginRight: "20px" }}></span>
        <Spin size="default" />
        <span style={{ marginRight: "20px" }}></span>
        <Spin size="large" />
      </div>
      <CodeView
        value={`
        import { Spin } from 'deer-ui'
        <Spin size="small" />
        <Spin size="default" />
        <Spin size="large" />
      `}
      ></CodeView>
      <h4 style={{ marginTop: "40px" }}>自定义图标</h4>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spin indicator={<CloseIcon />} />
        <span style={{ marginRight: "20px" }}></span>
        <Spin indicator={<UserIcon />} />
        <span style={{ marginRight: "20px" }}></span>
        <Spin indicator={<SuccessIcon />} />
      </div>
      <CodeView
        value={`
        import { Spin } from 'deer-ui'
        <Spin indicator={<UserIcon/>} />
        <Spin indicator={<SuccessIcon/>} />
      `}
      ></CodeView>
    </div>
  ))
  .add("Message全局提示", () => (
    <div>
      <h4>基本使用</h4>
      <div style={{ marginBottom: "30px" }} className="feedback-message">
        <Button type="success" onClick={()=> Message.success('成功弹框')}>成功</Button>
        <Button type="error" onClick={()=> Message.error('错误弹错误弹框错误弹框错误弹框错误弹框错误弹框错误弹框错误弹框框')}>失败</Button>
        <Button type="warning" onClick={()=> Message.warning('警告弹框')}>警告</Button>
        <Button type="info" onClick={()=> Message.info('信息弹框')}>信息</Button>
        <Button type="primary" onClick={()=> Message.primary('基础弹框')}>加载</Button>
      </div>
      <CodeView
        value={`
        import { Message } from 'deer-ui'
        <Message />
      `}
      ></CodeView>
      <h4>自定义延时</h4>
      <div style={{ marginBottom: "30px" }}>
        <Button type="primary" onClick={()=> Message.primary('4秒后关闭',()=>{},4)}>4秒后关闭</Button>
      </div>
      <CodeView
        value={`
        import { Message,Button } from 'deer-ui'
        <Button type="primary" onClick={()=> Message.primary('4秒后关闭',()=>{},4)}>4秒后关闭</Button>
      `}
      ></CodeView>
      <h4>回调函数</h4>
      <div style={{ marginBottom: "30px" }}>
        <Button type="info" onClick={()=> Message.success('处理中...',()=>{console.log('处理成功')},1)}>回调函数</Button>
      </div>
      <CodeView
        value={`
        import { Message,Button } from 'deer-ui'
        <Button type="info" onClick={()=> Message.success('处理中...',()=>{console.log('处理成功')},1)}>回调函数</Button>
      `}
      ></CodeView>
     <h4>白天黑夜模式</h4>
      <div style={{ marginBottom: "30px" }} className="feedback-message">
        <Button type="success" onClick={()=> Message.success('处理中...',()=>{console.log('处理成功')},1,false)}>默认白天</Button>
        <Button type="error" onClick={()=> Message.success('处理中...',()=>{console.log('处理成功')},1,true)}>黑夜</Button>
      </div>
      <CodeView
        value={`
        import { Message,Button } from 'deer-ui'
        <Button type="success" onClick={()=> Message.success('处理中...',()=>{console.log('处理成功')},1,false)}>默认白天</Button>
        <Button type="error" onClick={()=> Message.success('处理中...',()=>{console.log('处理成功')},1,true)}>黑夜</Button>
      `}
      ></CodeView>
    </div>
  ));
