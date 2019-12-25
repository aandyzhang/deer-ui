import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from 'classnames'
import { LoadingIcon } from "../icon";
// require("./style.less");
class Spin extends PureComponent {
  static propTypes = {
    spinning: PropTypes.bool,
    tip: PropTypes.string,
    color: PropTypes.string,
    indicator: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    size: PropTypes.oneOf(["", "default", "small", "large"])
  };
  static defaultProps = {
    size: "",
    spinning: true,
    tip: "",
    indicator: <LoadingIcon />,
    color: '#31c27c'
  };
  render() {
    const { spinning, indicator, children, tip,size,color } = this.props;
    if (!spinning) {
      return children;
    }
    if (children) {
       const fontSize = !size || size ==='default'  ? "" : `Spin-wrapper-icon-${size}`
      return (
        <div className='Spin-container'>
          <div className="Spin-wrapper" style={{color}}>
            <div className={`Spin-wrapper-icon ${fontSize}`}>{indicator}</div>
            <div className="Spin-wrapper-tip">{tip}</div>
          </div>
          <div className="Spin-blur">{children}</div>
        </div>
      );
    }
    return (
        <div className="Spin-spinning">
            <span className={cls("Spin-indicator",{[`Spin-indicator-${size}`]:size})} style={{color}}>
              {indicator}
            </span>
        </div>
    )
  }
}

export default Spin;
