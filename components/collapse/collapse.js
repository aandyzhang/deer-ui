import React, { PureComponent } from "react";
import PropTypes from 'prop-types'
import cls from 'classnames'
import { ArrowRightIcon } from "../icon";

class Collapse extends PureComponent {
  state = {
    activeKey: [],
    currentActiveKey: ""
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    openKeys: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    hideArrow: PropTypes.bool,
    rightArrow: PropTypes.bool,
    icon: PropTypes.any
  };

  static defaultProps = {
    prefixCls: "deer-ui-collapse",
    openKeys: [],
    disabled: false,
    hideArrow: false,
    rightArrow: false,
    icon: <ArrowRightIcon/>
  };

  onChange = key => {
    let activeKey = [...this.props.openKeys];
    if (!activeKey.includes(key)) {
      activeKey.push(key);
    } else {
      activeKey = activeKey.filter(_activeKey => _activeKey !== key);
    }

    this.setState({
      activeKey,
      currentActiveKey: key
    })

    if (this.props.onChange) {
      this.props.onChange(activeKey);
    }
  };
  render() {
    const { children,rightArrow,hideArrow,disabled,openKeys,icon,prefixCls,className, ...attr } = this.props;
    const { activeKey } = this.state;
    const items = React.Children.map(children, (element, index) => {
      return React.cloneElement(element, {
        key: index,
        activeKey: String(index),
        disabled: element.props.disabled || disabled,
        onChange: ()=>{this.onChange(element.key)},
        rightArrow: element.props.rightArrow || rightArrow,
        hideArrow: element.props.hideArrow || hideArrow,
        icon: element.props.icon || icon,
        visible: String(openKeys).includes(String(element.key) || String(activeKey).includes(String(index))), //eslint-disable-line
      });
    });
    return <div className={cls(prefixCls,className)} {...attr}>{items}</div>;
  }
}

export default Collapse;
