import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

class Checkbox extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    indeterminate: PropTypes.bool,
    size: PropTypes.oneOf(["small", "default", "large"])
  };
  static defaultProps = {
    prefixCls: 'deer-ui-checkbox',
    checked: false,
    disabled: false,
    onChange: () => {},
    indeterminate: false,
    defaultChecked: false,
    size: "default"
  };
  state = {
    checked: this.props.checked || this.props.defaultChecked,
    prevChecked: false 
  }

 static getDerivedStateFromProps(nextProps, currentState) {
   const { checked } = nextProps;
    if(checked !== currentState.prevChecked){
      return {
        checked,
        prevChecked: checked
      }
    }
    return null
 }

  _onChange = (e) =>{
    this.setState({
      checked: e.target.checked
    })
    this.props.onChange(e);
  }

  render() {
    const { children, 
        className,
        value,
        disabled,
        indeterminate,
        onChange, //eslint-disable-line
        prefixCls,...arr} = this.props;
    const { checked } = this.state;
    return (
      <div className={`${prefixCls}`}>
        <label className={cls(`${prefixCls}-wrapper`,{
            [`${prefixCls}-wrapper-disabled`]: disabled
        })} {...arr}>
          <span
            className={cls(`${prefixCls}-wrapper-content`, className,{
              [`${prefixCls}-wrapper-content-checked`]: checked,
              [`${prefixCls}-wrapper-content-indeterminate`]: checked && indeterminate
            })}
          >
            <input
              type="checkbox"
              onChange={this._onChange}
              value={value}
              checked={checked}
              disabled={disabled}
              className={`${prefixCls}-checkbox`}
            />
            <span className={`${prefixCls}-inner`}></span>
            <span>{children}</span>
          </span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
