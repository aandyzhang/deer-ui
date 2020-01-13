import React, { Component, Fragment,isValidElement } from "react";
import cls from "classnames";
import { CloseCircleIcon } from "../icon";
import PropTypes from "prop-types";

const types = ["text", "password", "range", "date", "number", "color", "email"];
const sizes = {
  default: "default",
  small: "small",
  large: "large"
};
class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = {
    value: this.props.defaultValue || this.props.value || ''
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.values(sizes)),
    type: PropTypes.oneOf(types),
    placeholder: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    allowClear: PropTypes.bool, //是否清除
    prefix: PropTypes.any, //前缀
    suffix: PropTypes.any, //后缀
    onClear: PropTypes.func
  };
  static defaultProps = {
    prefixCls: "deer-ui-input",
    type: "text",
    size: sizes.default,
    placeholder: "",
    readOnly: false,
    onChange: () => {},
    onClear: ()=> {},
    disabled: false,
    allowClear: false,
    prefix: null,
    suffix: null
  };
  _onChange = e => {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  clearValue = () =>{
      this.setState({
          value: ""
      })
      if (this.props.onClear) {
        this.props.onClear();
      }
  }
  static getDerivedStateFromProps(nextProps) {
    if(Reflect.has(nextProps, 'value')) {
        return {
            value: nextProps.value
        }
    }
    return null;
  }
  componentWillUnmount() {
    this.inputRef = null;
  }
  render() {
    const {
      type,
      prefixCls,
      className,
      placeholder,
      disabled,
      readOnly,
      allowClear,
      size,
      defaultValue, //eslint-disable-line
      onClear, //eslint-disable-line
      onChange, //eslint-disable-line
      prefix, //前缀
      suffix, //后缀
      ...attr
    } = this.props;
    const { value } = this.state;
    const isShowWrapper = allowClear || isValidElement(prefix) || isValidElement(suffix);
    const isSuffix = suffix || allowClear;
    const inputElement = (
      <Fragment>
        <input
          type={type}
          className={cls(prefixCls, className, {
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-${size}`]: size !== sizes.default
          })}
          onChange={this._onChange}
          disabled={disabled}
          value={value}
          readOnly={readOnly}
          ref={this.inputRef}
          placeholder={placeholder}
          {...attr}
        />
      </Fragment>
    );

    const inputWrapper = (
      <div
        className={cls(`${prefixCls}-wrapper`, {
          [`${prefixCls}-has-prefix`]: prefix,
          [`${prefixCls}-has-suffix`]: isSuffix
        })}
      >
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        {inputElement}
        {isSuffix && (
          <span className={`${prefixCls}-suffix`}>
            {allowClear && value ? (
              <CloseCircleIcon
                className={cls(`${prefixCls}-clear`)}
                onClick={this.clearValue}
              />
            ) : (
              suffix
            )}
          </span>
        )}
      </div>
    );

    if (isShowWrapper) {
      return inputWrapper;
    }
    return inputElement;
  }
}

export default Input;
