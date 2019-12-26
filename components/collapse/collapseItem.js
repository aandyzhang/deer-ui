import React, { PureComponent } from "react";
import cls from 'classnames'
import PropTypes from 'prop-types'

class CollapseItem extends PureComponent {
  state = {
    visible: this.props.visible
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    rightArrow: PropTypes.bool,
    disabled: PropTypes.bool
  }
  static defaultProps = {
    prefixCls: "deer-ui-collapse-item",
    rightArrow: false,
    disabled: false,
  }
  toggleContentPanel() {
    this.setState({
        visible: !this.state.visible
      });
      this.props.onChange(this.props.activeKey);
  }
  render() {
    const { children, title, rightArrow,hideArrow,disabled,icon,prefixCls } = this.props;
    const { visible } = this.state;
    return (
      <div className={`${prefixCls}`}>
        <div className={cls(`${prefixCls}-header`,{[`${prefixCls}-header-disabled`]: disabled})} onClick={disabled ? undefined : ()=>{ this.toggleContentPanel()}}>
          <div className={cls(`${prefixCls}-icon`,{[`${prefixCls}-icon-right`]:rightArrow,[`${prefixCls}-icon-active`]:visible})}>
            {!hideArrow ? icon : null}
          </div>
          <div className={`${prefixCls}-title`}>
            {title}
          </div>
        </div>
        <div className={cls(`${prefixCls}-content`,{[`${prefixCls}-content-hide`]: !visible})}>{children}</div>
      </div>
    );
  }
}

export default CollapseItem;
