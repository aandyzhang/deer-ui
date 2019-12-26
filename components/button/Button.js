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
    type: types.default,
    disabled: false,
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
      disabled,
      block,
      onClick,
      href,
      dashed,
      loading,
      hollow,
      size,
      circle,
      ...attr
    } = this.props;
    const isDisabled = disabled ? { disabled: true } : { onClick };
    if (href) {
      return (
        <a
          href={disabled ? "#" : href}
          disabled={disabled}
          onClick={disabled  ? (e => e.preventDefault()) : ()=>{} }
          className={cls("Button-link",{"Button-link-disabled":disabled})}
          {...attr}
        >
          {children}
        </a>
      );
    }
    return (
      <div className={cls('Button', {"Button-block":block})}>
        <button
          type="button"
          {...isDisabled}
          className={cls('btn',`btn-${type}`,
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
            loading && <LoadingIcon className="Button-loading"/>
          }
          <span>{children}</span>
        </button>
      </div>
    );
  }
}

export default Button;
