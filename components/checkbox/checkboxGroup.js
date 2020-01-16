import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";
class CheckboxGroup extends PureComponent {
  state = {
    value: this.props.defaultValue.length > 0 && this.props.defaultValue || []
  };
  static propTypes = {
    defaultValue: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func
  };
  static defaultProps = {
    defaultValue: [],
    disabled: false,
    name: "",
    options: [],
    value: [],
    onChange: () => {}
  };

  onCheckboxChange = e => {
    const currentValue = e.target.value;
    let { value } = this.state;
    const currentIndex = value.findIndex(v => v === currentValue);
    //如果没有则添加，有则删除
    if (currentIndex < 0) {
      value.push(currentValue);
    } else {
      value.splice(currentIndex, 1);
    }
    this.setState({ value });

    if(this.props.onChange) {
      this.props.onChange(value);
    }
  };


  render() {
    const {options, 
      disabled,
      value:currentValue,
      defaultValue,
      onChange,    //eslint-disable-line
    } = this.props;
    return (
      <div className="checkboxGroup">
        {/* value去匹配选中项目 */}
        {currentValue.length > 0 &&
          currentValue.map((item, index) => {
              const isChecked = defaultValue.find(v => v === item);
            return (
              <Checkbox
                value={currentValue[index]}
                onChange={this.onCheckboxChange}
                onClick={this._onClick}
                disabled={disabled}
                key={index}
                defaultChecked={!!isChecked}
              >
                {options[index]}
              </Checkbox>
            );
          })}
      </div>
    );
  }
}

export default CheckboxGroup;
