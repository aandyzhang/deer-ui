import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";
class CheckboxGroup extends PureComponent {
  state = {
    value: []
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
    const {options, disabled ,value:currentValue,defaultValue } = this.props;
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
