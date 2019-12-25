import React from "react";
import { storiesOf } from "@storybook/react";
import { Tabs, CodeView, Collapse, Icon, Empty, Button, Table,Divider,NotFound } from "../src";
const TabPane = Tabs.TabPane;
import {
  SuccessIcon,
  CloseIcon,
  UserIcon,
  WarningIcon
} from "../src/components/icon";
import "../src/components/collapse/style.less";
import "../src/components/tabs/style.less";
import "../src/components/empty/style.less";
import "../src/components/table/style.less";
import "../src/components/notFound/style.less";
import "../src/components/codeview/style.less";
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
