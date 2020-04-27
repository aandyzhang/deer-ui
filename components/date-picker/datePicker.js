import React, { Component, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import LocaleWrapper from '../locale/localeWrapper';
import cls from "classnames";
import Input from "../input";
import Spin from "../spin";
import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from "../icon";

const sizes = {
  default: "default",
  small: "small",
  large: "large"
};

const WEEKDAY = 7;

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.wrapper = createRef();
    this.toggleContainer = createRef();
  }
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    format: PropTypes.string,
    placeholder: PropTypes.string,
    allowClear: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(sizes)),
    onChange: PropTypes.func,
    getPopupContainer: PropTypes.func,
    position: PropTypes.string,
    loading: PropTypes.bool,
    tip: PropTypes.string,
    showDayInPrevMonth: PropTypes.bool,
    showDayInNextMonth: PropTypes.bool,
    showToday: PropTypes.bool,
  };
  static defaultProps = {
    prefixCls: "deer-ui-date-picker",
    format: "YYYY-MM-DD",
    size: "default",
    placeholder: "",
    allowClear: true,
    onChange: () => {},
    getPopupContainer: () => document.body,
    position: "bottom",
    loading: false,
    tip: "",
    suffix: <CalendarIcon />,
    disabledDate: () => false,
    showDayInPrevMonth: true,
    showDayInNextMonth: true,
    showToday: true
  };

  state = {
    momentSelected: this.props.defaultValue || this.props.value || moment(),
    momentSelectedTemp: this.props.defaultValue || this.props.value || moment(),
    visible: this.props.visible || false,
    isSelectedMoment: !!(this.props.defaultValue || this.props.value),
    left: 0,
    top: 0,
    width: 0
  };

  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler, false);
    if (this.props.visible) {
      this.setWrapperBounding();
    }
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler);
  }
  onClickOutsideHandler = e => {
    e.stopPropagation();
    if (
      this.state.visible &&
      !this.toggleContainer.current.contains(e.target) &&
      !this.wrapper.current.contains(e.target)
    ) {
      this.setState({
        visible: false
      });
    }
  };
  setWrapperBounding(cb = () => {}) {
    const { left, top, width } = this.getWrapperBounding();
    this.setState({ left, top, width }, cb);
  }

  getWrapperBounding() {
    const {
      left,
      top,
      height,
      width
    } = this.toggleContainer.current.getBoundingClientRect();

    const {
      height: wrapperHeight
    } = this.wrapper.current.getBoundingClientRect();

    const { scrollY, scrollX } = window;
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
  addMonth = () => {
    this.setState({
      momentSelected: this.state.momentSelected.clone().add(1, "month")
    });
  };

  subtractMonth = () => {
    this.setState({
      momentSelected: this.state.momentSelected.clone().add(-1, "month")
    });
  };

  onClickHandler = () => {
    const visible = !this.state.visible;
    this.setState({
      visible
    },()=>{
      if (visible) {
        this.setWrapperBounding(() => {
          scrollIntoViewIfNeeded(this.wrapper.current, {
            scrollMode: "if-needed",
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        });
      }
    });
  };

  selectedDate = currentDate => isNextMonth => () => {
    let momentSelected = this.state.momentSelected.clone();

    if (isNextMonth === true) {
      momentSelected.add(1, "month").date(currentDate);
    } else if (isNextMonth === false) {
      momentSelected.subtract(1, "month").date(currentDate);
    } else {
      momentSelected.date(currentDate);
    }
    this.setState(
      {
        momentSelected,
        visible: false,
        momentSelectedTemp: momentSelected.clone(),
        isSelectedMoment: true
      },
      () => {
        this.props.onChange(
          currentDate,
          this.state.momentSelected,
          this.state.momentSelected.format(this.props.format)
        );
      }
    );
  };
  renderCalendarContent = () => {
    const {
      prefixCls,
      disabledDate,
      showDayInPrevMonth,
      showDayInNextMonth,
      locale
    } = this.props;

    const momentDateFirst = this.state.momentSelected.clone().date(1);

    const dayOfFirstDate = momentDateFirst.day(); //获取第一天在周几  0是周天
    const weekdayInMonth = momentDateFirst.isoWeekday(); //获取或设置 ISO 星期几  其中 1 是星期一、7 是星期日。

    const momentLastMonth = momentDateFirst.clone().add(-1, "months");
    const lastMonthDaysInMonth = momentLastMonth.daysInMonth(); //获取上个月的天数

    const daysInMonth = momentDateFirst.daysInMonth(); //获取本月天数
    const lastDaysInMonth = (daysInMonth + weekdayInMonth - 1) % WEEKDAY; // 后面还剩余几天
    return (
      <>
        <div>
          {locale.week_days.map(day => (
            <span
              className={cls(`${prefixCls}-item`, `${prefixCls}-day-title`)}
              key={day}
            >
              {day}
            </span>
          ))}
        </div>
        {new Array(weekdayInMonth - 1).fill().map((_, date) => {
          const currentDate =
            dayOfFirstDate === 0
              ? lastMonthDaysInMonth - WEEKDAY + date + 2
              : lastMonthDaysInMonth - dayOfFirstDate + date + 2;
          const isDisabled = disabledDate(
            momentDateFirst.clone().date(date + 1)
          );
          return (
            <span
              className={cls(`${prefixCls}-item`, `${prefixCls}-last-month`, {
                [`${prefixCls}-disabled-date`]: isDisabled
              })}
              key={`first-date-${date}`}
              onClick={
                !isDisabled ? this.selectedDate(currentDate)(false) : undefined
              }
            >
              {showDayInPrevMonth && currentDate}
            </span>
          );
        })}
        {new Array(daysInMonth).fill(null).map((_, date) => {
          const currentDate = date + 1;
          const isDisabled = disabledDate(
            momentDateFirst.clone().date(currentDate)
          );
          return (
            <span
              className={cls(
                `${prefixCls}-item`,
                `${prefixCls}-current-month`,
                {
                  [`${prefixCls}-selected-date`]:
                    this.state.momentSelected.date() === currentDate,
                  [`${prefixCls}-disabled-date`]: isDisabled
                }
              )}
              key={`date-${date}`}
              onClick={
                !isDisabled ? this.selectedDate(currentDate)() : undefined
              }
            >
              {currentDate}
            </span>
          );
        })}
        {new Array(lastDaysInMonth === 0 ? 0 : WEEKDAY - lastDaysInMonth)
          .fill(null)
          .map((_, date) => {
            const currentDate = date + 1;
            const isDisabled = disabledDate(
              momentDateFirst
                .clone()
                .add(1, "month")
                .date(currentDate)
            );
            return (
              <span
                className={cls(`${prefixCls}-item`, `${prefixCls}-next-month`, {
                  [`${prefixCls}-disabled-date`]: isDisabled
                })}
                key={`next-date-${date}`}
                onClick={
                  showDayInNextMonth && !isDisabled
                    ? this.selectedDate(currentDate)(true)
                    : undefined
                }
              >
                {showDayInNextMonth && currentDate}
              </span>
            );
          })}
      </>
    );
  };

  onClear = () => {
    const momentSelected = moment();
    this.setState({
      momentSelected,
      visible: this.state.visible === null ? null : false,
      isSelectedMoment: false
    });
  };
  onSelectToday = () => {
    const momentSelected = moment();
    this.setState(
      {
        momentSelected,
        selectedDate: momentSelected.date(),
        isSelectedMoment: false
      },
      () => {
        this.selectedDate(this.state.selectedDate)()();
      }
    );
  };
  render() {
    const {
      visible,
      width,
      left,
      top,
      momentSelectedTemp,
      isSelectedMoment
    } = this.state;
    const {
      prefixCls,
      className,
      size,
      getPopupContainer,
      style,
      placeholder,
      allowClear,
      disabled,
      loading,
      tip,
      format,
      suffix,
      extraFooter,
      showToday,
      locale,
      disabledDate, //eslint-disable-line
      showDayInPrevMonth, //eslint-disable-line
      showDayInNextMonth, //eslint-disable-line
      ...attr
    } = this.props;
    return (
      <div
        className={cls(prefixCls, className)}
        {...attr}
        style={style}
        ref={this.toggleContainer}
      >
        <div
          className={cls(`${prefixCls}-inner`, {
            [`${prefixCls}-active`]: visible
          })}
        >
          <Input
            value={isSelectedMoment ? momentSelectedTemp.format(format) : ""}
            disabled={disabled}
            readOnly
            size={size}
            placeholder={placeholder || locale.placeholder}
            style={{
              width: style && style.width
            }}
            suffix={suffix}
            allowClear={allowClear}
            onClear={this.onClear}
            onClick={this.onClickHandler}
          />
        </div>
        {createPortal(
          <div
            className={cls(`${prefixCls}-content`, {
              [`${prefixCls}-open`]: visible,
              [`${prefixCls}-close`]: !visible
            })}
            ref={this.wrapper}
            style={{
              width,
              left,
              top
            }}
          >
            <Spin spinning={loading} tip={tip} size="large">
              <div className={cls(`${prefixCls}-header`)}>
                <span className={cls(`${prefixCls}-date`)}>
                  {this.state.momentSelected.year()}年 {"  "}
                  {this.state.momentSelected.month() + 1}月
                </span>
                <span className={cls(`${prefixCls}-switch`)}>
                  <span
                    className={cls(`${prefixCls}-switch-group`)}
                    onClick={this.subtractMonth}
                  >
                    <ArrowLeftIcon />
                  </span>
                  <span
                    className={cls(`${prefixCls}-switch-group`)}
                    onClick={this.addMonth}
                  >
                    <ArrowRightIcon />
                  </span>
                </span>
              </div>
              <div
                className={cls(`${prefixCls}-items`, {
                  [`${prefixCls}-loading`]: loading
                })}
              >
                {this.renderCalendarContent()}
              </div>
              {extraFooter && (
                <div className={`${prefixCls}-footer-extra`}>{extraFooter}</div>
              )}
              {showToday || allowClear ? (
                <div
                  className={cls(`${prefixCls}-footer`, {
                    [`${prefixCls}-has-extra-footer`]: extraFooter,
                    [`${prefixCls}-has-border`]: showToday || allowClear
                  })}
                >
                  {showToday && (
                    <div
                      className={cls(`${prefixCls}-footer-today`)}
                      onClick={this.onSelectToday}
                    >
                      {locale.today}
                    </div>
                  )}
                  {allowClear && (
                    <div
                      className={cls(`${prefixCls}-footer-clear`)}
                      onClick={this.onClear}
                    >
                      {locale.clear}
                    </div>
                  )}
                </div>
              ) : (
                undefined
              )}
            </Spin>
          </div>,
          getPopupContainer()
        )}
      </div>
    );
  }
}

export default LocaleWrapper(DatePicker,'DatePicker');
