import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

class Layout extends PureComponent {
  static defaultProps = {
    prefixCls: "deer-ui-layout",
    width: 1200,
    center: false
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    center: PropTypes.bool
  };
  render() {
    const {
      prefixCls,
      width,
      style,
      center,
      className,
      children,
      ...attr
    } = this.props;
    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-center`]: center
        })}
        {...attr}
        style={{ width, ...style }}
      >
        <div className={cls(`${prefixCls}-wrap`)}>{children}</div>
      </div>
    );
  }
}

export default Layout;
