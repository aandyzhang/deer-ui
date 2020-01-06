import React from "react";
import PropTypes from "prop-types";
import Lowlight from "react-lowlight";
import js from "highlight.js/lib/languages/javascript";
import Message from '../message'

//选取highlight.js内置主题

import "highlight.js/styles/color-brewer.css";

import {
    UpIcon,
    DownIcon,
  } from "../icon";

// 主题预览 https://highlightjs.org/static/demo/

Lowlight.registerLanguage("js", js);

/**
 * 显示code组件，切换展示
 * react-markdown 和 react-lowlight 一起使用 实现代码高亮
 */
export default class CodeView extends React.PureComponent {
  state = {
      isShow: false
  }
  static propTypes = {
    value: PropTypes.string,
    language: PropTypes.string,
    inline: PropTypes.bool,
    prefixCls: PropTypes.string.isRequired,
  };

  static defaultProps = {
    prefixCls: "deer-ui-code-view",
    language: "js"
  }
  render() {
    const { language,prefixCls, value, inline } = this.props;
    return (
      <div className={`${prefixCls}`}>
        <div className="toggle" onClick={()=>{this.showCode()}}>
            {
                !this.state.isShow ? <div>显示代码<DownIcon className="codeView-icon"/></div>: <div>隐藏代码 <span className="copy" onClick={(e)=>{this.copy(e)}}>复制代码</span><UpIcon style={{fontSize:'24px',verticalAlign: '-7px',marginLeft:"10px"}}/></div>
            }
           
        </div>
        {
            this.state.isShow ? <Lowlight language={language} value={value} inline={inline} /> : null
        }
      </div>
    );
  }
  showCode() {
      const { isShow } = this.state
      this.setState({
          isShow: !isShow
      })
  }
  copy(e) {
    e.stopPropagation();
    const el = document.createElement('textarea');
    el.value = this.props.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    Message.success('复制成功');
  }
}
