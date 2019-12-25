import React from "react";
import PropTypes from "prop-types";
import Lowlight from "react-lowlight";
import js from "highlight.js/lib/languages/javascript";
// 内置了很多 颜色主题

// require('./style.less')
//备选主题
// import "highlight.js/styles/tomorrow-night-eighties.css"
// import "highlight.js/styles/tomorrow-night-eighties.css";
import "highlight.js/styles/color-brewer.css";
// Color Brewer
import {
    UpIcon,
    DownIcon,
  } from "../icon";
// import "highlight.js/styles/monokai-sublime.css"
// 主题预览 https://highlightjs.org/static/demo/
// react-markdown 和 react-lowlight 一起使用 实现高亮 markdown

Lowlight.registerLanguage("js", js);

export default class CodeView extends React.PureComponent {
  state = {
      isShow: false
  }
  static propTypes = {
    value: PropTypes.string,
    language: PropTypes.string,
    inline: PropTypes.bool
  };

  render() {
    const { language, value, inline } = this.props;
    return (
      <div className="codeView">
        <div className="toggle" onClick={()=>{this.showCode()}}>
            {
                !this.state.isShow ? <div>显示代码<DownIcon style={{fontSize:'24px',verticalAlign: '-7px',marginLeft:"10px"}}/></div>: <div>隐藏代码 <span className="copy" onClick={(e)=>{this.copy(e)}}>复制代码</span><UpIcon style={{fontSize:'24px',verticalAlign: '-7px',marginLeft:"10px"}}/></div>
            }
           
        </div>
        {
            this.state.isShow ? <Lowlight language={language || "js"} value={value} inline={inline} /> : null
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
    alert('复制成功')
  }
}
