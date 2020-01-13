/**
 * 密码框
 */

 import React, { PureComponent } from 'react';
 import PropTypes from "prop-types";
 import Input from './input';
 import { PasswordShowIcon, PasswordHideIcon } from "../icon";

 class InputPassword extends PureComponent {
     state = {
        passwordVisible: false
     }
    static propTypes = {
        prefixCls: PropTypes.string.isRequired,
    }
    static defaultProps = {
        prefixCls: "deer-ui-password"
    }
    togglePasswordVisible = () => {
        this.setState({
            passwordVisible: !this.state.passwordVisible
          });
    }
    render() {
        const { prefixCls, ...attr } = this.props;
        const { passwordVisible } = this.state
        const type = passwordVisible ? "text" : "password";
        return (
            <Input className={prefixCls} {...attr} type={type} suffix={<div
                className={`${prefixCls}-suffix`} onClick={this.togglePasswordVisible}>
                    {passwordVisible ? <PasswordHideIcon /> : <PasswordShowIcon />}
            </div>}/>
        )
    }
 }

 export default InputPassword;
