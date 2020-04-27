import React, { Component } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";
const types = {
  success: "success",
  error: "error",
  warning: "warning",
  default: "default",
  primary: "primary",
  link: "link",
  info: "info"
};

const sizes = {
  small: "small",
  default: "default",
  large: "large"
};

class Button extends Component {
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(types)),
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.string,
    dashed: PropTypes.bool,
    loading: PropTypes.bool,
    hollow: PropTypes.bool,
    circle: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(sizes))
  };
  static defaultProps = {
    prefixCls: "deer-ui-button",
    type: types.default,
    disabled: false,
    href: "",
    dashed: false,
    block: false,
    loading: false,
    hollow: false,
    circle: false,
    size: sizes.default,
    onClick: () => {}
  };
  render() {
    const {
      type,
      children,
      prefixCls,
      disabled,
      block,
      onClick,
      href,
      dashed,
      loading,
      hollow,
      size,
      circle,
      className,
      ...attr
    } = this.props;
    const isDisabled = disabled ? { disabled: true } : { onClick };
    if (href) {
      return (
        <a
          href={disabled ? "javascript:void(0);" : href}
          disabled={disabled}
          className={cls(`${prefixCls}-link`,{[`${prefixCls}-link-disabled`]:disabled})}
          {...attr}
        >
          {children}
        </a>
      );
    }
    return (
      <div className={cls(prefixCls, {[`${prefixCls}-block`]:block})}>
        <button
          type="button"
          {...isDisabled}
          className={cls(`${prefixCls}-btn`,className,`${prefixCls}-btn-${type}`,
          {
            'btn-hollow': hollow,
            'btn-disabled':disabled,
            'btn-block':block,
            'btn-dashed':dashed,
            'btn-loading':loading,
            [`btn-size-${size}`]: size !== sizes.default,
            ['btn-circle']: circle
          }
        )}
          {...attr}
        >
          {
            !circle && loading && <LoadingIcon className={`${prefixCls}-loading`}/>
          }
          <span>{children}</span>
        </button>
      </div>
    );
  }
}

export default Button;
