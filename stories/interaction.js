import React from "react";
import { storiesOf } from "@storybook/react";
import { CodeView, Checkbox } from "../components";
const CheckboxGroup = Checkbox.CheckboxGroup;

require('../components/checkbox/style.less');

const plainOptions = ["Php", "Java", "Js"];


storiesOf("交互组件", module)
  .add("复选多选框", () => (
    <div>
      <h4>基本使用</h4>
      <div style={{ marginBottom: "30px" }}>
      <Checkbox  value="Checkbox" onChange={(e)=>{console.log(e.target.checked)}}>复选框</Checkbox>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        <Checkbox  value="Checkbox" onChange={(e)=>{console.log(e.target.checked)}}>复选框</Checkbox>
      `}
      ></CodeView>
    <h4>默认选中</h4>
      <div style={{ marginBottom: "30px" }}>
      <Checkbox  value="php" checked onChange={(e)=>{console.log(e.target.checked)}}>Php</Checkbox>
      <Checkbox  value="js" defaultChecked onChange={(e)=>{console.log(e.target.checked)}}>Javascript</Checkbox>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        <Checkbox  value="php" checked onChange={(e)=>{console.log(e.target.checked)}}>Php</Checkbox>
        <Checkbox  value="js" defaultChecked onChange={(e)=>{console.log(e.target.checked)}}>Javascript</Checkbox>
      `}
      ></CodeView>
       <h4>禁用</h4>
      <div style={{ marginBottom: "30px" }}>
      <Checkbox  value="php" disabled onChange={(e)=>{console.log(e.target.value)}}>禁用</Checkbox>
      <Checkbox  value="js"  disabled checked onChange={(e)=>{console.log(e.target.value)}}>选中禁用</Checkbox>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        <Checkbox  value="php" checked onChange={(e)=>{console.log(e.target.value)}}>Php</Checkbox>
        <Checkbox  value="js" defaultChecked onChange={(e)=>{console.log(e.target.value)}}>Javascript</Checkbox>
      `}
      ></CodeView>
       <h4>不确定</h4>
      <div style={{ marginBottom: "30px" }}>
      <Checkbox  value="不确定" indeterminate onChange={(e)=>{console.log(e.target.value)}}>不确定</Checkbox>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        <Checkbox  value="不确定" indeterminate onChange={(e)=>{console.log(e.target.value)}}>不确定</Checkbox>
      `}
      ></CodeView>
      <h4>分组多选</h4>
      <div style={{ marginBottom: "30px" }}>
        <CheckboxGroup options={plainOptions} value={["1","2", "3"]}/>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        const CheckboxGroup = Checkbox.CheckboxGroup;
        const plainOptions = ["Php", "Java", "Js"];
        <CheckboxGroup options={plainOptions} value={["php","java", "js"]}/>
      `}
      ></CodeView>
       <h4>选中回调</h4>
      <div style={{ marginBottom: "30px" }}>
        <CheckboxGroup options={plainOptions} value={["php","java", "js"]} onChange={(value)=>{console.log(value)}}/>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        const CheckboxGroup = Checkbox.CheckboxGroup;
        const plainOptions = ["Php", "Java", "Js"];
        <CheckboxGroup options={plainOptions} value={["php","java", "js"]} onChange={(value)=>{console.log(value)}}/>
      `}
      ></CodeView>
      <h4>分组默认选中</h4>
      <div style={{ marginBottom: "30px" }}>
        <CheckboxGroup options={plainOptions} defaultValue={["js"]} value={["php","java", "js"]} onChange={(value)=>{console.log(value)}}/>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        const CheckboxGroup = Checkbox.CheckboxGroup;
        const plainOptions = ["Php", "Java", "Js"];
        <CheckboxGroup options={plainOptions} value={["php","java", "js"]} onChange={(value)=>{console.log(value)}}/>
        //onChange输出为选中数组
      `}
      ></CodeView>

    <h4>分组禁用</h4>
      <div style={{ marginBottom: "30px" }}>
        <CheckboxGroup options={plainOptions} disabled defaultValue={["js"]} value={["php","java", "js"]} onChange={(value)=>{console.log(value)}}/>
      </div>
      <CodeView
        value={`
        import { Checkbox } from 'deer-ui'
        const CheckboxGroup = Checkbox.CheckboxGroup;
        const plainOptions = ["Php", "Java", "Js"];
        全部禁用
        <CheckboxGroup options={plainOptions} disabled defaultValue={["js"]} value={["php","java", "js"]} onChange={(value)=>{console.log(value)}}/>
      `}
      ></CodeView>
    </div>
  ))
