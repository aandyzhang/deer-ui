import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames'
import Radio from './radio';

class RadioGroup extends Component {
    state = {
        value: this.props.value || this.props.defaultValue
    }
    static propTypes = {
        prefixCls: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        prefixCls: "deer-ui-radio-group",
        disabled: false,
        onChange: () => {},
    }
    _onChange = e => {
        this.setState({
            value: e.target.value
          });
        if(this.props.onChange) {
            this.props.onChange(e);
        }
    }
    static getDerivedStateFromProps({value}, prevState) {
        //当props改变时，重新计算props值
        if(value === prevState.value ) {
            return {
                value
            }
        }
        return null
      }

    render() {
        const { children,
            className,
            disabled,
            onChange,  //eslint-disable-line
            prefixCls,
            ...attr 
        } = this.props;
        const { value } = this.state;
        const groups = React.Children.map(children,(item,key)=>{
            return (
                <Radio 
                key={key}
                disabled={disabled}
                {...item.props}
                onChange={this._onChange}
                checked={value === item.props.value}
                />
            )
        })
        return (
            <div className={cls(prefixCls,className)} {...attr}>
                {
                    groups
                }
            </div>
        )
    }
}

export default RadioGroup;
