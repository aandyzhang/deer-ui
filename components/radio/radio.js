import React, { Component } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

class Radio extends Component {
  state = {
    checked: this.props.defaultChecked || this.props.checked || false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    size: PropTypes.oneOf(["small", "default", "large"]),
    disabled: PropTypes.bool
  };
  static defaultProps = {
    prefixCls: "deer-ui-radio",
    size: "default",
    defaultChecked: false,
    checked: false,
    disabled: false
  };

  _onChange = e => {
    this.setState({
      checked: true
    });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps({ checked }) {
    if (checked !== this.props.checked) {
      this.setState({
        checked
      });
    }
  }


  render() {
    const {
      children,
      value,
      onChange, //eslint-disable-line
      prefixCls,
      className,
      disabled,
      ...attr
    } = this.props;
    const { checked } = this.state;
    return (
      <label
        className={cls(`${prefixCls}-wrapper`, {
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-disabled`]: disabled
        })}
        {...attr}
      >
        <span className={cls(prefixCls, className)}>
          <input
            className={`${prefixCls}-input`}
            type="radio"
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={this._onChange}
          />
          <span className={cls(`${prefixCls}-inner`)} />
        </span>
        <span className={`${prefixCls}-children`}>{children}</span>
      </label>
    );
  }
}

export default Radio;
