import React, { Component } from "react";
import zh_cn from './lang/zh-cn';
import en from './lang/en';
import PropTypes from "prop-types";
import { getQueryString } from '../utils';
const lang = getQueryString('lang');

export const LocaleContext = React.createContext(lang === "en" ? en : zh_cn);

class LocaleProvider extends Component {
  static propTypes = {
    locale: PropTypes.object
  }
  static defaultProps = {
    locale: {}
  }
  render() {
    const { children,locale } = this.props
    return (
      <LocaleContext.Provider value={locale}>
        { React.Children.only(children) }
      </LocaleContext.Provider>
    );
  }
}

export default LocaleProvider;
