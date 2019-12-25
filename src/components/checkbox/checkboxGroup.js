import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";
class CheckboxGroup extends PureComponent {
  state = {
    value:
    // this.props.value ||
    this.props.defaultValue 
    // this.getCheckedValue()
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
    const { value } = this.state;
    const currentIndex = value.findIndex(v => v === currentValue);
    //如果没在就加入数组 否则就是 取消选中 删除掉
    if (currentIndex < 0) {
      value.push(currentValue);
    } else {
      value.splice(currentIndex, 1);
    }
    this.setState({ value });
    this.props.onChange(value);
  };
  render() {
    const { options, disabled ,value:currentValue } = this.props;
    const { value } = this.state
    return (
      <div className="checkboxGroup">
        {options.length > 0 &&
          options.map((item, index) => {
              const isChecked = value.find(v => v === item);
            return (
              <Checkbox
                value={currentValue[index]}
                onChange={this.onCheckboxChange}
                disabled={disabled}
                key={index}
                defaultChecked={!!isChecked}
              >
                {item}
              </Checkbox>
            );
          })}
      </div>
    );
  }
}

export default CheckboxGroup;
