import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  SuccessIcon,
  CloseIcon,
  UserIcon,
  WarningIcon,
  LoadingIcon,
  EmptyIcon,
  PasswordShowIcon,
  PasswordHideIcon,
  InfoIcon,
  FileUploadIcon,
  UpIcon,
  DownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CalendarIcon,
  CloseCircleIcon,
  ErrorIcon
} from "../components/icon";
import Button from "../components/button";
import Icon from "../components/icons";
import Input from "../components/input";
import Radio from "../components/radio";
import CodeView from "../components/codeview";
require("./style/button.less");
require("../components/button/style.less");
require("../components/icons/style.less");
require("../components/input/style.less");
require("../components/radio/style.less");
require("../components/codeview/style.less");
Icon.createFromIconfontCN({
  scriptUrl: "https://at.alicdn.com/t/font_1484223_mrxdvedqa7g.js"
});

storiesOf("基础", module)
  .add("Button 按钮", () => (
    <div className="deer-button">
      <h2>基本使用</h2>
      <Button onClick={action("clicked")}>默认</Button>

      <Button type="primary" onClick={action("clicked")}>
        主色调
      </Button>

      <Button type="info" onClick={action("clicked")}>
        信息
      </Button>
      <Button type="warning" onClick={action("clicked")}>
        警告
      </Button>

      <Button type="error" onClick={action("clicked")}>
        错误
      </Button>
      <Button type="success" onClick={action("clicked")}>
        成功
      </Button>
      <Button disabled onClick={action("clicked")}>
        禁用
      </Button>
      <br />
      <Button type="info" dashed={true} onClick={action("clicked")}>
        虚线
      </Button>

      <Button type="primary" loading={true} onClick={action("clicked")}>
        加载中
      </Button>

      <Button type="primary" block onClick={action("clicked")}>
        100%
      </Button>
      <div style={{ margin: "20px 0px" }}>
        <CodeView
          value={`
      import { Button } from 'deer-ui';

      <Button onClick={action("clicked")}>
        默认
      </Button>

      <Button type="primary" onClick={action("clicked")}>
        主色调
      </Button>

      <Button type="info" onClick={action("clicked")}>
        信息
      </Button>
      <Button type="warning" onClick={action("clicked")}>
        警告
      </Button>

      <Button type="error" onClick={action("clicked")}>
        错误
      </Button>
      <Button type="success" onClick={action("clicked")}>
        成功
      </Button>
      <Button disabled onClick={action("clicked")}>
        禁用
      </Button>
      <br/>
      <Button type="info" dashed onClick={action("clicked")}>
        虚线
      </Button>

      <Button type="primary" loading={true} onClick={action("clicked")}>
        加载中
      </Button>

      <Button type="primary" block onClick={action("clicked")}>
        100%
      </Button>`}
        ></CodeView>
      </div>
      <h2>空心按钮</h2>

      <Button onClick={action("clicked")}>默认</Button>

      <Button type="primary" hollow onClick={action("clicked")}>
        主色调
      </Button>

      <Button type="info" hollow onClick={action("clicked")}>
        信息
      </Button>

      <Button type="warning" hollow onClick={action("clicked")}>
        警告
      </Button>

      <Button type="error" hollow onClick={action("clicked")}>
        错误
      </Button>

      <Button type="success" hollow onClick={action("clicked")}>
        成功
      </Button>
      <Button type="error" hollow disabled onClick={action("clicked")}>
        禁用
      </Button>
      <br />
      <Button type="info" hollow dashed={true} onClick={action("clicked")}>
        虚线
      </Button>
      <Button type="primary" hollow loading={true} onClick={action("clicked")}>
        加载中
      </Button>

      <Button type="primary" hollow block onClick={action("clicked")}>
        100%
      </Button>

      <CodeView
        value={`
          import { Button } from 'deer-ui';
          
          1. 空心状态属性为hollow
          <Button type="error" hollow onClick={action("clicked")}>
            错误
          </Button>
          2.加载中的属性为 loading，可开启关闭
          <Button type="primary" hollow loading={true} onClick={action("clicked")}>
            加载中
          </Button>
          3.按钮虚线属性 dashed
          <Button type="info" hollow dashed onClick={action("clicked")}>
            虚线
          </Button>
          4.按钮宽度为和父类宽度一致
          <Button type="info" block onClick={action("clicked")}>
            100%
          </Button>
        `}
      ></CodeView>

      <h2>禁用状态</h2>
      <Button disabled onClick={action("clicked")}>
        默认
      </Button>

      <Button type="primary" disabled onClick={action("clicked")}>
        主色调
      </Button>

      <Button type="info" disabled onClick={action("clicked")}>
        信息
      </Button>

      <Button type="warning" disabled onClick={action("clicked")}>
        警告
      </Button>

      <Button type="error" disabled onClick={action("clicked")}>
        错误
      </Button>

      <Button type="success" disabled onClick={action("clicked")}>
        成功
      </Button>

      <Button type="primary" disabled block onClick={action("clicked")}>
        100%
      </Button>

      <Button disabled hollow onClick={action("clicked")}>
        {" "}
        默认{" "}
      </Button>

      <Button type="primary" disabled hollow onClick={action("clicked")}>
        {" "}
        主色调{" "}
      </Button>

      <Button type="info" disabled hollow onClick={action("clicked")}>
        {" "}
        信息{" "}
      </Button>
      <Button type="warning" disabled hollow onClick={action("clicked")}>
        {" "}
        警告{" "}
      </Button>

      <Button type="error" disabled hollow onClick={action("clicked")}>
        {" "}
        错误{" "}
      </Button>

      <Button type="success" disabled hollow onClick={action("clicked")}>
        {" "}
        成功{" "}
      </Button>
      <div style={{ margin: "20px 0px" }}>
        <CodeView
          value={`
          import { Button } from 'deer-ui'
          <Button type="success"  disabled onClick={action("clicked")}>
            成功
          </Button>
        `}
        ></CodeView>
      </div>
      <h2>三种大小</h2>

      <Button type="primary" size="large">
        large
      </Button>

      <Button type="primary">default</Button>

      <Button type="primary" size="small">
        small
      </Button>
      <div style={{ margin: "20px 0px" }}>
        <CodeView
          value={`
          import { Button } from 'deer-ui';
          <Button type="primary" size="large">large</Button>
          <Button type="primary">default</Button>
          <Button type="primary" size="small">small</Button>
        `}
        ></CodeView>
      </div>
      <h2>圆形按钮及自定义图标</h2>

      <Button type="primary" circle>
        <SuccessIcon />
      </Button>

      <Button type="info" circle>
        <CloseIcon />
      </Button>

      <Button type="error" circle>
        <UserIcon />
      </Button>

      <Button type="success" circle>
        <WarningIcon />
      </Button>

      <Button type="primary" disabled circle>
        <LoadingIcon />
      </Button>

      <Button type="warning" dashed={true} circle>
        <EmptyIcon />
      </Button>

      <Button type="primary" hollow dashed={true} circle>
        <PasswordShowIcon />
      </Button>

      <Button type="error" hollow circle>
        <PasswordHideIcon />
      </Button>

      <Button type="info" hollow circle disabled>
        <InfoIcon />
      </Button>

      <Button type="primary" circle size="small">
        小
      </Button>
      <Button type="primary" circle>
        中
      </Button>
      <Button type="primary" circle size="large">
        大
      </Button>
      <div style={{ margin: "20px 0px" }}>
        <CodeView
          value={`
          import { Button } from 'deer-ui';
          <Button type="primary" circle>圆形</Button>
          //自定义图标
          <Button type="info" circle>
            <InfoIcon />
          </Button>
        `}
        ></CodeView>
      </div>
      <Button href="#">麋鹿</Button>
      <Button type="primary" href="https://github.com/zhangboyang123/deer-ui">
        GitHub
      </Button>
      <Button href="#" disabled>
        禁用
      </Button>
      <div style={{ margin: "20px 0px" }}>
        <CodeView
          value={`
          import { Button } from 'deer-ui';
          //锚点链接
          <Button href="#">麋鹿</Button>
          <Button type="primary" href="https://github.com/zhangboyang123/deer-ui">
            GitHub
          </Button>
          <Button href="#" disabled>
            禁用
          </Button>
        `}
        ></CodeView>
      </div>
    </div>
  ))
  .add("Icon图标", () => (
    <div className="Icon-wrapper">
      <h4>基础图标</h4>
      <div className="Icon-list">
        <div className="Icon-item">
          <SuccessIcon />
          <span>SuccessIcon</span>
        </div>
        <div className="Icon-item">
          <CloseIcon />
          <span>CloseIcon</span>
        </div>
        <div className="Icon-item">
          <UserIcon />
          <span>UserIcon</span>
        </div>
        <div className="Icon-item">
          <WarningIcon />
          <span>WarningIcon</span>
        </div>
        <div className="Icon-item">
          <LoadingIcon />
          <span>LoadingIcon</span>
        </div>
        <div className="Icon-item">
          <EmptyIcon />
          <span>EmptyIcon</span>
        </div>
        <div className="Icon-item">
          <PasswordShowIcon />
          <span>PasswordShowIcon</span>
        </div>
        <div className="Icon-item">
          <PasswordHideIcon />
          <span>PasswordHideIcon</span>
        </div>
        <div className="Icon-item">
          <FileUploadIcon />
          <span>FileUploadIcon</span>
        </div>
        <div className="Icon-item">
          <UpIcon />
          <span>UpIcon</span>
        </div>
        <div className="Icon-item">
          <DownIcon />
          <span>DownIcon</span>
        </div>
        <div className="Icon-item">
          <ArrowRightIcon />
          <span>ArrowRightIcon</span>
        </div>
        <div className="Icon-item">
          <ArrowLeftIcon />
          <span>ArrowLeftIcon</span>
        </div>
        <div className="Icon-item">
          <CalendarIcon />
          <span>CalendarIcon</span>
        </div>
        <div className="Icon-item">
          <CloseCircleIcon />
          <span>CloseCircleIcon</span>
        </div>
        <div className="Icon-item">
          <ErrorIcon />
          <span>ErrorIcon</span>
        </div>
      </div>
      <CodeView
        value={`
      组件库自带下列图标，使用时，请选择对应的即可
      import {
        SuccessIcon,
        CloseIcon,
        UserIcon,
        WarningIcon,
        LoadingIcon,
        EmptyIcon,
        PasswordShowIcon,
        PasswordHideIcon,
        InfoIcon,
        FileUploadIcon,
        UpIcon,
        DownIcon,
        ArrowRightIcon,
        ArrowLeftIcon,
        CalendarIcon,
        CloseCircleIcon,
        ErrorIcon
      } from "../src/components/icon";

      <SuccessIcon />
      <CloseIcon />
      `}
      ></CodeView>
      <h4>自定义图标</h4>
      <p className="Icon-des">
        引入 iconfont.cn 的图标，通过设置createFromIconfontCN 方法参数对象中的
        scriptUrl 字段， 即可轻松地使用已有项目中的图标。
      </p>
      <div className="Icon-list">
        <div className="Icon-item">
          <Icon type="icon-shuxie" />
          <span>笔</span>
        </div>
        <div className="Icon-item">
          <Icon type="icon-wenzhang" />
          <span>文章</span>
        </div>
        <div className="Icon-item">
          <Icon type="icon-fenzu" />
          <span>分组</span>
        </div>
        <div className="Icon-item">
          <Icon type="icon-gaishu" />
          <span>概述</span>
        </div>
        <div className="Icon-item">
          <Icon type="icon-quanxian" />
          <span>权限</span>
        </div>
        <div className="Icon-item">
          <Icon type="icon-guanli" />
          <span>管理</span>
        </div>
      </div>
      <CodeView
        value={`
      import {Icon} from "deer-ui";

      //加载iconfont地址
      Icon.createFromIconfontCN({scriptUrl: "//at.alicdn.com/t/font_1484223_mrxdvedqa7g.js"});

      //自定义图标使用
      <Icon type="icon-shuxie" />

      <Icon type="icon-wenzhang" />

      <Icon type="icon-fenzu" />

      <Icon type="icon-gaishu" />

      <Icon type="icon-quanxian" />

      <Icon type="icon-guanli" />`}
      ></CodeView>
      <h6>自定义图标设置样式</h6>
      <div className="Icon-list">
        <div className="Icon-item">
          <Icon type="icon-shuxie" fontSize="38px" color="#31c27c" />
          <span>笔</span>
        </div>
        <div className="Icon-item">
          <Icon type="icon-wenzhang" fontSize="38px" color="#fca130" />
          <span>文章</span>
        </div>
      </div>
      <CodeView
        value={`
      import {Icon} from "deer-ui";

      <Icon type='icon-shuxie' fontSize='38px' color='#31c27c'/>

      <Icon type="icon-wenzhang" fontSize="38px" color="#fca130"/>`}
      ></CodeView>
    </div>
  ))
  .add("Input输入框", () => (
    <div>
      <h2>基本使用</h2>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="请输入内容" type="text" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="请输入密码" type="password" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="请输入数字" type="number" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="禁用" disabled />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="请输入" defaultValue="我是默认值" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="只读" value="只读" readOnly />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input
          placeholder="输入回调"
          onChange={e => console.log(e.target.value)}
        />
      </div>
      <CodeView
        value={`
        import { Input } from 'deer-ui'
        <Input placeholder="请输入内容" type="text" />
        <Input placeholder="请输入密码" type="password"/>
        <Input placeholder="请输入数字" type="number" />
        <Input placeholder="禁用" disabled/>
        <Input placeholder="请输入" defaultValue="我是默认值"/>  //defaultValue  和 value都行，默认是一个效果
        <Input placeholder="只读" value="只读" readOnly/>
        <Input placeholder="输入回调" onChange={e => console.log(e.target.value)}/>
      `}
      ></CodeView>
      <h2>基本使用</h2>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="小" size="small" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="默认" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="大" size="large" />
      </div>
      <CodeView
        value={`
        import { Input } from 'deer-ui'
        <Input placeholder="小" size="small"/>
        <Input placeholder="默认大小" />
        <Input placeholder="大" size="large"/>
      `}
      ></CodeView>
      <h2>可清空</h2>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="可清空" allowClear />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input
          placeholder="清空回调"
          allowClear
          onClear={() => {
            console.log("clear");
          }}
        />
      </div>
      <CodeView
        value={`
        import { Input } from 'deer-ui'
        <Input placeholder="可清空" allowClear/> 
        <Input placeholder="清空回调" allowClear onClear={()=>{console.log('clear')}}/>  //清空回调
      `}
      ></CodeView>
      <h2>前置/后置标签</h2>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="前置" prefix={<UserIcon />} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input placeholder="后置" suffix={<IoIosAddCircleOutline />} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Input
          placeholder="前后都有"
          prefix={<CalendarIcon />}
          suffix={<InfoIcon />}
        />
      </div>
      <CodeView
        value={`
        import { Input } from 'deer-ui'
        <Input placeholder="前置" prefix={<UserIcon />}/>  //前置
        <Input placeholder="后置" suffix={<IoIosAddCircleOutline />} />  //后置
        <Input placeholder="前后都有" prefix={<CalendarIcon />} suffix={<InfoIcon />}/>  //前后都有
      `}
      ></CodeView>
      <h2>密码框</h2>
      <div style={{ marginBottom: "20px" }}>
        <Input.Password placeholder="请输入密码" />
      </div>
      <CodeView
        value={`
        import { Input } from 'deer-ui'
        const Password = Input.Password
        <Password placeholder="请输入密码" />
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
