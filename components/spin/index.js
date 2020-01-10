import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from 'classnames'
import { LoadingIcon } from "../icon";
class Spin extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    spinning: PropTypes.bool,
    tip: PropTypes.string,
    color: PropTypes.string,
    indicator: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    size: PropTypes.oneOf(["", "default", "small", "large"])
  };
  static defaultProps = {
    prefixCls: "deer-ui-spin",
    size: 'default',
    spinning: true,
    tip: "loading",
    indicator: <LoadingIcon />,
    color: '#31c27c'
  };
  render() {
    const { spinning, indicator, children, tip,size,color,prefixCls, className, ...attr } = this.props;
    if (!spinning) {
      return children;
    }
    if (children) {
       const fontSize = !size || size ==='default'  ? "" : `${prefixCls}-wrapper-icon-${size}`
      return (
        <div className={`${prefixCls}`}>
          <div className={cls(`${prefixCls}-wrapper`,[className])} style={{color}} {...attr}>
            <div className={cls(`${prefixCls}-wrapper-icon`, {
              [`${fontSize}`]: fontSize
            })}>
              {indicator}
            </div>
            <div className={`${prefixCls}-wrapper-tip`}>{tip}</div>
          </div>
          <div className={`${prefixCls}-blur`}>{children}</div>
        </div>
      );
    }
    return (
        <div className={`${prefixCls}-spinning`}>
            <span className={cls(`${prefixCls}-indicator`,{[`${prefixCls}-indicator-${size}`]:size})} style={{color}}>
              {indicator}
            </span>
        </div>
    )
  }
}

export default Spin;
