import React, { PureComponent } from "react";
import PropTypes from "prop-types";
require("./style.scss");

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.tabsHeader = React.createRef();
  }
  state = {
    lineWidth: 0,
    lineOffsetLeft: 0,
    activeKey: ~~(this.props.activeKey || this.props.defaultActiveKey)
  };
  static defaultProps = {
    defaultActiveKey: "1",
    onChange: () => {}
  };

  static propTypes = {
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
  };

  componentDidMount() {
    this.setActiveLineStyle();
  }

  setActiveLineStyle() {
    const { width, left } =
      (this.activeTab && this.activeTab.getBoundingClientRect()) || {};
    const { left: headerOffset } =
      (this.tabsHeader.current &&
        this.tabsHeader.current.getBoundingClientRect()) ||
      {};
    this.setState({
      lineWidth: width,
      lineOffsetLeft: left - headerOffset
    });
  }

  //   UNSAFE_componentWillReceiveProps({ activeKey }) {
  //       console.log('change')
  //     const _activeKey = ~~activeKey;
  //     if (_activeKey !== this.props.activeKey) {
  //       this.setState({ activeKey: _activeKey });
  //     }
  //   }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { activeKey } = nextProps;
    const _activeKey = ~~activeKey;
    if (_activeKey !== prevState.activeKey) {
      return {
        _activeKey
      };
    }
  }

  onTabChange = disabled => key => () => {
    if (!disabled) {
      this.setState(
        {
          activeKey: key
        },
        () => {
          this.setActiveLineStyle();
        }
      );
      this.props.onChange(key);
    }
  };

  render() {
    const { children, arr } = this.props;
    const { activeKey, lineWidth, lineOffsetLeft } = this.state;
    const childrenWithProps = React.Children.map(
      children,
      ({ props: { tab, disabled }, key }, index) => {
        const Mkey = key >> 0;
        const bindActiveRef =
          activeKey === Mkey ? { ref: node => (this[`activeTab`] = node) } : {};
        return (
          <div
            key={Mkey}
            role="tab"
            {...bindActiveRef}
            className={`Mtabs-header-item ${
              activeKey === Mkey ? "active" : ""
            } ${disabled ? "disabled" : ""}`}
            onClick={this.onTabChange(disabled)(Mkey)}
          >
            {tab}
          </div>
        );
      }
    );
    const content = React.Children.map(children, (element, index) => {
      const _key = ~~element.key;
      return React.cloneElement(element, {
        activeKey,
        visible: activeKey === _key,
        key1: _key
      });
    });
    return (
      <div className="Mtabs" {...arr}>
        <div className="Mtabs-header" ref={this.tabsHeader}>
          {childrenWithProps}
          <div
            className="Mtabs-line"
            style={{
              width: lineWidth,
              transform: `translate3d(${lineOffsetLeft}px,0,0)`
            }}
          ></div>
        </div>
        <div className="Mtabs-content">{content}</div>
      </div>
    );
  }
}
export default Tabs;
