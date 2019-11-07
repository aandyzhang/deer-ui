import React, { Component } from "react";
import PropTypes from "prop-types";
require("./style.scss");
const types = {
  success: "success",
  error: "error",
  warning: "warning",
  default: "default",
  primary: "primary",
  link: "link"
};
class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(Object.values(types)),
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.string
  };
  static defaultProps = {
    type: types.default,
    disabled: false,
    block: false,
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
      ...attr
    } = this.props;
    const isDisabled = disabled ? { disabled: true } : { onClick };
    if (href) {
      return (
        <a
          href={disabled ? "#" : href}
          disabled={disabled}
          className="Button-link"
          {...attr}
        >
          {children}
        </a>
      );
    }
    return (
      <div className={`Button ${block && "Button-block"}`}>
        <button
          type="button"
          {...isDisabled}
          className={`btn btn-${type} ${disabled && "btn-disabled"} ${block &&
            "btn-block"}`}
          {...attr}
        >
          {children}
        </button>
      </div>
    );
  }
}

export default Button;
