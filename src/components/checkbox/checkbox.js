import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// require("./style.less");

class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    indeterminate: PropTypes.bool,
    size: PropTypes.oneOf(["small", "default", "large"])
  };
  static defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => {},
    indeterminate: false,
    defaultChecked: false,
    size: "default"
  };
  state = {
    checked: this.props.checked || this.props.defaultChecked,
    prevChecked: false //解决getDerivedStateFromPropsbug
  }
 // eslint-disable-next-line
  // UNSAFE_componentWillReceiveProps({checked}) {
  //   // console.log('UNSAFE_componentWillReceiveProps')
  //   if (checked !== this.props.checked) {
  //     this.setState({
  //       checked
  //     });
  //   }
  // }
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
    this.setState(({ checked }) => {
        return {
          checked: !checked
        };
      });
      this.props.onChange(e);
  }

  render() {
    const { children, value,disabled,indeterminate } = this.props;
    const { checked } = this.state;
    return (
      <div className="Checkbox">
        <label className={classNames("Checkbox-wrapper",{
            "Checkbox-wrapper-disabled": disabled
        })}>
          <span
            className={classNames("Checkbox-wrapper-content", {
              "Checkbox-wrapper-content-checked": checked,
              "Checkbox-wrapper-content-indeterminate": checked && indeterminate
            })}
          >
            <input
              type="checkbox"
              onChange={this._onChange}
              value={value}
              checked={checked}
              disabled={disabled}
              className="Checkbox-checkbox"
            />
            <span className="Checkbox-inner"></span>
            <span>{children}</span>
          </span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
