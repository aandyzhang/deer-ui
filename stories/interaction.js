import React from "react";
import { storiesOf } from "@storybook/react";
import { CodeView, Checkbox,Radio } from "../components";
const CheckboxGroup = Checkbox.CheckboxGroup;

require('../components/checkbox/style.less');
require("../components/radio/style.less");

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
        <CheckboxGroup options={["1", "2", "3"]} value={["1","2", "3"]} onChange={(value)=>{console.log(value)}}/>
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
  .add("Radio单选框", () => (
    <div>
      <h2>基本使用</h2>
      <Radio>Deer-ui</Radio>
      <div style={{ marginBottom: "20px" }}></div>
      <CodeView
        value={`
        import { Radio } from 'deer-ui'
        <Radio>Deer-ui</Radio>
      `}
      ></CodeView>
      <h2>禁止</h2>
      <Radio disabled>Deer-ui</Radio>
      <div style={{ marginTop: "10px" }}>
        <Radio disabled checked>
          Deer-ui
        </Radio>
      </div>
      <div style={{ marginBottom: "20px" }}></div>
      <CodeView
        value={`
        import { Radio } from 'deer-ui'
        <Radio disabled>Deer-ui</Radio>
        <Radio disabled checked>Deer-ui</Radio>
      `}
      ></CodeView>
      <h2>选中回调</h2>
      <Radio
        value="deer"
        onChange={e => {
          console.log(e.target.value);
        }}
      >
        Deer-ui
      </Radio>
      <div style={{ marginBottom: "20px" }}></div>
      <CodeView
        value={`
        import { Radio } from 'deer-ui'
        <Radio value="deer" onChange={(e)=>{console.log(e.target.value)}}>Deer-ui</Radio>
      `}
      ></CodeView>
      <h2>组合使用</h2>
      <Radio.Group
        onChange={e => {
          console.log(e.target.value);
        }}
        value="B"
      >
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C" disabled>C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>

      <div style={{ marginBottom: "20px" }}></div>
      <CodeView
        value={`
        import { Radio } from 'deer-ui'
        <Radio.Group
        onChange={e => {
          console.log(e.target.value);
        }}
        value="B"
      >
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C" disabled>C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
      `}
      ></CodeView>
    </div>
  ));
