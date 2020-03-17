import React from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { trim } from "../utils";
class SelectOption extends React.Component {
  static defaultProps = {
    prefixCls: "deer-ui-select-option",
    disabled: false,
    value: "",
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
  onClick = (value, label) => {
    if (this.props.onChange) {
      this.props.onChange(value, label);
    }
  };
  render() {
    const {
      children,
      prefixCls,
      className,
      value,
      disabled,
      selectValue,
      ...attr
    } = this.props;
    return (
        <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-selected`]:
            selectValue === value || trim(selectValue) === trim(children),
          [`${prefixCls}-disabled`]: disabled
        })}
        onClick={disabled ? undefined : () => this.onClick(value, children)}
        {...attr}
      >
        {children}
      </div>
    )
   
  }
}

export default SelectOption;
