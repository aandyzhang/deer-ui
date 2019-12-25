import React from "react";
import { configure, addDecorator,addParameters } from '@storybook/react';
const { name, repository, version } = require("../package.json")
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { configureActions } from '@storybook/addon-actions';
import '@storybook/addon-console';
import '@storybook/addon-options/register';
import "../stories/style/index.less"
import "../stories/style/code.less"

function loadStories() {
  // 介绍
  require('../stories/index');
  //基础组件
  require('../stories/basis');
  //数据展示
  require('../stories/showData');
  //操作反馈
  require('../stories/feedback')
}

configureActions({
  depth: 100
})
addParameters({
  options: {
    name: `${name} v${version}`,
    url: repository,
    showSearchBox: false,
    showPanel: false,
    enableShortcuts:false,
    isToolshown: false,
    selectedPanel: undefined,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    showAddonPanel: false,
  }})

addDecorator(withInfo({
  header: true,
  maxPropsIntoLine: 100,
  maxPropObjectKeys: 100,
  maxPropArrayLength: 100,
  maxPropStringLength: 100,
}))
addDecorator(withNotes);
addDecorator(story => <div style={{ padding: "0 60px 50px" }}>{story()}</div>)
configure(loadStories, module);
