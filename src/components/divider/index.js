import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from 'classnames'
// require("./style.less");
const types = {
  horizontal: "horizontal",
  vertical: "vertical"
};
const orientations = {
  left: "left",
  right: "right",
  center: "center"
};

class Divider extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(Object.values(types)),
    dashed: PropTypes.bool,
    orientation: PropTypes.oneOf(Object.values(orientations))
  };
  static defaultProps = {
    type: types.horizontal,
    dashed: false,
    orientation: orientations.center
  };
  renderOrientation() {
    const { orientation,children } = this.props;
    return (
      <div className={cls('Divider-orientation',{[`Divider-orientation-${orientation}`]:orientation})}>
        <b />
        <span className="Divider-orientation-content">{children}</span>
        <b />
      </div>
    )
  }
  render() {
    const { type,dashed,children } = this.props;
    const dashedStyle = (dashed && 'dashed') || '';
    if(children) {
      return this.renderOrientation()
    }else{
      return type === "vertical" ? <div className={cls('Divider-vertical', {[`${dashedStyle}`]:dashedStyle})}></div> 
      : <div className={`Divider-horizontal ${dashedStyle}`}></div>
    }
  }
}

export default Divider;
