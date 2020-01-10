import React from "react";
import { storiesOf } from "@storybook/react";
import { Tabs, CodeView, Collapse, Icon, Empty, Button, Table,Divider,NotFound } from "../components";
const TabPane = Tabs.TabPane;
import {
  SuccessIcon,
  CloseIcon,
  UserIcon,
  WarningIcon
} from "../components/icon";
require("../components/collapse/style.less");
require("../components/tabs/style.less");
require("../components/empty/style.less");
require("../components/table/style.less");
require("../components/notFound/style.less");
require("../components/codeview/style.less");
require("../components/divider/style.less");
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "时间",
    dataIndex: "createTime",
    key: "create-time"
  },
  {
    title: "操作",
    key: "add",
    render: (record, item, i) => {
      return (
        <div>
          <Button type="link">删除</Button>
          <Divider type="vertical" />
          <Button type="link">确认</Button>
        </div>
      );
    }
  }
];
const rowSelection = {
  onChange(selectedRowKeys, selectedRows) {
    console.log(selectedRowKeys);
    console.log(selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.id === 2
  })
};

const data = [
  {
    key: "1",
    id: 1,
    title: "程序员康程序员康复指南",
    createTime: "2019-10-10 14:10"
  },
  {
    key: "2",
    id: 2,
    title: "程序员康程序员康复指南",
    createTime: "2019-10-10 14:10"
  },
  {
    key: "3",
    id: 3,
    title: "程序员康复指南",
    createTime: "2019-10-10 14:10"
  },
  {
    key: "4",
    id: 4,
    title: "程序员康复指南",
    createTime: "2019-10-10 14:10"
  }
];
storiesOf("数据展示", module)
  .add("Tabs切换", () => (
    <div>
      <h4>基本使用</h4>
      <div style={{ marginBottom: "30px" }}>
        <Tabs defaultKey="1" onChange={key => console.log(key)}>
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
      <CodeView
        value={`
        import { Tabs } from "deer-ui";
        const TabPane = Tabs.TabPane;

        <Tabs defaultKey="1" onChange={key => console.log(key)}>
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
      `}
      ></CodeView>
      <h4 style={{ marginTop: "40px" }}>默认选中某一项</h4>
      <div style={{ marginBottom: "30px" }}>
        <Tabs defaultActiveKey="3" onChange={key => console.log(key)}>
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
      <CodeView
        value={`
        import { Tabs } from "deer-ui";
        const TabPane = Tabs.TabPane;

        <Tabs defaultActiveKey="3" onChange={key => console.log(key)}>
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
      `}
      ></CodeView>
      <h4 style={{ marginTop: "40px" }}>禁用某一项</h4>
      <div style={{ marginBottom: "30px" }}>
        <Tabs onChange={key => console.log(key)}>
          <TabPane key="1" tab="最新文章">
            阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台
          </TabPane>
          <TabPane key="2" tab="最热文章" disabled>
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
      <CodeView
        value={`
        禁用某一项，及在子标签下添加disabled属性
        import { Tabs } from "deer-ui";
        const TabPane = Tabs.TabPane;

        <Tabs onChange={key => console.log(key)}>
            <TabPane key="1" tab="最新文章">
                阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台
            </TabPane>
            <TabPane key="2" tab="最热文章" disabled>
                [译] 为什么 React Suspense 将会逆转 Web 应用开发的游戏规则 ？
            </TabPane>
            <TabPane key="3" tab="文章排行">
                闲鱼又一企业级巨著《Flutter in action》开放下载
            </TabPane>
            <TabPane key="4" tab="热门话题">
                MySQL 是怎样运行的：从根儿上理解 MySQL
            </TabPane>
        </Tabs>
      `}
      ></CodeView>

      <h4 style={{ marginTop: "40px" }}>自定义图标</h4>

      <div style={{ marginBottom: "30px" }}>
        <Tabs onChange={key => console.log(key)}>
          <TabPane key="1" tab={<SuccessIcon />}>
            阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台
          </TabPane>
          <TabPane key="2" tab={<CloseIcon />}>
            [译] 为什么 React Suspense 将会逆转 Web 应用开发的游戏规则 ？
          </TabPane>
          <TabPane key="3" tab={<UserIcon />}>
            闲鱼又一企业级巨著《Flutter in action》开放下载
          </TabPane>
          <TabPane key="4" tab={<WarningIcon />}>
            MySQL 是怎样运行的：从根儿上理解 MySQL
          </TabPane>
        </Tabs>
      </div>
      <CodeView
        value={`
        自定义图标，TabPane组件中，tab可以是文本也可以是components,图标组件使用组件库中默认的，也可以使用自定义的
        图标，详细使用，请参考Icon图标组件
        import { Tabs } from "deer-ui";
        const TabPane = Tabs.TabPane;

        <Tabs onChange={key => console.log(key)}>
            <TabPane key="1" tab={<SuccessIcon/>}>
                阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台阿里UC百亿PV的前端监控平台
            </TabPane>
            <TabPane key="2" tab={<CloseIcon/>}>
                [译] 为什么 React Suspense 将会逆转 Web 应用开发的游戏规则 ？
            </TabPane>
            <TabPane key="3" tab={<UserIcon/>}>
                闲鱼又一企业级巨著《Flutter in action》开放下载
            </TabPane>
            <TabPane key="4" tab={<WarningIcon/>}>  
                MySQL 是怎样运行的：从根儿上理解 MySQL
            </TabPane>
        </Tabs>
      `}
      ></CodeView>
    </div>
  ))
  .add("Collapse折叠面板", () => (
    <div>
      <h4>基本使用</h4>
      <div style={{ marginBottom: "30px" }}>
        <Collapse>
          <Collapse.Item title="华为">
            小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G Redmi Note 8
            Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="小米">
            小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G Redmi Note 8
            Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="苹果">
            小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G Redmi Note 8
            Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
        </Collapse>
      </div>
      <CodeView
        value={`
        import { Collapse } from 'deer-ui'
        <Collapse>
            <Collapse.Item title="华为">华为手机</Collapse.Item>
            <Collapse.Item title="小米">小米手机</Collapse.Item>
            <Collapse.Item title="苹果">苹果手机</Collapse.Item>
        </Collapse>
      `}
      ></CodeView>
      <h4>禁用某一项或多项</h4>
      <div style={{ marginBottom: "30px" }}>
        <Collapse>
          <Collapse.Item title="华为">华为手机</Collapse.Item>
          <Collapse.Item title="小米" disabled>
            小米手机
          </Collapse.Item>
          <Collapse.Item title="苹果" disabled>
            苹果手机
          </Collapse.Item>
          <Collapse.Item title="魅族">魅族手机</Collapse.Item>
        </Collapse>
      </div>
      <CodeView
        value={`
        import { Collapse } from 'deer-ui'
        <Collapse>
            <Collapse.Item title="华为">华为手机</Collapse.Item>
            <Collapse.Item title="小米" disabled>小米手机</Collapse.Item>
            <Collapse.Item title="苹果" disabled>苹果手机</Collapse.Item>
            <Collapse.Item title="魅族">魅族手机</Collapse.Item>
        </Collapse>
      `}
      ></CodeView>
      <h4>回调事件</h4>
      <div style={{ marginBottom: "30px" }}>
        <Collapse
          onChange={key => {
            console.log(`你选中的key是${key}`);
          }}
        >
          <Collapse.Item title="华为" key="v-1">
            华为手机
          </Collapse.Item>
          <Collapse.Item title="小米" key="v-2">
            小米手机
          </Collapse.Item>
          <Collapse.Item title="苹果" key="v-3">
            苹果手机
          </Collapse.Item>
          <Collapse.Item title="魅族" key="v-4">
            魅族手机
          </Collapse.Item>
        </Collapse>
      </div>
      <CodeView
        value={`
        import { Collapse } from 'deer-ui'
        <Collapse onChange={key => {console.log(你选中的key是{key})}}>
        // onChange是选中某一项要触发的事件
            <Collapse.Item title="华为" key="v-1">华为手机</Collapse.Item>
            <Collapse.Item title="小米" key="v-2">小米手机</Collapse.Item>
            <Collapse.Item title="苹果" key="v-3">苹果手机</Collapse.Item>
            <Collapse.Item title="魅族" key="v-4">魅族手机</Collapse.Item>
        </Collapse>
      `}
      ></CodeView>
      <h4>默认展开</h4>
      <div style={{ marginBottom: "30px" }}>
        <Collapse openKeys={["v-2", "v-4"]}>
          <Collapse.Item title="华为" key="v-1">
            华为手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="小米" key="v-2">
            小米手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="苹果" key="v-3">
            苹果手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="魅族" key="v-4">
            小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G Redmi Note 8
            Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
        </Collapse>
      </div>
      <CodeView
        value={`
        import { Collapse } from 'deer-ui'
        //展开属性openKeys是数组类型，传递item的key值，可以展开多个
        <Collapse openKeys={['v-2','v-4']}>
            <Collapse.Item title="华为" key="v-1">华为手机</Collapse.Item>
            <Collapse.Item title="小米" key="v-2">小米手机</Collapse.Item>
            <Collapse.Item title="苹果" key="v-3">苹果手机</Collapse.Item>
            <Collapse.Item title="魅族" key="v-4">魅族手机</Collapse.Item>
        </Collapse>
      `}
      ></CodeView>
      <h4>箭头超右</h4>
      <div style={{ marginBottom: "30px" }}>
        <Collapse rightArrow={true}>
          <Collapse.Item title="华为" key="v-1">
            华为手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="小米" key="v-2">
            小米手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="苹果" key="v-3">
            苹果手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
        </Collapse>
      </div>
      <CodeView
        value={`
        import { Collapse } from 'deer-ui'

        <Collapse rightArrow={true}>
            <Collapse.Item title="华为" key="v-1">华为手机</Collapse.Item>
            <Collapse.Item title="小米" key="v-2">小米手机</Collapse.Item>
            <Collapse.Item title="苹果" key="v-3">苹果手机</Collapse.Item>
        </Collapse>
      `}
      ></CodeView>
      <h4>隐藏箭头</h4>
      <div style={{ marginBottom: "30px" }}>
        <Collapse hideArrow={true}>
          <Collapse.Item title="华为" key="v-1">
            华为手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="小米" key="v-2">
            小米手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item title="苹果" key="v-3">
            苹果手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
        </Collapse>
      </div>
      <CodeView
        value={`
        import { Collapse } from 'deer-ui'

        <Collapse hideArrow={true}>
            <Collapse.Item title="华为" key="v-1">华为手机</Collapse.Item>
            <Collapse.Item title="小米" key="v-2">小米手机</Collapse.Item>
            <Collapse.Item title="苹果" key="v-3">苹果手机</Collapse.Item>
        </Collapse>
      `}
      ></CodeView>
      <h4>自定义Icon</h4>
      <div style={{ marginBottom: "30px" }}>
        <Collapse>
          <Collapse.Item
            title="华为"
            key="v-1"
            icon={<Icon type="icon-ui" fontSize="20px" />}
          >
            华为手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item
            title="小米"
            key="v-2"
            icon={<Icon type="icon-fasong" fontSize="20px" />}
          >
            小米手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
          <Collapse.Item
            title="苹果"
            key="v-3"
            icon={<Icon type="icon-quanxian" fontSize="20px" />}
          >
            苹果手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G
            Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米
          </Collapse.Item>
        </Collapse>
      </div>
      <CodeView
        value={`
        import { Collapse, Icon } from 'deer-ui'

        <Collapse hideArrow={true}>
            <Collapse.Item title="华为" key="v-1" icon={<Icon type="icon-ui" fontSize="20px"/>}>华为手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米</Collapse.Item>
            <Collapse.Item title="小米" key="v-2" icon={<Icon type="icon-fasong" fontSize="20px"/>}>小米手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米</Collapse.Item>
            <Collapse.Item title="苹果" key="v-3" icon={<Icon type="icon-quanxian" fontSize="20px"/>}>苹果手机小米CC9 Pro Redmi 8A Redmi 8 小米MIX Alpha 小米9 Pro 5G Redmi Note 8 Pro Redmi Note 8 小米CC9 小米CC美图定制版 小米</Collapse.Item>
        </Collapse>
      `}
      ></CodeView>
    </div>
  ))
  .add("Empty 空状态", () => (
    <div>
      <h4>基本使用</h4>
      <div style={{ marginBottom: "30px" }}>
        <Empty />
      </div>
      <CodeView
        value={`
        import { Empty } from 'deer-ui'
        <Empty/>
      `}
      ></CodeView>
      <h4>自定义高度</h4>
      <div style={{ marginBottom: "30px" }}>
        <Empty style={{ height: "120px" }} />
      </div>
      <CodeView
        value={`
        import { Empty } from 'deer-ui'
        <Empty style={{height:'120px'}}/>
      `}
      ></CodeView>
      <h4>自定义图标和内容</h4>
      <div style={{ marginBottom: "30px" }}>
        <Empty icon={<UserIcon />} description="自定义描述内容"></Empty>
      </div>
      <CodeView
        value={`
        import { Empty } from 'deer-ui'
        <Empty icon={<UserIcon/>} description="自定义描述内容"></Empty>
      `}
      ></CodeView>
      <h4>嵌套组件</h4>
      <div style={{ marginBottom: "30px" }}>
        <Empty icon={"🦌"} description="嵌套其他组件">
          <Button type="primary">可以嵌套其他组件</Button>
        </Empty>
      </div>
      <CodeView
        value={`
        import { Empty,Button } from 'deer-ui'
        <Empty icon={"🦌"} description="嵌套其他组件">
            <Button type="primary">可以嵌套其他组件</Button>
        </Empty>
      `}
      ></CodeView>
    </div>
  ))
  .add("Table 表格", () => (
    <div>
      <h4>基本使用</h4>
      <div style={{ marginBottom: "30px" }}>
        <Table dataSource={data} columns={columns}></Table>
      </div>
      <CodeView
        value={`
        import { Table } from 'deer-ui'
        const columns = [
            {
              title: "序号",
              dataIndex: "id",
              key: "id"
            },
            {
              title: "标题",
              dataIndex: "title",
              key: "title"
            },
            {
              title: "时间",
              dataIndex: "createTime",
              key: "create-time"
            },
            {
              title: "操作",
              key: "add",
              render: (record, item, i) => {
                return (
                  <div>
                    <Button type="link">删除</Button>
                    <Divider type="vertical" />
                    <Button type="link">确认</Button>
                  </div>
                );
              }
            }
          ];

        const data = [
            {
                key: "1",
                id: 1,
                title: "程序员康程序员康复指南",
                createTime: "2019-10-10 14:10"
            },
            {
                key: "2",
                id: 2,
                title: "程序员康程序员康复指南",
                createTime: "2019-10-10 14:10"
            },
            {
                key: "3",
                id: 3,
                title: "程序员康复指南",
                createTime: "2019-10-10 14:10"
            },
            {
                key: "4",
                id: 4,
                title: "程序员康复指南",
                createTime: "2019-10-10 14:10"
            }
        ];
        <Table dataSource={data} columns={columns}></Table>
      `}
      ></CodeView>
      <h4>带hover效果(花纹)</h4>
      <div style={{ marginBottom: "30px" }}>
        <Table dataSource={data} columns={columns} hover={true}></Table>
      </div>
      <CodeView
        value={`
        import { Table } from 'deer-ui'
        <Table dataSource={data} columns={columns} hover={true}></Table>
      `}
      ></CodeView>
      <h4>带多选框</h4>
      <div style={{ marginBottom: "30px" }}>
        <Table
          dataSource={data}
          columns={columns}
          rowSelection={rowSelection}
        ></Table>
      </div>
      <CodeView
        value={`
        import { Table } from 'deer-ui'
        const rowSelection = {
            //选中某一项事件，可输出当前选中的key,和当前这一行所有value
            onChange(selectedRowKeys,selectedRows) {
              console.log(selectedRowKeys);
              console.log(selectedRows);
            },
            //根据条件禁用某一项
            getCheckboxProps: record => ({
              disabled: record.id === 2
            })
          };

        <Table dataSource={data} columns={columns} rowSelection={rowSelection}></Table>
      `}
      ></CodeView>
      <h4>带边框</h4>
      <div style={{ marginBottom: "30px" }}>
        <Table
          dataSource={data}
          columns={columns}
          bordered={true}
        ></Table>
      </div>
      <CodeView
        value={`
        import { Table } from 'deer-ui'

        <Table dataSource={data} columns={columns} bordered={true}></Table>
      `}
      ></CodeView>
      <h4>自定义render内容</h4>
      <div style={{ marginBottom: "30px" }}>
        <Table
          dataSource={data}
          columns={[
            {
              title: "ID",
              dataIndex: "id",
              key: "id"
            },
            {
              title: "名字",
              dataIndex: "name",
              key: "name",
              render: ()=>{
                  return <span style={{fontSize: "30px"}}>🦌</span>
              }
            },
            {
              title: "数量",
              dataIndex: "count",
              key: "count",
              render: count => (
                <Button type="info" circle>
                  123
                </Button>
              )
            },
            {
              title: "操作",
              dataIndex: "setting",
              key: "setting",
              render: () => (
                <Button type="info" size="small">
                  详细信息
                </Button>
              )
            }
          ]}
        ></Table>
      </div>
      <CodeView
        value={`
        import { Table,Button } from 'deer-ui'

        <Table
          dataSource={data}
          columns={[
            {
              title: "ID",
              dataIndex: "id",
              key: "id"
            },
            {
              title: "名字",
              dataIndex: "name",
              key: "name",
              render: ()=>{
                  return <span style={{fontSize: "30px"}}>🦌</span>
              }
            },
            {
              title: "数量",
              dataIndex: "count",
              key: "count",
              render: count => (
                <Button type="info" circle>
                  123
                </Button>
              )
            },
            {
              title: "操作",
              dataIndex: "setting",
              key: "setting",
              render: () => (
                <Button type="info" size="small">
                  详细信息
                </Button>
              )
            }
          ]}
        ></Table>
      `}
      ></CodeView>
      <h4>loading</h4>
      <div style={{ marginBottom: "30px" }}>
        <Table
          dataSource={data}
          columns={columns}
          loading={true}
        ></Table>
      </div>
      <CodeView
        value={`
        import { Table } from 'deer-ui'

        <Table dataSource={data} columns={columns} loading={true}></Table>
      `}
      ></CodeView>
      <h4>无表头</h4>
      <div style={{ marginBottom: "30px" }}>
        <Table
          dataSource={data}
          columns={columns}
          showHeader={false}
        ></Table>
      </div>
      <CodeView
        value={`
        import { Table } from 'deer-ui'

        <Table dataSource={data} columns={columns}  showHeader={false}></Table>
      `}
      ></CodeView>
      <h4>无数据</h4>
      <div style={{ marginBottom: "30px",marginTop: '20px' }}>
        <Table
          dataSource={[]}
          columns={columns}
        ></Table>
      </div>
      <CodeView
        value={`
        import { Table } from 'deer-ui'

        <Table dataSource={[]} columns={columns} ></Table>
      `}
      ></CodeView>
    </div>
  ))
  .add('Divider 分割线',() => (
    <div>
       <h4>基本使用</h4>
       <p style={{fontSize: "14px"}}>
        在游戏的背景故事里，亚索曾经是艾欧尼亚大陆里一家剑道场的天才学徒，并且这位天才还掌握了传说中的御风剑术，想想这可怕的成就，不少人都认为亚索可以成为一名保家卫国的伟大英雄，可是在诺克萨斯的入侵下，艾欧尼亚发生了惨无人道的屠杀，亚索在那时起就负责保护一位长老的职责，可是年少无知的他自以为，能凭一己之力平息战争，于是放下自己的职责，投入战场，当他回到长老身边的时候却发现长老已经被杀，紧随其后也来人看到长老已死，而亚索站在长老的身边，便以为是亚索杀死了长老，亚索于是准备自首来弥补自己玩忽职守，但是被告原因不只是玩忽职守，更有人举报他杀死了长老，这样的结果让亚索感到吃惊，但是他自己知道结果，如果被判如监狱之中，那真正杀死长老的人便会一直逍遥法外，而自己还得背上一个杀人凶手的称号，于是为了追查真凶，亚索拔剑而战结果闹得更大了，亚索不仅背上了前两项罪名，更因为拔剑而战，被订下了谋反罪，尽管整个艾欧尼亚都与他维迪。可是这不能阻碍他查找真凶来证明自己的清白。
       </p>
       <Divider />
       <p style={{fontSize: "14px"}}>在接下来的旅程中，亚索一直在搜寻那些能够带他找到真凶的蛛丝马迹，但是却一直被昔日同窗追杀，为了证明自己的清白也为了活下去，亚索一次又一次的与昔日同胞战斗，直到有天，亚索被他的亲兄弟追上，而他的亲兄弟也是一名可怕的剑士，在此次对决中亚索也是失手将自己的亲兄弟杀死，而在亲兄弟倒下时，他不理解为什么所有人都在追杀他，为何不相信自己，他的兄弟告诉他，长老死在了御风剑术手里，试问一下整个艾欧尼亚大陆里除了你还会有谁。之后再兄弟的提示下，亚索再次踏上了征途，而线索是除了自己之外会使用御风剑术的人。</p>  
      <div style={{marginTop: "60px"}}>
        <CodeView value={`
        import { Divider } from 'deer-ui';
          // 默认为水平分割线，可在中间加入文字。
          <p>添加文字</p>
            <Divider />
          <p>添加文字</p>
        `}>
        </CodeView>
      </div>
      <h4>虚线使用</h4>
       <p style={{fontSize: "14px"}}>
       莎士比亚曾说过：“一千个人的眼里，有一千个哈姆雷特”而作为运营长达8年时间的英雄联盟里更是推出了141位强大的英雄，而在每一位观众或玩家心中，每一位英雄都有他独特的一处，正式因为这种独特，使玩家也越来越喜爱或讨厌一个英雄。今天我就细说一下亚索这个英雄。
       </p>
       <Divider dashed={true}/>
       <p style={{fontSize: "14px"}}>每一种英雄的设计都离不开典型的人设，比如凯尔的人设就是天使，费德提克的人设是稻草人，沃里克的人设是狼人。而亚索的人设是没有主公的日本武士浪人，浪人前身就是日本武士，是一个效忠于主公的持剑侍卫，可能是犯了错误，对主人不满或者主人身死后，对自己价值以及身份感到迷茫，这时候的武士只能独自一人，漫无目的前行。简称浪人。</p>  
      <div style={{marginTop: "60px"}}>
        <CodeView value={`
        import { Divider } from 'deer-ui';
          <p>添加文字</p>
            <Divider dashed/>
          <p>添加文字</p>
        `}>
        </CodeView>
      </div>
      <h4>垂直分割线</h4>
      <div style={{fontSize: "14px"}}>
        <Button type="link">新增</Button> <Divider type="vertical"/> <Button type="link">删除</Button>
      </div>
      <div style={{marginTop:"10px",fontSize: "14px"}}>
      <Button type="link">新增</Button> <Divider type="vertical" dashed={true}/> <Button type="link">删除</Button>
      </div>
      <div style={{marginTop: "60px"}}>
        <CodeView value={`
        import { Divider } from 'deer-ui';
        <Button type="link">新增</Button> <Divider type="vertical" dashed/> <Button type="link">删除</Button>
        `}>
        </CodeView>
      </div>
      <h4>带文字分割线</h4>
       <Divider orientation="center">中间</Divider>
       <Divider orientation="left">左边</Divider>  
       <Divider orientation="right">右边</Divider>  
      <div style={{marginTop: "60px"}}>
        <CodeView value={`
        import { Divider } from 'deer-ui';
          <Divider orientation="center">中间</Divider>
          <Divider orientation="left">左边</Divider>  
          <Divider orientation="right">右边</Divider>  
        `}>
        </CodeView>
      </div>
    </div>
  ))
  .add("404页面",() => (
    <div>
      <h4>基本使用</h4>
      <NotFound />
      <div style={{marginTop: "60px"}}>
        <CodeView value={`
        import { NotFound } from 'deer-ui'
        <NotFound />
        `}>
        </CodeView>
      </div>
      <h4>可配置显示内容</h4>
      <NotFound firstWord="吾虽浪迹天涯" secondWord="却未迷失本心"/>
      <div style={{marginTop: "100px"}}>
        <CodeView value={`
        import { NotFound } from 'deer-ui'
        <NotFound firstWord="吾虽浪迹天涯" secondWord="却未迷失本心"/>
        `}>
        </CodeView>
      <h4>调整样式颜色</h4>
      <NotFound firstWord="吾虽浪迹天涯" secondWord="却未迷失本心" style={{color: "red"}}/>
      <div style={{marginTop: "100px"}}>
        <CodeView value={`
        import { NotFound } from 'deer-ui'
        <NotFound firstWord="吾虽浪迹天涯" secondWord="却未迷失本心" style={{color: "red"}}/>
        `}>
        </CodeView>
      </div>
    </div>
    </div>
  ))
