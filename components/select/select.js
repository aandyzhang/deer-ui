import React, { createRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import cls from "classnames";
import Input from "../input";
import Empty from "../empty";
import { debounce } from '../utils'
import { LoadingIcon, DownIcon } from "../icon";
const sizes = {
  default: "default",
  small: "small",
  large: "large"
};
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.toggleContainer = createRef();
    this.wrapper = createRef();
  }

  state = {
    selectValue: this.props.defaultValue || this.props.value || "",
    visible: this.props.visible || false,
    left: 0,
    top: 0,
    width: 0
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.oneOf(Object.values(sizes)),
    showLabel: PropTypes.bool,
    getPopupContainer: PropTypes.func,
    position: PropTypes.string
  };
  static defaultProps = {
    prefixCls: "deer-ui-select",
    onChange: () => {},
    size: "default",
    NoData: <Empty />,
    showLabel: false,
    getPopupContainer: () => document.body,
    position: "bottom"
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { defaultValue } = nextProps;
    if (defaultValue === prevState.selectValue) {
      return {
        selectValue: defaultValue
      };
    }
    return null;
  }
  onResizeHandler = debounce(()=>{
    this.setWrapperBounding()
  },600);
  
  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler, false);
    window.addEventListener("resize", this.onResizeHandler);
    if (this.props.visible) {
        this.setWrapperBounding();
      }
  }

  setWrapperBounding (cb=()=>{}) {
    const { left, top, width } = this.getWrapperBounding();
    this.setState({ left, top, width },cb);
  }
  getWrapperBounding() {
    const {
        width,
        height,
        top,
        left
      } = this.toggleContainer.current.getBoundingClientRect();
      const {
        height: wrapperHeight
      } = this.wrapper.current.getBoundingClientRect();
      const { scrollX, scrollY } = window;

      const positions = {
        //显示在上
        top: {
          top: top + scrollY - wrapperHeight - 10,
          left: left + scrollX,
          width
        },
        //显示在下
        bottom: {
          top: top + height + scrollY,
          left: left + scrollX,
          width
        }
      };
      return positions[this.props.position];
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler, false);
    window.removeEventListener("resize", this.onResizeHandler);
  }
  onClickOutsideHandler = e => {
    e.stopPropagation();
    // .contains() 判断一个元素内是否包含另一个元素
    if (
      this.state.visible &&
      !this.props.visible &&
      !this.toggleContainer.current.contains(e.target) && 
      !e.target.classList.contains(`${this.props.prefixCls}-option-disabled`)
    ) {
      this.setState({
        visible: false
      });
    }
  };
  onClickHandler = () => {
    const visible = !this.state.visible;
    this.setState({
      visible
    });
    if(visible) {
        this.setWrapperBounding(()=>{
          //将隐藏的内容显示出来
          scrollIntoViewIfNeeded(this.wrapper.current, {
            scrollMode: "if-needed",
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          })
        })
    }
  };
  get selectValue() {
    const { selectValue } = this.state;
    if(this.props.children) {
      return (
        this.selectOptions.find(
          ({key}) => key === selectValue
        ) || {}
      ).value || ""
    }else{
      return selectValue
    }
  }
  get selectOptions() {
    if(this.props.children) {
      return this.props.children.map(({ props }) => {
        return {
          key: props.value,
          value: props.children
        };
      });
    }
    return {}
  }
  onClear = () => {
    this.setState({ selectValue: "", visible: false });
    this.props.onChange("");
  };
  onChange = (value, label) => {
    const { showLabel } = this.props;
    this.setState({ selectValue: value, visible: false, label });
    if (showLabel) {
      this.props.onChange({
        key: value,
        label
      });
    } else {
      this.props.onChange(value);
    }
  };
  render() {
    const { visible, left, top, width } = this.state;
    const {
      prefixCls,
      className,
      style,
      disabled,
      size,
      allowClear,
      loading,
      children,
      NoData,
      placeholder, //eslint-disable-line
      getPopupContainer, //挂载点
      showLabel, //eslint-disable-line
      ...attr
    } = this.props;
    return (
      <div
        className={cls(`${prefixCls}`, className)}
        style={style}
        ref={this.toggleContainer}
        {...attr}
      >
        <div
          className={cls(`${prefixCls}-inner`, {
            [`${prefixCls}-active`]: visible
          })}
        >
          <Input
            value={this.selectValue}
            disabled={disabled}
            readOnly
            size={size}
            placeholder={placeholder}
            style={{
              width: style && style.width
            }}
            allowClear={allowClear}
            onClick={this.onClickHandler}
            onClear={this.onClear}
            suffix={
              loading ? (
                <LoadingIcon className={`${prefixCls}-loading`} />
              ) : (
                <DownIcon className={`${prefixCls}-arrow`} />
              )
            }
          />
        </div>
        {createPortal(
          <div className={cls(`${prefixCls}-content`,{
            [`${prefixCls}-open`]: visible,
            [`${prefixCls}-close`]: !visible,
          })} 
            ref={this.wrapper}
            style={{
                width,
                left,
                top
            }}>
            {children
              ? React.Children.map(children, (element, key) => {
                  return React.cloneElement(element, {
                    key,
                    onChange: this.onChange,
                    selectValue: this.state.selectValue,
                  });
                })
              : NoData}
          </div>,
          getPopupContainer()
        )}
      </div>
    );
  }
}

export default Select;
