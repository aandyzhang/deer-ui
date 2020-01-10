import React, { PureComponent } from 'react';
import cls from 'classnames'
import PropTypes from 'prop-types'
import { EmptyIcon } from '../icon';
class Empty extends PureComponent {
    static propsTypes = {
        description: PropTypes.string,
        height: PropTypes.number,
        prefixCls: PropTypes.string.isRequired
    }
    static defaultProps = {
        prefixCls: "deer-ui-empty",
        icon: <EmptyIcon />,
        height: 200,
        description: "暂无数据"
    }
    render() {
        const { height, description, prefixCls,icon, style, children,className,...attr} = this.props;
        return (
            <div className={cls(`${prefixCls}`, {[`${className}`]: className})} {...attr} style={{
                height,
                ...style
              }}>
                <div className={`${prefixCls}-icon`}>
                    {icon}
                </div>
                <div className={`${prefixCls}-des`}>
                    {description}
                </div>
                {children}
            </div>
        )
    }
}

export default Empty
