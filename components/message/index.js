import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cls from 'classnames';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon, LoadingIcon } from "../icon";
// require("./style.less");
class Message extends PureComponent {
  state = {
    visible: true
  };
  animationTime = 500;
  _containerRef = null;
  _currentNodeRef = null;
  constructor(props) {
    super(props);
    this.typeConfig = {
      info: "info",
      success: "success",
      error: "error",
      warning: "warning",
      primary: "primary"
    };
  }
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    duration: PropTypes.number,
    onClose: PropTypes.func,
    darkTheme: PropTypes.bool
  };

  static defaultProps = {
    duration: 2,
    darkTheme: false,
    onClose: () => {}
  };

  componentDidMount() {
    const { duration, onClose } = this.props;
    this.timer = setTimeout(() => {
      this.setState({ visible: false }, () => {
        setTimeout(() => {
          this.destroy(); 
        }, this.animationTime);
        onClose();
      });
    }, duration * 1000);
  }

  static renderElement = (type, title, onClose,duration,darkTheme) => {
    const container = document.createElement("div");
    const currentNode = document.body.appendChild(container);
    const _message = ReactDOM.render(
      <Message
        type={type}
        title={title}
        duration={duration}
        darkTheme={darkTheme}
        onClose={onClose}
      />,
      container
    );
    if (_message) {
      _message._containerRef = container;
      _message._currentNodeRef = currentNode;
      return {
        destroy: _message.destroy
      };
    }
    return {
      destroy: () => {}
    };
  };

  destroy = () => {
    if (this._containerRef) {
      ReactDOM.unmountComponentAtNode(this._containerRef);
    }
    if (this._currentNodeRef) {
      this._currentNodeRef.remove();
    }
  };

  componentWillUnmount() {
    this.destroy();
    clearTimeout(this.timer);
  }

  static success(title, onClose, duration,darkTheme) {
    return this.renderElement("success", title, onClose,duration,darkTheme);
  }
  static error(title, onClose,duration, darkTheme) {
    return this.renderElement("error", title, onClose,duration, darkTheme);
  }
  static warning(title, onClose,duration, darkTheme) {
    return this.renderElement("warning", title, onClose, duration, darkTheme);
  }
  static info(title, onClose,duration, darkTheme) {
    return this.renderElement("info", title, onClose, duration,darkTheme);
  }
  static primary(title, onClose,duration,darkTheme) {
    return this.renderElement("primary", title, onClose, duration,darkTheme);
  }

  render() {
    const { visible } = this.state;
    const typeConfig = this.typeConfig;
    const { title, type,className, darkTheme, ...attr} = this.props;
    const messageCss = visible ? 'message-open' : 'message-close';
    return <div className={cls('message', className, 
      { [`message-${type}`]: type },
      { ['message-theme-dark']: darkTheme},[`${messageCss}`])} {...attr}>
        <span className="message-icon">
         {type === typeConfig['info'] ? <InfoIcon/> : null}
         {type === typeConfig['success'] ? <SuccessIcon/> : null}
         {type === typeConfig['warning'] ? <WarningIcon/> : null}
         {type === typeConfig['error'] ? <ErrorIcon/> : null}
         {type === typeConfig['primary'] ? <LoadingIcon/> : null}
        </span>
        {title}
      </div>;
  }
}

export default Message;
