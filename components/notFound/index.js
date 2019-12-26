import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// require("./style.less");
class NotFound extends PureComponent {
  static propTypes = {
    firstWord: PropTypes.string,
    secondWord: PropTypes.string
  };
  static defaultProps = {
    firstWord: "长路漫漫",
    secondWord: "唯剑作伴"
  };

  render() {
    const { firstWord,secondWord, ...arr} = this.props
    return (
      <div className="NotFound" {...arr}>
        <div className="NotFound-title">404</div>
        <div className="NotFound-item">
          <div>“</div>
            <div className="NotFound-item-first">{firstWord}</div>
            <div className="NotFound-item-second">{secondWord}</div>
          <div>”</div>
        </div>
      </div>
    );
  }
}

export default NotFound;
