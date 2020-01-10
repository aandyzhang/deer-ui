import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from 'classnames'

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
    prefixCls: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(types)),
    dashed: PropTypes.bool,
    orientation: PropTypes.oneOf(Object.values(orientations))
  };
  static defaultProps = {
    prefixCls: "deer-ui-divider",
    type: types.horizontal,
    dashed: false,
    orientation: orientations.center
  };
  renderOrientation() {
    const { orientation,children, className, prefixCls,...arr } = this.props;
    return (
      <div className={cls(`${prefixCls}-orientation`,className,{[`${prefixCls}-orientation-${orientation}`]:orientation})} {...arr}>
        <b />
        <span className={`${prefixCls}-orientation-content`}>{children}</span>
        <b />
      </div>
    )
  }
  render() {
    const { type,dashed,children,prefixCls,className,...arr } = this.props;
    if(children) {
      return this.renderOrientation()
    }else{
      return type === "vertical" ? <div {...arr} className={cls(`${prefixCls}-vertical`, className, {['dashed']:dashed})}></div> 
      : <div className={cls(`${prefixCls}-horizontal`,className,{['dashed']:dashed})} {...arr}></div>
    }
  }
}

export default Divider;
