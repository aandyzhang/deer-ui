import React from "react"
import { configure, addDecorator } from '@storybook/react';
const { name, repository, version } = require("../package.json")
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { configureActions } from '@storybook/addon-actions';
import { withOptions } from '@storybook/addon-options';
import '@storybook/addon-console';
// import "../components/styles/index.less"
import "../stories/style/code.scss"

function loadStories() {
  // 介绍
  require('../stories/index');
}

configureActions({
  depth: 100
})

addDecorator(withInfo({
  header: true,
  maxPropsIntoLine: 100,
  maxPropObjectKeys: 100,
  maxPropArrayLength: 100,
  maxPropStringLength: 100,
}))
addDecorator(withNotes);
addDecorator(withOptions({
  name: `${name} v${version}`,
  url: repository,
  sidebarAnimations: true,
}))

addDecorator(story => <div style={{ padding: "0 60px 50px" }}>{story()}</div>)
configure(loadStories, module);
