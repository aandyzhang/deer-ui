import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
// require("./style.less");
class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  static defaultProps = {
    fontSize: "25px",
    color: undefined,
    type: "not-find"
  };

  render() {
    const { type, fontSize, color, margin } = this.props;
    const styleObj = {
      fontSize,
      color,
      margin,
      verticalAlign: "middle"
    };

    return (
      <Fragment>
        <svg className="icon" aria-hidden="true" style={styleObj}>
          <use xlinkHref={`#${type}`}></use>
        </svg>
      </Fragment>
    );
  }
  static createFromIconfontCN({ scriptUrl }) {
    if (
      typeof document !== "undefined" &&
      typeof window !== "undefined" &&
      typeof document.createElement === "function" &&
      typeof scriptUrl === "string" &&
      scriptUrl.length
    ) {
      const script = document.createElement("script");
      script.setAttribute("src", scriptUrl);
      script.setAttribute("data-namespace", scriptUrl);
      document.body.appendChild(script);
    }
  }
}

export default Icon;
